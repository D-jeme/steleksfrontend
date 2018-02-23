import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upravniodbor',
  templateUrl: './upravniodbor.component.html',
  styleUrls: ['./upravniodbor.component.css']
})
export class UpravniodborComponent implements OnInit {
  amina_aljicevic: string;
  fuad_hajdarevic:string;
  mehmed_kadric:string;
  nur_osmanbegovic:string;
  adis_dedic:string;
  erol_terovic:string;
  miran_hadziomerovic:string;
  harun_muhic:string;
  osman_merhemic:string;
  almin_repesa:string;
  edina_osmanspahic:string;
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
  jedanaesti: ClanUO;
  novi: ClanUO;
  clanovi: Array<ClanUO>;


  constructor() {
    this.amina_aljicevic ='assets/images/amina_aljicevic.jpg';
    this.fuad_hajdarevic='assets/images/fuad_hajdarevic.jpg';
    this.mehmed_kadric='assets/images/mehmed_kadric.jpg';
    this.nur_osmanbegovic='assets/images/nur_osmanbegovic.jpg'
    this.adis_dedic='assets/images/adis_dedic.jpg';
    this.erol_terovic='assets/images/erol_terovic.jpg';
    this.miran_hadziomerovic='assets/images/miran_hadziomerovic.jpg';
    this.harun_muhic='assets/images/harun_muhic.jpg';
    this.osman_merhemic='assets/images/osman_merhemic.jpg';
    this.almin_repesa='assets/images/almin_repesa.jpg';
    this.edina_osmanspahic='assets/images/edina_osmanspahic.jpg';

    this.clanovi=new Array<ClanUO>();
    this.prvi=new ClanUO('Fuad', 'Hajdarević', 'Predsjednik', this.fuad_hajdarevic);
    this.clanovi.push(this.prvi);
    this.drugi=new ClanUO('Amina', 'Aljićević', 'Potpredsjednik', this.amina_aljicevic);
    this.clanovi.push(this.drugi);
    this.treci=new ClanUO('Mehmed', 'Kadrić', 'Sekretar', this.mehmed_kadric);
    this.clanovi.push(this.treci);
    this.cetvrti=new ClanUO('Nur', 'Osmanbegović', 'Koordinator sektora za odnose s javnošću', this.nur_osmanbegovic);
    this.clanovi.push(this.cetvrti);
    this.peti=new ClanUO('Edina', 'Osmanspahić', 'Zamjenik koordinatora sektora za odnose s javnošću', this.edina_osmanspahic);
    this.clanovi.push(this.peti);
    this.sesti=new ClanUO('Miran', 'Hadžiomerović', 'Koordinator sektora za sport', this.miran_hadziomerovic);
    this.clanovi.push(this.sesti);
    this.sedmi=new ClanUO('Almin', 'Repeša', 'Zamjenik koordinatora sektora za sport', this.almin_repesa);
    this.clanovi.push(this.sedmi);
    this.osmi=new ClanUO('Adis', 'Dedić', 'Koordinator sektora za kulturu i zabavu', this.adis_dedic);
    this.clanovi.push(this.osmi);
    this.deveti=new ClanUO('Erol', 'Terović', 'Zamjenik koordinatora sektora za kulturu i zabavu', this.erol_terovic);
    this.clanovi.push(this.deveti);
    this.deseti=new ClanUO('Harun', 'Muhić', 'Koordinator sektora za nauku', this.harun_muhic);
    this.clanovi.push(this.deseti);
    this.jedanaesti=new ClanUO('Osman', 'Merhemić', 'Zamjenik koordinatora sektora za nauku', this.osman_merhemic);
    this.clanovi.push(this.jedanaesti);
   }

  ngOnInit() {
  }

  dodajClanove(clan) {
    this.clanovi.push(clan);
  }

  dodajClanove2(ime, prezime, uloga, slika) {  // kada iz baze saljemo ime, prezime, sliku i ulogu, dodaje se novi clan
    this.novi=new ClanUO(ime, prezime, uloga, slika);
    this.clanovi.push(this.novi);
  }
  dajNaziv(clan) {
    return clan.ime + ' ' + clan.prezime;
  }
}

class ClanUO {
  ime: string;
  prezime: string;
  uloga: string;
  slika: string;
  constructor(ime, prezime, uloga, slika) {
    this.ime=ime;
    this.prezime=prezime;
    this.uloga=uloga;
    this.slika=slika;
  }
}
