import { Routes, RouterModule } from '@angular/router';

import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { ElektrijadapageComponent } from './components/elektrijadapage/elektrijadapage.component';
import { GallerypageComponent } from './components/gallerypage/gallerypage.component';
import { LearningpageComponent } from './components/learningpage/learningpage.component';
import { EventpageComponent } from './components/eventpage/eventpage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NewspageComponent } from './components/newspage/newspage.component';
import { SIFIpageComponent } from './components/sifipage/sifipage.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
//import { RegistracijaComponent } from './components/registracija/registracija.component';


const app_routes:Routes = [
  { path:'', component: MainpageComponent },
  { path:'about', component: AboutpageComponent },
  { path:'news', component: NewspageComponent },
  { path:'sifi', component: SIFIpageComponent },
  { path:'events', component: EventpageComponent },
  { path:'gallery', component: GallerypageComponent },
  { path:'elektrijada', component: ElektrijadapageComponent },
  { path:'materijali', component: LearningpageComponent },
  { path:'prijava', component: PrijavaComponent },
//  { path:'registracija', component: RegistracijaComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(app_routes);
