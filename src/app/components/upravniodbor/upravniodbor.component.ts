import { Component, OnInit } from '@angular/core';
import { ClanUO } from '../../models/upravniodbor';

@Component({
  selector: 'app-upravniodbor',
  templateUrl: './upravniodbor.component.html',
  styleUrls: ['./upravniodbor.component.css']
})
export class UpravniodborComponent implements OnInit {
  amina_aljicevic: string;
  fuad_hajdarevic:string;
  mehmed_kadric:string;
  edina_osmanspahic:string;
  adis_dedic:string;
  erol_terovic:string;
  miran_hadziomerovic:string;
  harun_muhic:string;
  osman_mehremic:string;
  almin_repesa:string;
  prvi: ClanUO;
  drugi: ClanUO;
  treci: ClanUO;
  cetvrti: ClanUO;
  peti: ClanUO;
  sesti: ClanUO;
  sedmi: ClanUO;
  osmi: ClanUO;
  deveti: ClanUO;
  deseti: ClanUO;
  novi: ClanUO;
  clanovi: Array<ClanUO>;


  constructor() {
    this.amina_aljicevic ='assets/images/amina_aljicevic.jpg';
    this.fuad_hajdarevic='assets/images/fuad_hajdarevic.jpg';
    this.mehmed_kadric='assets/images/mehmed_kadric.jpg';
    this.adis_dedic='assets/images/adis_dedic.jpg';
    this.erol_terovic='assets/images/erol_terovic.jpg';
    this.miran_hadziomerovic='assets/images/miran_hadziomerovic.jpg';
    this.harun_muhic='assets/images/harun_muhic.jpg';
    this.osman_mehremic='assets/images/osman_mehremic.jpg';
    this.almin_repesa='assets/images/almin_repesa.jpg';
    this.edina_osmanspahic='assets/images/edina_osmanspahic.jpg';

    this.clanovi=new Array<ClanUO>();
    this.prvi=new ClanUO('Fuad', 'Hajdarević', 'Predsjednik STELEKS-a', this.fuad_hajdarevic);
    this.clanovi.push(this.prvi);
    this.drugi=new ClanUO('Amina', 'Aljićević', 'Potpredsjednik STELEKS-a', this.amina_aljicevic);
    this.clanovi.push(this.drugi);
    this.treci=new ClanUO('Mehmed', 'Kadrić', 'Sekretar STELEKS-a', this.mehmed_kadric);
    this.clanovi.push(this.treci);
    this.cetvrti=new ClanUO('Edina', 'Osmanspahić', 'Koordinator sektora za odnose s javnošću', this.edina_osmanspahic);
    this.clanovi.push(this.cetvrti);
    this.peti=new ClanUO('Miran', 'Hadžiomerović', 'Koordinator sektora za sport', this.miran_hadziomerovic);
    this.clanovi.push(this.peti);
    this.sesti=new ClanUO('Almin', 'Repeša', 'Zamjenik koordinatora sektora za sport', this.almin_repesa);
    this.clanovi.push(this.sesti);
    this.sedmi=new ClanUO('Adis', 'Dedić', 'Koordinator sektora za kulturu i zabavu', this.adis_dedic);
    this.clanovi.push(this.sedmi);
    this.osmi=new ClanUO('Erol', 'Terović', 'Zamjenik koordinatora sektora za kulturu i zabavu', this.erol_terovic);
    this.clanovi.push(this.osmi);
    this.deveti=new ClanUO('Harun', 'Muhić', 'Koordinator sektora za nauku', this.harun_muhic);
    this.clanovi.push(this.deveti);
    this.deseti=new ClanUO('Osman', 'Mehremić', 'Zamjenik koordinatora sektora za nauku', this.osman_mehremic);
    this.clanovi.push(this.deseti);
   }

  ngOnInit() {
  }

  dodajClanove(clan) {
    this.clanovi.push(clan);
  }

  dajNaziv(clan) {
    return clan.ime + ' ' + clan.prezime;
  }
}
