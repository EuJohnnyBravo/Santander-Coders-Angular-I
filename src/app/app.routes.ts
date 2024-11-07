import { Routes } from '@angular/router';
import { TripsComponent } from './components/trips/trips.component';

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
    path: 'info/:id',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
