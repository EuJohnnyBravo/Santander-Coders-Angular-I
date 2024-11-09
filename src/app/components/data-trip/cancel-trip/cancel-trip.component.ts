import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { CommonModule } from '@angular/common';
import { TripsService } from '../../../services/trips/trips.service';

@Component({
  selector: 'app-cancel-trip',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './cancel-trip.component.html',
  styleUrl: './cancel-trip.component.css'
})
export class CancelTripComponent {
  @Output() close = new EventEmitter<void>();
  @Input() tripId: string = "";

  constructor(private tripsService: TripsService){}

  cancelTrip(){
    this.tripsService.cancelTrip(this.tripId)
    this.close.emit();
  }

  closeModal() {
    this.close.emit();
  }
}
