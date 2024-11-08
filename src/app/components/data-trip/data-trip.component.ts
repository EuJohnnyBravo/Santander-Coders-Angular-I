import { Component, OnInit } from '@angular/core';
import { DataPartTableComponent } from './data-part-table/data-part-table.component';
import { Observable } from 'rxjs';
import { Participante } from '../../interfaces/trips';
import { TripsService } from '../../services/trips/trips.service';

@Component({
  selector: 'app-data-trip',
  standalone: true,
  imports: [DataPartTableComponent],
  templateUrl: './data-trip.component.html',
  styleUrl: './data-trip.component.css'
})
export class DataTripComponent implements OnInit{
  participantsDataMock:Observable<Participante[]> = new Observable<Participante[]>();

  constructor(private tipsService: TripsService){}

  ngOnInit(): void {
    this.participantsDataMock = this.tipsService.getParticipants();
  }

}
