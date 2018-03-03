import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superadminopcije',
  templateUrl: './superadminopcije.component.html',
  styleUrls: ['./superadminopcije.component.css']
})
export class SuperAdminOpcijeComponent implements OnInit {
  admini: Array<String>;
  br: number;
  showSelected: boolean;
  ime: string= '';
  prezime: string= '';
  messageUspjesno: string= '';
  errorMessageIme: string= '';
  errorMessagePrezime: string= '';
  constructor() {
    this.br=0;
    this.showSelected=false;
    this.admini = ['Admin naziv'];
  }

  ngOnInit() {
  }

  redniBroj(i) {
    this.br=0;
    for(let n in this.admini) {
      this.br++;
      if(this.admini[n]==i) {
        return this.br;
      }
    }
    return this.br;
  }

  obrisiAdmina(n) {
      this.admini.splice(n, 1);
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

  dodajAdmina() {
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
      this.admini.push(this.ime+' '+this.prezime);
      this.messageUspjesno='Uspjesno ste dodali novog admina.';
    }
  }
}
