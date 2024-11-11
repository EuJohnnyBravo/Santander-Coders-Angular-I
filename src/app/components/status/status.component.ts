import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Viagem } from '../../interfaces/trips';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
})
export class StatusComponent {
  @Input() trip!: Viagem;

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
