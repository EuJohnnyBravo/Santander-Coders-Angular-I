import { Routes } from '@angular/router';
import { TripsComponent } from './components/trips/trips.component';
import { DataTripComponent } from './components/data-trip/data-trip.component';

export const routes: Routes = [
  {
    path: '',
    component: TripsComponent,
  },
  {
    path: 'new',
    redirectTo: '',
  },
  {
    path: 'edit/:id',
    redirectTo: '',
  },
  {
    path: 'info',
    component: DataTripComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
