import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TripsService } from '../../services/trips/trips.service';
import { Viagem } from '../../interfaces/trips';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  @Input() trip: Viagem = {} as Viagem;
  @Input() type: 'cancel' | 'delete' | 'alert' = 'alert';

  constructor(private tripsService: TripsService, private route: Router) {}

  cancelTrip() {
    this.tripsService.cancelTrip(this.trip.id);
    this.close.emit();
  }

  deleteTrip() {
    this.tripsService.deleteTrip(this.trip.id);
    this.close.emit();
    this.route.navigate(['/']);
  }

  closeModal() {
    this.close.emit();
  }

  isNull() {
    return this.trip.id === null;
  }
}
