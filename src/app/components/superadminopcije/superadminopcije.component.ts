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
  constructor(private _prijavaService: PrijavaService) {
    this.admini=[];
  }

  ngOnInit() {
    setTimeout(()=>{    //<<<---    using ()=> syntax
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
    },1500);
  }



}
