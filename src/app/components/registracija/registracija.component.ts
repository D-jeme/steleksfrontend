import { Component, OnInit } from '@angular/core';
import { RegistrovaniClan } from '../../models/registracijastudent';
import { RegistracijaService } from '../../services/registracija.service';
@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css'],
  providers: [RegistracijaService],
})
export class RegistracijaComponent implements OnInit {
  registrovani: Array<RegistrovaniClan>;
  ime: String='';
  prezime: String='';
  email: String='';
  emailFakultet: String='';
  brojTelefona: String='';
  brojIndeksa: String='';
  korisnickoIme: String='';
  lozinka: String='';
  lozinka2: String='';
  odsjek: String='';
  godinaStudija: String='';
  errorMessage: String='';
  messageUspjesno: String='';
  novi: RegistrovaniClan;

  constructor(private _registracijaService: RegistracijaService) {
    this.registrovani=new Array<RegistrovaniClan>();
  }

  ngOnInit() {
  }

  print() {
    this.errorMessage='';
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
    this._registracijaService.prijava(this.novi);
    this.errorMessage='';
    this.messageUspjesno='Uspjesno!';
    }
}
