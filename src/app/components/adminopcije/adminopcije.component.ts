import { Component, OnInit } from '@angular/core';
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
  aktivan : boolean;

  constructor(private _prijavaService: PrijavaService,  private router: Router) {this.moderatori=[];


  }

  ngOnInit() {
    setTimeout(()=>{    //<<<---    using ()=> syntax

      this._prijavaService.dajModeratore().subscribe(
        data =>{
console.log("osoblje",data);
          for(let i=0;i<data.array.length;i++)
          {
            if(data.array[i].role.role=="moderator"){
            this.moderatori.push(new Osoba(data.array[i]._id,data.array[i].username,data.array[i].isActive));
            this.aktivan=data.array[i].isActive;
            console.log("aktivan",data.array[i].isActive);
            }

          }

        }
      );
    },500);
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
