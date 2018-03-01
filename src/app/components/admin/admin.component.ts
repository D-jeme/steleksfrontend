import { Component, OnInit } from '@angular/core';
import  {PrijavaService} from '../../services/prijava.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PrijavaService]
})
export class AdminComponent implements OnInit {

  Username: string;
  Password: string;


  constructor(private _prijavaService: PrijavaService, private router: Router) {
  this.Username = "";
  this.Password = "";
 }

  ngOnInit() {

  }

  print(){
    this.router.navigateByUrl('/adminopcije');
    console.log(this.Username+":"+this.Password);
    this._prijavaService.prijava(this.Username, this.Password);




  }


}
