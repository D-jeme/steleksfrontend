import { Component, OnInit } from '@angular/core';
import  {PrijavaService} from '../../services/prijava.service';
import { Osoba } from '../../models/osoba';

@Component({
  selector: 'app-adminopcije',
  templateUrl: './adminopcije.component.html',
  styleUrls: ['./adminopcije.component.css'],
    providers: [PrijavaService]
})
export class AdminOpcijeComponent implements OnInit {
  moderatori: Array<Osoba>;

  constructor(private _prijavaService: PrijavaService) {this.moderatori=[];

  }

  ngOnInit() {
    setTimeout(()=>{    //<<<---    using ()=> syntax

      this._prijavaService.dajModeratore().subscribe(
        data =>{
console.log("osoblje",data);
          for(let i=0;i<data.array.length;i++)
          {
            if(data.array[i].role.role=="moderator")
            this.moderatori.push(new Osoba(data.array[i]._id,data.array[i].username));

          }

        }
      );
    },500);
  }

  delete(id: String){
    console.log(id);
  }


}
