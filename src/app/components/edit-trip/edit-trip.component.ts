import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormInputComponent } from '../trip-forms/form-input/form-input.component';
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
import { TripFormsComponent } from '../trip-forms/trip-forms.component';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [
    ButtonComponent,
    FormInputComponent,
    ReactiveFormsModule,
    ParticipantsTableComponent,
    TripFormsComponent,
  ],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css',
})
export class EditTripComponent {
  formParticipantes: FormGroup;
  formMsg: string = '';
  tripServise = inject(TripsService);
  trip!: Viagem;

  constructor(
    private tripsService: TripsService,
    private router: ActivatedRoute
  ) {
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

  ngOnInit() {
    const tripId = this.router.snapshot.params['id'];
    this.trip = this.tripServise.getTripById(tripId)!;
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
}
