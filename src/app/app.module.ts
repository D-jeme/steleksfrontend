import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouting } from './routes';


import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainpictureComponent } from './components/mainpicture/mainpicture.component';
import { StelekstvComponent } from './components/stelekstv/stelekstv.component';
import { UpravniodborComponent } from './components/upravniodbor/upravniodbor.component';
import { SponzoriComponent } from './components/sponzori/sponzori.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { NewspageComponent } from './components/newspage/newspage.component';
import { GallerypageComponent } from './components/gallerypage/gallerypage.component';
import { AlbumipageComponent } from './components/albumipage/albumipage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SIFIpageComponent } from './components/sifipage/sifipage.component';
import { ElektrijadapageComponent } from './components/elektrijadapage/elektrijadapage.component';
import { LearningpageComponent } from './components/learningpage/learningpage.component';
import { ModeratorComponent } from './components/moderator/moderator.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventpreviewComponent } from './components/eventpreview/eventpreview.component';
import { EventmainpictureComponent } from './components/eventmainpicture/eventmainpicture.component';
import { AbouteventComponent } from './components/aboutevent/aboutevent.component';
import { SifipreviewComponent } from './components/sifipreview/sifipreview.component';
import { TekstComponent } from './components/tekst/tekst.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormaElektrijadaComponent } from './components/formaelektrijada/formaelektrijada.component';
import { RegistracijaComponent} from './components/registracija/registracija.component';
import { FormaSifiComponent } from './components/formasifi/formasifi.component';
<<<<<<< HEAD
import {AdminComponent} from './components/admin/admin.component';
import {PrijavaAdminComponent} from './components/prijavaadmin/prijavaadmin.component';
import {ModeratorComponent} from './components/moderator/moderator.component';
import { FormaSponzoriComponent } from './components/formasponzori/formasponzori.component';
=======
import { AdminOpcijeComponent} from './components/adminopcije/adminopcije.component';
import { AdminComponent} from './components/admin/admin.component';
import { ModeratorOpcijeComponent} from './components/moderatoropcije/moderatoropcije.component';
import { SuperAdminComponent} from './components/superadmin/superadmin.component';
import { SuperAdminOpcijeComponent} from './components/superadminopcije/superadminopcije.component';
>>>>>>> 7e950bc7cdbf0d82c8350863056561379ec5501c

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainpictureComponent,
    StelekstvComponent,
    UpravniodborComponent,
    SponzoriComponent,
    MainpageComponent,
    AboutpageComponent,
    NewspageComponent,
    GallerypageComponent,
    GalleryComponent,
    AlbumipageComponent,
    SIFIpageComponent,
    ElektrijadapageComponent,
    LearningpageComponent,
    ModeratorComponent,
    FooterComponent,
    EventpreviewComponent,
    EventmainpictureComponent,
    AbouteventComponent,
    SifipreviewComponent,
    TekstComponent,
    SkillsComponent,
    FormaElektrijadaComponent,
    RegistracijaComponent,
    AdminOpcijeComponent,
    FormaSifiComponent,
<<<<<<< HEAD
    PrijavaAdminComponent,
    ModeratorComponent,
    FormaSponzoriComponent
=======
    AdminComponent,
    ModeratorOpcijeComponent,
    SuperAdminComponent,
    SuperAdminOpcijeComponent,
>>>>>>> 7e950bc7cdbf0d82c8350863056561379ec5501c
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
