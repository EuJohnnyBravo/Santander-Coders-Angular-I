import { Component, OnInit } from '@angular/core';
import { DataPartTableComponent } from './data-part-table/data-part-table.component';
import { Viagem } from '../../interfaces/trips';
import { TripsService } from '../../services/trips/trips.service';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-data-trip',
  standalone: true,
  imports: [
    DataPartTableComponent,
    ButtonComponent,
    CommonModule,
    ModalComponent,
  ],
  templateUrl: './data-trip.component.html',
  styleUrl: './data-trip.component.css',
})
export class DataTripComponent implements OnInit {
  trip!: Viagem;
  isModalCancelOpen = false;
  isModalDeleteOpen = false;

  constructor(
    private tripsService: TripsService,
    private router: ActivatedRoute
  ) {}

  openModalCancel() {
    this.isModalCancelOpen = true;
  }

  openModalDelete() {
    this.isModalDeleteOpen = true;
  }

  closeModal() {
    this.isModalCancelOpen = false;
    this.isModalDeleteOpen = false;
  }

  ngOnInit(): void {
    this.trip = this.tripsService.getTripById(
      this.router.snapshot.params['id']
    )!;
  }
}
