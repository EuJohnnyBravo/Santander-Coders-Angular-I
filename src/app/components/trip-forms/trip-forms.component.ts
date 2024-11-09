import { Component, inject, Input } from '@angular/core';
import { FormInputComponent } from './form-input/form-input.component';
import { NgClass, NgIf } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Viagem } from '../../interfaces/trips';
import { Router } from '@angular/router';
import { TripsService } from '../../services/trips/trips.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-trip-forms',
  standalone: true,
  imports: [
    FormInputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    NgClass,
    NgIf,
  ],
  templateUrl: './trip-forms.component.html',
  styleUrl: './trip-forms.component.css',
})
export class TripFormsComponent {
  form: FormGroup;
  tripService = inject(TripsService);

  @Input() lock: boolean = false;
  @Input() flex: boolean = false;
  @Input() grid: boolean = false;
  @Input() trip: Viagem | null = null;

  constructor(private router: Router) {
    this.form = new FormGroup(
      {
        destino: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        nome: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^[a-zA-Z\s]*$/),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.email,
        ]),
        inicio: new FormControl('', [Validators.required]),
        fim: new FormControl('', [Validators.required]),
      },
      { validators: this.dateRangeValidator }
    );
  }

  dateRangeValidator(
    group: AbstractControl
  ): { [key: string]: boolean } | null {
    const inicio = group.get('inicio')?.value;
    const fim = group.get('fim')?.value;

    if (inicio && fim && new Date(fim) < new Date(inicio)) {
      return { dateRangeInvalid: true };
    }
    return null;
  }

  get formControls() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.trip) {
      const { destino, nome, email, inicio, fim } = this.form.value;
      this.trip.viagem = destino;
      this.trip.criadoPor = nome;
      this.trip.email = email;
      this.trip.inicio = new Date(inicio);
      this.trip.fim = new Date(fim);
      this.tripService.setLocalStorage();
      alert('Viagem atualizada com sucesso!');
      this.router.navigate(['/']);
    } else {
      if (this.form.valid) {
        const { destino, nome, email, inicio, fim } = this.form.value;
        const newTrip = new Viagem(destino, inicio, fim, nome, email);
        this.tripService.tripsData.push(newTrip);
        this.tripService.setLocalStorage();
        alert('Viagem cadastrada com sucesso!');
        this.router.navigate(['/']);
      }
    }
  }

  ngOnInit(): void {
    if (this.trip) {
      this.form.patchValue({
        destino: this.trip.viagem,
        nome: this.trip.criadoPor,
        email: this.trip.email,
        inicio: new Date(this.trip.inicio).toISOString().substring(0, 10),
        fim: new Date(this.trip.fim).toISOString().substring(0, 10),
      });
    }
  }

  get destino(): FormControl {
    return this.form.get('destino') as FormControl;
  }

  get nome(): FormControl {
    return this.form.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get inicio(): FormControl {
    return this.form.get('inicio') as FormControl;
  }

  get fim(): FormControl {
    return this.form.get('fim') as FormControl;
  }
}
