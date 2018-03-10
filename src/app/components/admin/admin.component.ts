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




    this._prijavaService.prijava(this.Username, this.Password);
    console.log("ovo",this._prijavaService.prijava(this.Username, this.Password));
    setTimeout(()=>{
    console.log("rola u adminu",this._prijavaService.dajRolu());
    if(this._prijavaService.dajRolu()=="admin")
        this.router.navigateByUrl('/adminopcije');
    else if(this._prijavaService.dajRolu()=="moderator")
        this.router.navigateByUrl('/moderatoropcije');
    else if(this._prijavaService.dajRolu()=="superadmin")
        this.router.navigateByUrl('/superadminopcije')

},1500);



  }


}
