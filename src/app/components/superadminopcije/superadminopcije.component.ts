import { Component, OnInit } from '@angular/core';
import  {PrijavaService} from '../../services/prijava.service';
import { Osoba } from '../../models/osoba';

@Component({
  selector: 'app-superadminopcije',
  templateUrl: './superadminopcije.component.html',
  styleUrls: ['./superadminopcije.component.css'],
  providers:[PrijavaService]
})
export class SuperAdminOpcijeComponent implements OnInit {

  admini:Array<Osoba>;
  rld: any;
  username:string;
  password:string;
  potvrdapassworda:string;
show:boolean;
username1:string;
password1:string;
potvrdapassworda1:string;
show1:boolean;

  constructor(private _prijavaService: PrijavaService) {
    this.admini=[];
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

  ngOnInit() {
    this.rld = localStorage.getItem('reload');console.log("reload",this.rld);
    if(this.rld=="true"){
       localStorage.setItem('reload',JSON.stringify(false));}

console.log("imal me");
      this._prijavaService.dajAdmine().subscribe(
        data =>{

          for(let i=0;i<data.array.length;i++)
          {
            if(data.array[i].role.role=="admin")
            this.admini.push(new Osoba(data.array[i]._id,data.array[i].username,data.array[i].isActive));

          }
          console.log("admini",this.admini);

        }
      );

  }
  dodajAdmina(){
    if(this.password==this.potvrdapassworda)
    this._prijavaService.dodajAdmina(this.username,this.password);
    else console.log("Sifre se ne podudaraju");
  }
  updateAdmina(){
    if(this.password1==this.potvrdapassworda1)
    this._prijavaService.updateAdmina(this.username1,this.password1);
    else console.log("Sifre se ne podudaraju");

  }

  load(){
    location.reload();
  }

}
