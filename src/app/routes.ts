import { Routes, RouterModule } from '@angular/router';

import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { ElektrijadapageComponent } from './components/elektrijadapage/elektrijadapage.component';
import { GallerypageComponent } from './components/gallerypage/gallerypage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AlbumipageComponent } from './components/albumipage/albumipage.component';
import { LearningpageComponent } from './components/learningpage/learningpage.component';
import { UpravniodborComponent } from './components/upravniodbor/upravniodbor.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NewspageComponent } from './components/newspage/newspage.component';
import { SIFIpageComponent } from './components/sifipage/sifipage.component';
import { PrijavaModeratorComponent } from './components/prijavamoderator/prijavamoderator.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventpreviewComponent } from './components/eventpreview/eventpreview.component';
import { EventmainpictureComponent } from './components/eventmainpicture/eventmainpicture.component';
import { AbouteventComponent} from './components/aboutevent/aboutevent.component';
import { SifipreviewComponent} from './components/sifipreview/sifipreview.component';
import { FormaElektrijadaComponent} from './components/formaelektrijada/formaelektrijada.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';
import { FormaSifiComponent} from './components/formasifi/formasifi.component';
import { AdminComponent} from './components/admin/admin.component';
import { PrijavaAdminComponent} from './components/prijavaadmin/prijavaadmin.component';
import { ModeratorComponent} from './components/moderator/moderator.component';
import { FormaSponzoriComponent } from './components/formasponzori/formasponzori.component';

const app_routes:Routes = [
  { path:'', component: MainpageComponent },
  { path:'about', component: AboutpageComponent },
  { path:'news', component: NewspageComponent },
  { path:'sifi', component: SIFIpageComponent },
  { path:'upravniodbor', component: UpravniodborComponent },
  { path:'gallery', component: AlbumipageComponent },
  { path:'galerija', component: GalleryComponent },
  { path:'elektrijada', component: ElektrijadapageComponent },
  { path:'materijali', component: LearningpageComponent },
  { path:'prijavamoderator', component: PrijavaModeratorComponent },
  { path:'event', component: EventpreviewComponent },
  { path:'sifipreview', component: SifipreviewComponent },
  { path:'formaelektrijada', component: FormaElektrijadaComponent },
  { path:'formasifi', component: FormaSifiComponent },
  { path:'registracija', component: RegistracijaComponent},
  { path:'admin', component: AdminComponent},
  { path:'prijavaadmin', component: PrijavaAdminComponent},
  { path:'moderator', component: ModeratorComponent},
  { path:'formasponzori', component: FormaSponzoriComponent},

  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(app_routes);
