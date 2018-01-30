import { Routes, RouterModule } from '@angular/router';

import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { ElektrijadapageComponent } from './components/elektrijadapage/elektrijadapage.component';
import { GallerypageComponent } from './components/gallerypage/gallerypage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LearningpageComponent } from './components/learningpage/learningpage.component';
import { UpravniodborComponent } from './components/upravniodbor/upravniodbor.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NewspageComponent } from './components/newspage/newspage.component';
import { SIFIpageComponent } from './components/sifipage/sifipage.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventpreviewComponent } from './components/eventpreview/eventpreview.component';
import {EventmainpictureComponent } from './components/eventmainpicture/eventmainpicture.component';
import {AbouteventComponent} from './components/aboutevent/aboutevent.component';
import {SifipreviewComponent} from './components/sifipreview/sifipreview.component';
import {FormaElektrijadaComponent} from './components/formaelektrijada/formaelektrijada.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';


const app_routes:Routes = [
  { path:'', component: MainpageComponent },
  { path:'about', component: AboutpageComponent },
  { path:'news', component: NewspageComponent },
  { path:'sifi', component: SIFIpageComponent },
  { path:'upravniodbor', component: UpravniodborComponent },
  { path:'gallery', component: GalleryComponent },
  { path:'elektrijada', component: ElektrijadapageComponent },
  { path:'materijali', component: LearningpageComponent },
  { path:'prijava', component: PrijavaComponent },
  { path:'event', component: EventpreviewComponent },
  { path:'sifipreview', component: SifipreviewComponent },
  { path:'formaelektrijada', component: FormaElektrijadaComponent },
  { path:'registracija', component: RegistracijaComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(app_routes);
