import { Injectable } from '@angular/core';
import { Participante, Viagem } from '../../interfaces/trips';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): Viagem[] {
    const dataString = localStorage.getItem(key);
    const data = dataString ? JSON.parse(dataString) : [];
    return data.map((item: any) => {
      return new Viagem(
        item.viagem,
        new Date(item.inicio),
        new Date(item.fim),
        item.criadoPor,
        item.email,
        item.participante.map((participante: Participante) => {
          return new Participante(participante.nome, participante.email);
        }),
        item._id
      );
    });
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
