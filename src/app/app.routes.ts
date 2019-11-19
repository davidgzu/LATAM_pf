import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CasaTomadaComponent } from './Components/casa-tomada/casa-tomada.component';
import { LaNocheComponent } from './Components/la-noche/la-noche.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'casa-tomada', component: CasaTomadaComponent },
  { path: 'la-noche-boca-arriba', component: LaNocheComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
