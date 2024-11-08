import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../services/trips/trips.service';
import { Observable } from 'rxjs';
import { Viagem } from '../../interfaces/trips';
import { CommonModule } from '@angular/common';
import { TripTableComponent } from './trip-table/trip-table.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    CommonModule,
    TripTableComponent,
    ButtonComponent,
  ],
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.css',
})
export class TripsComponent implements OnInit {
  tripsData: Observable<Viagem[]> = new Observable<Viagem[]>();

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.tripsData = this.tripsService.getTrips();
  }
}
