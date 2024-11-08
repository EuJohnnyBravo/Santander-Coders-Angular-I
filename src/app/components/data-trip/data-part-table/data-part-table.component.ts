import { Component, Input } from '@angular/core';
import { Participante } from '../../../interfaces/trips';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-data-part-table',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './data-part-table.component.html',
  styleUrl: './data-part-table.component.css'
})
export class DataPartTableComponent {
  @Input() participantsData: Participante[] = [];
}
