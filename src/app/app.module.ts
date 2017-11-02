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
import { EventpageComponent } from './components/eventpage/eventpage.component';
import { GallerypageComponent } from './components/gallerypage/gallerypage.component';
import { SIFIpageComponent } from './components/sifipage/sifipage.component';
import { ElektrijadapageComponent } from './components/elektrijadapage/elektrijadapage.component';
import { LearningpageComponent } from './components/learningpage/learningpage.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { FooterComponent } from './components/footer/footer.component';
//import {RegistracijaComponent} from './components/registracija/registracija.component';

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
    EventpageComponent,
    GallerypageComponent,
    SIFIpageComponent,
    ElektrijadapageComponent,
    LearningpageComponent,
    PrijavaComponent,
    FooterComponent,
    //RegistracijaComponent
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
