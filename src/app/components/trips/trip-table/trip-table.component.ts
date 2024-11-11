import { Component, Input } from '@angular/core';
import { Viagem } from '../../../interfaces/trips';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { StatusComponent } from '../../status/status.component';

@Component({
  selector: 'app-trip-table',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink, StatusComponent],
  templateUrl: './trip-table.component.html',
  styleUrl: './trip-table.component.css',
})
export class TripTableComponent {
  table: string[] = ['Viagem', 'inicio', 'fim', 'status', 'criado por', 'ação'];
  @Input() tripsData: Viagem[] = [];
}
