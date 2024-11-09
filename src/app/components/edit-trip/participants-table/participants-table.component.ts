import { NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Participante } from '../../../interfaces/trips';
import { TripsService } from '../../../services/trips/trips.service';

@Component({
  selector: 'app-participants-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './participants-table.component.html',
  styleUrl: './participants-table.component.css',
})
export class ParticipantsTableComponent {
  @Input() participantsData: Participante[] = [];
  tripServise = inject(TripsService);

  removeParticipante(id: string) {
    this.tripServise.removeParticipant(id);
  }
}
