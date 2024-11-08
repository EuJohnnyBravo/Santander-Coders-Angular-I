import { Component, OnInit } from '@angular/core';
import { DataPartTableComponent } from './data-part-table/data-part-table.component';
import { Viagem } from '../../interfaces/trips';
import { TripsService } from '../../services/trips/trips.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-trip',
  standalone: true,
  imports: [DataPartTableComponent, ButtonComponent, CommonModule],
  templateUrl: './data-trip.component.html',
  styleUrl: './data-trip.component.css',
})
export class DataTripComponent implements OnInit {
  trip!: Viagem;

  constructor(
    private tripsService: TripsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.trip = this.tripsService.getTripById(
      this.router.snapshot.params['id']
    )!;
  }
}
