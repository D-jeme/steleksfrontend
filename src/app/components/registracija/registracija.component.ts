import { Component, OnInit } from '@angular/core';
import { RegistrovaniClan } from '../../models/registracijastudent';
@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  private registrovani: Array<RegistrovaniClan>;
  private ime: String='';
  private prezime: String='';
  private email: String='';
  private emailFakultet: String='';
  private brojTelefona: String='';
  private brojIndeksa: String='';
  private korisnickoIme: String='';
  private lozinka: String='';
  private lozinka2: String='';
  private odsjek: String='';
  private godinaStudija: String='';
  private errorMessage: String='';
  private messageUspjesno: String='';
  private novi: RegistrovaniClan;

  constructor() {
    this.registrovani=new Array<RegistrovaniClan>();
  }

  ngOnInit() {
  }

  dodajClan() {
    this.errorMessage='';
    console.log("imeeee");
    console.log(this.ime);
    if(this.ime=='' || this.prezime=='' || this.email=='' || this.emailFakultet=='' || this.brojTelefona=='' ||
    this.brojIndeksa=='' || this.korisnickoIme=='' || this.lozinka=='' || this.lozinka2=='') {
      this.errorMessage='Molimo popunite sva polja!';
      this.messageUspjesno='';
      return;
    }
    else if(this.lozinka!=this.lozinka2) {
      this.errorMessage='Lozinke se ne podudaraju!';
      this.messageUspjesno='';
      return;
    }
    console.log("ima li te");
    this.novi=new RegistrovaniClan(this.ime, this.prezime, this.email, this.emailFakultet, this.brojTelefona, this.brojIndeksa,
    this.korisnickoIme, this.lozinka, this.odsjek, this.godinaStudija);
    this.registrovani.push(this.novi);
    this.errorMessage='';
    this.messageUspjesno='Uspjesno!';
    }
}
