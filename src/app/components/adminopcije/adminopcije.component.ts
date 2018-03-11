import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import  {PrijavaService} from '../../services/prijava.service';
import { Osoba } from '../../models/osoba';
import { Router} from '@angular/router';

@Component({
  selector: 'app-adminopcije',
  templateUrl: './adminopcije.component.html',
  styleUrls: ['./adminopcije.component.css'],
    providers: [PrijavaService]
})
export class AdminOpcijeComponent implements OnInit {
  moderatori: Array<Osoba>;
  aktivan : number;
  rld: any;
  aktivnost:string;
  show:boolean;
  username:string;
  password:string;
  potvrdapassworda:string;
  username1:string;
  password1:string;
  potvrdapassworda1:string;
  show1:boolean;

@Input() rola;

  constructor(private _prijavaService: PrijavaService,  private router: Router) {this.moderatori=[];this.aktivan=0;


  }

  ngOnInit() {
    this.rld = localStorage.getItem('reload');console.log("reload",this.rld);
    if(this.rld=="true"){this.load();
       localStorage.setItem('reload',JSON.stringify(false));}


    setTimeout(()=>{  //<<<---    using ()=> syntax
console.log("hahhaahh",this._prijavaService.dajPrijavu());
      this._prijavaService.dajModeratore().subscribe(
        data =>{
console.log("osoblje",data);
          for(let i=0;i<data.array.length;i++)
          {
            if(data.array[i].role.role=="moderator"){
            this.moderatori.push(new Osoba(data.array[i]._id,data.array[i].username,data.array[i].isActive));
            this.aktivan=data.array[i].isActive;
            if(data.array[i].isActive)this.aktivnost="aktivan";
            else this.aktivnost="neaktivan";
            console.log("aktivan",data.array[i].isActive);
            }

          }
}

);},1300);

  }
  prikazi(){
    if(this.show==true){
      this.show=false;
      this.show1=false;}
    else {this.show=true;this.show1=false;}

  }
  prikazi1(){
    if(this.show1==true){
      this.show1=false;
      this.show=false;
    }
    else {
      this.show1=true;
      this.show=false;
    }

  }
dodajModeratora()
{ if(this.password==this.potvrdapassworda){
  this._prijavaService.dodajModeratora(this.username,this.password);
  console.log("dobar password");
}
else console.log("Sifre se ne podudaraju");
}
updateModeratora(){
  if(this.password1==this.potvrdapassworda1)
  this._prijavaService.updateModeratora(this.username1,this.password1);
  else console.log("Sifre se ne podudaraju");

}
  load(){
    location.reload();
  }

  delete(osoba: Osoba){
  this._prijavaService.izbrisiModeratora(osoba);
  window.location.reload();
  }
  odjava(){
    this._prijavaService.odjava().subscribe();
    console.log("Uspjesno ste dojavljeni");
  }
  postaviAktivnost()
  {
    console.log("imal me");
    document.getElementById("dugme").innerHTML="jee";
  }


}
