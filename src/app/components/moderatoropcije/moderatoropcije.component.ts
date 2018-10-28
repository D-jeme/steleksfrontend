import { Component, OnInit, DoCheck } from '@angular/core';

import { Router} from '@angular/router';

@Component({
  selector: 'app-moderatoropcije',
  templateUrl: './moderatoropcije.component.html',
  styleUrls: ['./moderatoropcije.component.css']
})
export class ModeratorOpcijeComponent implements OnInit,DoCheck {
rld: any;
username:String;
rola:String;
user:any;
constructor(private router: Router){


}
  ngOnInit() {
    this.rld = localStorage.getItem('reload');console.log("reload",this.rld);
    if(this.rld=="true"){
       localStorage.setItem('reload',JSON.stringify(false));}

       this.username=localStorage.getItem('username');
       this.rola=localStorage.getItem('rola');

           this.user = JSON.parse(localStorage.getItem('signed'));


           console.log("rola",this.rola);
           console.log("frajko",this.user);

             if(!this.user||this.rola!="moderator")
             {
             document.getElementById("user").style.display="block";
this.router.navigateByUrl('/admin');

             }

     }




load(){
  location.reload();
}
ngDoCheck() {


}
}
