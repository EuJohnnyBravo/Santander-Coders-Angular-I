import { Participante, Viagem } from '../../interfaces/trips';
import { inject, Injectable } from '@angular/core';
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

  getParticipants(): Participante[] {
    return this.participantsData;
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

  cancelTrip(id: string) {
    this.getTripById(id)!.estaCancelada = !this.getTripById(id)!.estaCancelada;
    this.setLocalStorage();
  }

  deleteTrip(id: string) {
    this.tripsData = this.tripsData.filter((trip) => trip.id !== id);
    this.setLocalStorage();
  }

  searchTrips(searchValue: string): Viagem[] {
    if (!searchValue) {
      return this.tripsData;
    }
    return this.tripsData.filter((trip) => {
      return trip.viagem.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  removeParticipant(id: string): void {
    this.tripsData.filter((trip: Viagem) => {
      trip.participante = trip.participante.filter((participant) => {
        return participant.id !== id;
      });
    });
    this.setLocalStorage();
  }
}
