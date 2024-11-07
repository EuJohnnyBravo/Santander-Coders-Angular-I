import { Routes } from '@angular/router';
import { TripsComponent } from './components/trips/trips.component';

export const routes: Routes = [
  {
    path: '',
    component: TripsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
