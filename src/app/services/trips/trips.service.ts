import { Participante, Viagem } from '../../interfaces/trips';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  localStorageS = inject(LocalStorageService);
  tripsData: Viagem[] = this.localStorageS.getItem('trips');

  participantsData: Participante[] = [
    new Participante('Kauan Herbst', 'kauan@gmail.com'),
    new Participante('Herbst Kauan', 'herbst@gmail.com'),
    new Participante('Kauan Herbst', 'kauan@gmail.com'),
    new Participante('Herbst Kauan', 'herbst@gmail.com'),
    new Participante('Kauan Herbst', 'kauan@gmail.com'),
    new Participante('Herbst Kauan', 'herbst@gmail.com'),
    new Participante('Kauan Herbst', 'kauan@gmail.com'),
    new Participante('Herbst Kauan', 'herbst@gmail.com'),
    new Participante('Kauan Herbst', 'kauan@gmail.com'),
    new Participante('Herbst Kauan', 'herbst@gmail.com'),
  ];

  constructor() {}

  getTrips(): Viagem[] {
    return this.tripsData;
  }

  getParticipants(): Observable<Participante[]> {
    return of(this.participantsData);
  }

  setTrip(trip: Viagem): void {
    this.tripsData.push(trip);
  }

  setLocalStorage(): void {
    this.localStorageS.setItem('trips', JSON.stringify(this.tripsData));
  }

  getTripById(id: string) {
    return this.tripsData.find((travel) => travel.id === id);
  }

  searchTrips(searchValue: string): Viagem[] {
    if (!searchValue) {
      return this.tripsData;
    }
    return this.tripsData.filter((trip) => {
      return trip.viagem.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
