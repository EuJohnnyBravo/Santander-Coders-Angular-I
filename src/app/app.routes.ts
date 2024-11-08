import { Routes } from '@angular/router';
import { TripsComponent } from './components/trips/trips.component';
import { DataTripComponent } from './components/data-trip/data-trip.component';
import { NewTripComponent } from './components/new-trip/new-trip.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: TripsComponent,
  },
  {
    path: 'new',
    component: NewTripComponent,
  },
  {
    path: 'edit/:id',
    redirectTo: '',
  },
  {
    path: 'info/:id',
    component: DataTripComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
