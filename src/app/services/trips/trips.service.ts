import { Injectable } from '@angular/core';
import { Participante, Viagem } from '../../interfaces/trips';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  tripsData: Viagem[] = [
    new Viagem(
      'Viagem a Paris',
      new Date(2024, 10, 15), // 15 de Novembro de 2024
      new Date(2024, 10, 25), // 25 de Novembro de 2024
      'Carlos'
    ),
    new Viagem(
      'Expedição ao Rio de Janeiro',
      new Date(2024, 11, 1), // 1 de Dezembro de 2024
      new Date(2024, 11, 7), // 7 de Dezembro de 2024
      'Ana'
    ),
    new Viagem(
      'Aventura no Amazonas',
      new Date(2024, 11, 10), // 10 de Dezembro de 2024
      new Date(2024, 11, 20), // 20 de Dezembro de 2024
      'João'
    ),
    new Viagem(
      'Roteiro em Buenos Aires',
      new Date(2024, 9, 25), // 25 de Outubro de 2024
      new Date(2024, 10, 5), // 5 de Novembro de 2024
      'Lucia'
    ),
    new Viagem(
      'Viagem à Nova York',
      new Date(2025, 0, 15), // 15 de Janeiro de 2025
      new Date(2025, 0, 25), // 25 de Janeiro de 2025
      'Marcos'
    ),
    new Viagem(
      'Viagem a Paris',
      new Date(2024, 10, 15), // 15 de Novembro de 2024
      new Date(2024, 10, 25), // 25 de Novembro de 2024
      'Carlos'
    ),
    new Viagem(
      'Expedição ao Rio de Janeiro',
      new Date(2024, 11, 1), // 1 de Dezembro de 2024
      new Date(2024, 11, 7), // 7 de Dezembro de 2024
      'Ana'
    ),
    new Viagem(
      'Aventura no Amazonas',
      new Date(2024, 11, 10), // 10 de Dezembro de 2024
      new Date(2024, 11, 20), // 20 de Dezembro de 2024
      'João'
    ),
    new Viagem(
      'Roteiro em Buenos Aires',
      new Date(2024, 9, 25), // 25 de Outubro de 2024
      new Date(2024, 10, 5), // 5 de Novembro de 2024
      'Lucia'
    ),
    new Viagem(
      'Viagem à Nova York',
      new Date(2025, 0, 15), // 15 de Janeiro de 2025
      new Date(2025, 0, 25), // 25 de Janeiro de 2025
      'Marcos'
    ),
    new Viagem(
      'Viagem a Paris',
      new Date(2024, 10, 15), // 15 de Novembro de 2024
      new Date(2024, 10, 25), // 25 de Novembro de 2024
      'Carlos'
    ),
    new Viagem(
      'Expedição ao Rio de Janeiro',
      new Date(2024, 11, 1), // 1 de Dezembro de 2024
      new Date(2024, 11, 7), // 7 de Dezembro de 2024
      'Ana'
    ),
    new Viagem(
      'Aventura no Amazonas',
      new Date(2024, 11, 10), // 10 de Dezembro de 2024
      new Date(2024, 11, 20), // 20 de Dezembro de 2024
      'João'
    ),
    new Viagem(
      'Roteiro em Buenos Aires',
      new Date(2024, 9, 25), // 25 de Outubro de 2024
      new Date(2024, 10, 5), // 5 de Novembro de 2024
      'Lucia'
    ),
    new Viagem(
      'Viagem à Nova York',
      new Date(2025, 0, 15), // 15 de Janeiro de 2025
      new Date(2025, 0, 25), // 25 de Janeiro de 2025
      'Marcos'
    ),
    new Viagem(
      'Viagem a Paris',
      new Date(2024, 10, 15), // 15 de Novembro de 2024
      new Date(2024, 10, 25), // 25 de Novembro de 2024
      'Carlos'
    ),
    new Viagem(
      'Expedição ao Rio de Janeiro',
      new Date(2024, 11, 1), // 1 de Dezembro de 2024
      new Date(2024, 11, 7), // 7 de Dezembro de 2024
      'Ana'
    ),
    new Viagem(
      'Aventura no Amazonas',
      new Date(2024, 11, 10), // 10 de Dezembro de 2024
      new Date(2024, 11, 20), // 20 de Dezembro de 2024
      'João'
    ),
    new Viagem(
      'Roteiro em Buenos Aires',
      new Date(2024, 9, 25), // 25 de Outubro de 2024
      new Date(2024, 10, 5), // 5 de Novembro de 2024
      'Lucia'
    ),
    new Viagem(
      'Viagem à Nova York',
      new Date(2025, 0, 15), // 15 de Janeiro de 2025
      new Date(2025, 0, 25), // 25 de Janeiro de 2025
      'Marcos'
    ),
    new Viagem(
      'Viagem a Paris',
      new Date(2024, 10, 15), // 15 de Novembro de 2024
      new Date(2024, 10, 25), // 25 de Novembro de 2024
      'Carlos'
    ),
    new Viagem(
      'Expedição ao Rio de Janeiro',
      new Date(2024, 11, 1), // 1 de Dezembro de 2024
      new Date(2024, 11, 7), // 7 de Dezembro de 2024
      'Ana'
    ),
    new Viagem(
      'Aventura no Amazonas',
      new Date(2024, 11, 10), // 10 de Dezembro de 2024
      new Date(2024, 11, 20), // 20 de Dezembro de 2024
      'João'
    ),
    new Viagem(
      'Roteiro em Buenos Aires',
      new Date(2024, 9, 25), // 25 de Outubro de 2024
      new Date(2024, 10, 5), // 5 de Novembro de 2024
      'Lucia'
    ),
    new Viagem(
      'Viagem à Nova York',
      new Date(2025, 0, 15), // 15 de Janeiro de 2025
      new Date(2025, 0, 25), // 25 de Janeiro de 2025
      'Marcos'
    ),
    new Viagem(
      'Viagem a Paris',
      new Date(2024, 10, 15), // 15 de Novembro de 2024
      new Date(2024, 10, 25), // 25 de Novembro de 2024
      'Carlos'
    ),
    new Viagem(
      'Expedição ao Rio de Janeiro',
      new Date(2024, 11, 1), // 1 de Dezembro de 2024
      new Date(2024, 11, 7), // 7 de Dezembro de 2024
      'Ana'
    ),
    new Viagem(
      'Aventura no Amazonas',
      new Date(2024, 11, 10), // 10 de Dezembro de 2024
      new Date(2024, 11, 20), // 20 de Dezembro de 2024
      'João'
    ),
    new Viagem(
      'Roteiro em Buenos Aires',
      new Date(2024, 9, 25), // 25 de Outubro de 2024
      new Date(2024, 10, 5), // 5 de Novembro de 2024
      'Lucia'
    ),
    new Viagem(
      'Viagem à Nova York',
      new Date(2025, 0, 15), // 15 de Janeiro de 2025
      new Date(2025, 0, 25), // 25 de Janeiro de 2025
      'Marcos'
    ),
  ];

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
    new Participante('Herbst Kauan', 'herbst@gmail.com')
  ];

  constructor() {}

  getTrips(): Observable<Viagem[]> {
    return of(this.tripsData);
  }

  getParticipants(): Observable<Participante[]> {
    return of(this.participantsData);
  }
}
