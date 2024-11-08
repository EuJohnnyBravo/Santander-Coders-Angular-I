import { Component, Input } from '@angular/core';
import { Viagem } from '../../../interfaces/trips';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trip-table',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, RouterLink],
  templateUrl: './trip-table.component.html',
  styleUrl: './trip-table.component.css',
})
export class TripTableComponent {
  table: string[] = ['Viagem', 'inicio', 'fim', 'status', 'criado por', 'ação'];
  @Input() tripsData: Observable<Viagem[]> = new Observable<Viagem[]>();

  verificaStatus(ini: Date, fim: Date, estaCancelada: boolean): string {
    const hoje = new Date();

    if (estaCancelada) {
      return 'Cancelada';
    }
    if (hoje < new Date(ini)) {
      return 'Planejada';
    }
    if (hoje > new Date(fim)) {
      return 'Concluída';
    }
    return 'Em andamento';
  }
}
