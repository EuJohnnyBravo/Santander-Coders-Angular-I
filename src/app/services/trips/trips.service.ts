import { inject, Injectable } from '@angular/core';
import { Viagem } from '../../interfaces/trips';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  localStorageS = inject(LocalStorageService);
  tripsData: Viagem[] = this.localStorageS.getItem('trips');

  constructor() {
    // this.localStorageS.setItem('trips', JSON.stringify(this.tripsData));
  }

  getTrips(): Observable<Viagem[]> {
    return of(this.tripsData);
  }

  setTrip(trip: Viagem): void {
    this.tripsData.push(trip);
  }

  setLocalStorage(): void {
    this.localStorageS.setItem('trips', JSON.stringify(this.tripsData));
  }
}
