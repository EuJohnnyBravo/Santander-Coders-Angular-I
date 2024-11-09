import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormInputComponent } from '../new-trip/form-input/form-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from '../../services/trips/trips.service';
import { Participante, Viagem } from '../../interfaces/trips';
import { ParticipantsTableComponent } from './participants-table/participants-table.component';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [
    ButtonComponent,
    FormInputComponent,
    ReactiveFormsModule,
    ParticipantsTableComponent,
  ],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css',
})
export class EditTripComponent {
  form: FormGroup;
  formParticipantes: FormGroup;
  formMsg: string = '';
  tripServise = inject(TripsService);
  trip!: Viagem;

  constructor(
    private tripsService: TripsService,
    private router: ActivatedRoute
  ) {
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
    this.formParticipantes = new FormGroup({
      nomeParticipante: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^[a-zA-Z\s]*$/),
      ]),
      emailParticipante: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.email,
      ]),
    });
  }

  ngOnInit(): void {
    const tripId = this.router.snapshot.params['id'];
    this.trip = this.tripsService.getTripById(tripId)!;
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

  onSubmit() {
    if (this.form.valid) {
      const { destino, nome, email, inicio, fim } = this.form.value;
      this.trip.viagem = destino;
      this.trip.criadoPor = nome;
      this.trip.email = email;
      this.trip.inicio = new Date(inicio);
      this.trip.fim = new Date(fim);
      this.formMsg = 'Viagem atualizada com sucesso!';
    }
    console.log(this.trip);
    this.tripsService.setLocalStorage();
  }

  onSubmitParticipante() {
    if (this.formParticipantes.valid) {
      const { nomeParticipante, emailParticipante } =
        this.formParticipantes.value;
      const participante = new Participante(
        nomeParticipante,
        emailParticipante
      );
      this.trip.participante.push(participante);
      this.formParticipantes.reset();
    }
    console.log(this.trip);
    this.tripsService.setLocalStorage();
  }

  get nomeParticipante(): FormControl {
    return this.formParticipantes.get('nomeParticipante') as FormControl;
  }

  get emailParticipante(): FormControl {
    return this.formParticipantes.get('emailParticipante') as FormControl;
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
