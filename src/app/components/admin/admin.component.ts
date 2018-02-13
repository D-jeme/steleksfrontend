import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private moderatori: Array<String>;
  private br: number;
  private showSelected: boolean;
  private ime: string= '';
  private prezime: string= '';
  private messageUspjesno: string= '';
  private errorMessageIme: string= '';
  private errorMessagePrezime: string= '';
  constructor() {
    this.br=0;
    this.showSelected=false;
    this.moderatori = ['Mujak Amila','Drugi moderator','Treci moderator','Cetvrti moderator','Peti moderator'];
  }

  ngOnInit() {
  }

  redniBroj(i) {
    this.br=0;
    for(let n in this.moderatori) {
      this.br++;
      if(this.moderatori[n]==i) {
        return this.br;
      }
    }
    return this.br;
  }

  obrisiModeratora(n) {
      this.moderatori.splice(n, 1);
      this.br--;
  }

  ShowButton(){
    this.showSelected = true;
  }

  HideButton(){
    this.messageUspjesno='';
    this.errorMessageIme='';
    this.errorMessagePrezime='';
    this.ime='';
    this.prezime='';
    this.showSelected = false;
  }

  dodajModeratora() {
    if(this.ime=='') {
      this.errorMessagePrezime='';
      this.errorMessageIme='Molimo Vas da unesete ime!';
    }
    else if(this.prezime=='') {
      this.errorMessageIme='';
      this.errorMessagePrezime='Molimo Vas da unesete prezime!';
    }
    else {
      this.errorMessageIme='';
      this.errorMessagePrezime='';
      this.br++;
      this.moderatori.push(this.ime+' '+this.prezime);
      this.messageUspjesno='Uspjesno ste dodali novog moderatora.';
    }
  }
}
