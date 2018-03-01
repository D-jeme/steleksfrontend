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

import { ModeratorComponent } from './components/moderator/moderator.component';

import { FooterComponent } from './components/footer/footer.component';

import { EventpreviewComponent } from './components/eventpreview/eventpreview.component';

import { EventmainpictureComponent } from './components/eventmainpicture/eventmainpicture.component';

import { AbouteventComponent} from './components/aboutevent/aboutevent.component';

import { SifipreviewComponent} from './components/sifipreview/sifipreview.component';

import { FormaElektrijadaComponent} from './components/formaelektrijada/formaelektrijada.component';

import { RegistracijaComponent } from './components/registracija/registracija.component';

import { FormaSifiComponent} from './components/formasifi/formasifi.component';

import { AdminOpcijeComponent} from './components/adminopcije/adminopcije.component';

import { AdminComponent} from './components/admin/admin.component';

import { ModeratorOpcijeComponent} from './components/moderatoropcije/moderatoropcije.component';

import { SuperAdminComponent} from './components/superadmin/superadmin.component';

import { SuperAdminOpcijeComponent} from './components/superadminopcije/superadminopcije.component';

import { FormaGalerijaComponent } from './components/formagalerija/formagalerija.component';

import { FormaBeforeEventComponent } from './components/formabeforeevent/formabeforeevent.component';

import { FormaAfterEventComponent } from './components/formaafterevent/formaafterevent.component';

import { FormaSponzoriComponent } from './components/formasponzori/formasponzori.component';

import { Eventpreview2Component } from './components/eventpreview2/eventpreview2.component';

import { Eventpreview3Component } from './components/eventpreview3/eventpreview3.component';

import { Eventpreview4Component } from './components/eventpreview4/eventpreview4.component';

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

  { path:'moderator', component: ModeratorComponent },

  { path:'event', component: EventpreviewComponent },

  { path:'sifipreview', component: SifipreviewComponent },

  { path:'formaelektrijada', component: FormaElektrijadaComponent },

  { path:'formasifi', component: FormaSifiComponent },

  { path:'registracija', component: RegistracijaComponent},

  { path:'adminopcije', component: AdminOpcijeComponent},

  { path:'admin', component: AdminComponent},

  { path:'moderatoropcije', component: ModeratorOpcijeComponent},

  { path:'superadmin', component: SuperAdminComponent},

  { path:'superadminopcije', component: SuperAdminOpcijeComponent},

  { path:'formagalerija', component: FormaGalerijaComponent},

  { path:'formabeforeevent', component: FormaBeforeEventComponent},

  { path:'formaafterevent', component: FormaAfterEventComponent},

  { path:'formasponzori', component: FormaSponzoriComponent},

  { path:'event2', component: Eventpreview2Component },

  { path:'event3', component: Eventpreview3Component },

  { path:'event4', component: Eventpreview4Component },

  { path: '**', pathMatch: 'full', redirectTo: '' }

];



export const AppRouting = RouterModule.forRoot(app_routes);
