import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { ServicesPage } from './pages/services-page/services-page';
import { Contact } from './pages/contact/contact';
import {PageExpertise} from './pages/page-expertise/page-expertise';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'services', component: ServicesPage },
  { path: 'page-expertise', component : PageExpertise},
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: ''}
];
