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
import { GalleryComponent } from './components/gallery/gallery.component';
import { SIFIpageComponent } from './components/sifipage/sifipage.component';
import { ElektrijadapageComponent } from './components/elektrijadapage/elektrijadapage.component';
import { LearningpageComponent } from './components/learningpage/learningpage.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventpreviewComponent } from './components/eventpreview/eventpreview.component';
import { EventmainpictureComponent } from './components/eventmainpicture/eventmainpicture.component';
import { AbouteventComponent } from './components/aboutevent/aboutevent.component';
import { SifipreviewComponent } from './components/sifipreview/sifipreview.component';
import { TekstComponent } from './components/tekst/tekst.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormaElektrijadaComponent } from './components/formaelektrijada/formaelektrijada.component';
import {RegistracijaComponent} from './components/registracija/registracija.component';



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
    SIFIpageComponent,
    ElektrijadapageComponent,
    LearningpageComponent,
    PrijavaComponent,
    FooterComponent,
    EventpreviewComponent,
    EventmainpictureComponent,
    AbouteventComponent,
    SifipreviewComponent,
    TekstComponent,
    SkillsComponent,
    FormaElektrijadaComponent,
    RegistracijaComponent
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
