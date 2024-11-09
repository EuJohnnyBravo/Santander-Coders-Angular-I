import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormInputComponent } from './form-input/form-input.component';
import { ButtonComponent } from '../button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { TripsService } from '../../services/trips/trips.service';
import { Viagem } from '../../interfaces/trips';

@Component({
  selector: 'app-new-trip',
  standalone: true,
  imports: [
    FormInputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    FormInputComponent,
    NgIf,
  ],
  templateUrl: './new-trip.component.html',
  styleUrl: './new-trip.component.css',
})
export class NewTripComponent {
  form: FormGroup;
  formMsg: string = '';
  tripServise = inject(TripsService);

  constructor(private router: Router) {
    this.form = new FormGroup({
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
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formMsg = 'Form Submitted!';
      const { destino, nome, email, inicio, fim } = this.form.value;
      const newTrip = new Viagem(destino, inicio, fim, nome, email);
      this.tripServise.tripsData.push(newTrip);
      this.tripServise.setLocalStorage();
      alert('Viagem cadastrada com sucesso!');
      this.router.navigate(['/']);
    } else {
      this.formMsg = 'Form is invalid';
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
