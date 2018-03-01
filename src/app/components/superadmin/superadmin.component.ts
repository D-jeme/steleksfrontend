import { Component, OnInit } from '@angular/core';
import  {PrijavaService} from '../../services/prijava.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css'],
  providers: [PrijavaService]
})
export class SuperAdminComponent implements OnInit {

  Username: string;
  Password: string;

  constructor(private _prijavaService: PrijavaService,  private router: Router) {
  this.Username = "";
  this.Password = "";
 }

  ngOnInit() {

  }

  print(){
    console.log(this.Username+":"+this.Password);
    this.router.navigateByUrl('/superadminopcije');
    this._prijavaService.prijava(this.Username, this.Password);
    

  }


}
