import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../services/trips/trips.service';
import { Observable } from 'rxjs';
import { Viagem } from '../../interfaces/trips';
import { TripTableComponent } from './trip-table/trip-table.component';
import { ButtonComponent } from '../button/button.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [TripTableComponent, ButtonComponent, SearchBarComponent],
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.css',
})
export class TripsComponent implements OnInit {
  tripsData: Viagem[] = [];
  searchValue: string = '';

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.tripsData = this.tripsService.getTrips();
  }

  onSearchValueChange(value: string): void {
    this.searchValue = value;
    console.log('Search Value:', this.searchValue);
    this.tripsData = this.tripsService.searchTrips(this.searchValue);
    console.log('Trips Data:', this.tripsData);
  }
}
