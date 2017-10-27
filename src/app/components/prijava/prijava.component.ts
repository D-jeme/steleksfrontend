import { Component, OnInit } from '@angular/core';
import  {PrijavaService} from '../../services/prijava.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css'],
  providers: [PrijavaService]
})
export class PrijavaComponent implements OnInit {

  Username: string;
  Password: string;

  constructor(private _prijavaService: PrijavaService) {
  this.Username = "";
  this.Password = "";
 }

  ngOnInit() {

  }

  print(){
    console.log(this.Username+":"+this.Password);
    this._prijavaService.prijava(this.Username, this.Password);


  }


}
