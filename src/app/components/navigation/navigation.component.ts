import { Component, OnInit, OnChanges,DoCheck } from '@angular/core';
import { HostListener} from "@angular/core";
import { Subscription } from 'rxjs/Subscription';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {PageScrollConfig} from 'ng2-page-scroll';
import  {PrijavaService} from '../../services/prijava.service';

import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  host: {
       '(window:scroll)': 'updateHeader($event)'
   },
       providers: [PrijavaService]
})
export class NavigationComponent implements OnInit, OnChanges,DoCheck {
  isScrolled=false;
  currPos:Number =0;
  startPos:Number =0;
  changePos: Number=100;
  steleks:string;
  meni:string;
  prikazi:boolean;
  logo:string;
  logout:string;
  user :any;
  username:string;
  rola:string;

  constructor(private _prijavaService: PrijavaService,private router: Router){
  //  console.log("koliko me puta ima");
    this.steleks='assets/images/steleksLogo.png';
    this.logo='assets/images/korisnik.png';
    this.meni='assets/images/menu.png';
    this.logout='assets/images/log-out.png'
    this.prikazi=false;
    // this.username = JSON.parse(localStorage.getItem('rola'));
    // console.log("username",this.username);

  }

  odjava(){
    this._prijavaService.odjava().subscribe();
    localStorage.setItem('signed',JSON.stringify(false));
  }



  updateHeader(evt) {
      this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
      if(this.currPos >= this.changePos ) {
          this.isScrolled = true;
      } else {
          this.isScrolled = false;
      }
  }
  detalji(){

    let elem=document.getElementById("prikaziOpcije");
    if(elem.style.display=="block")
      elem.style.display="none";

    else
      elem.style.display="block";


  }
  route(){
      let elem=document.getElementById("prikaziOpcije");
    this.rola=localStorage.getItem('rola');
    setTimeout(()=>{
  //  console.log("rola u adminu",this._prijavaService.dajRolu());
    if(this.rola=="admin"){
        this.router.navigateByUrl('/adminopcije');
          elem.style.display="none";

      }

    else if(this.rola=="moderator"){
        this.router.navigateByUrl('/moderatoropcije');
        elem.style.display="none";}
    else if(this.rola=="superadmin"){
        this.router.navigateByUrl('/superadminopcije');
        elem.style.display="none";}

},1500);

  }
  klik()
  {
    let elem=document.getElementById("mob1");
    elem.style.transition="2s";
    if(this.prikazi==false) {
      this.prikazi=true;
        elem.style.display="block";
      }
    else{
    this.prikazi=false;

    elem.style.display="none";
  }

  }


      ngOnInit() {
          this.router.events.subscribe((evt) => {
              if (!(evt instanceof NavigationEnd)) {
                  return;
              }
              window.scrollTo(0, 0)
          });
      }

  ngOnChanges(){

  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let i;

}
ngDoCheck() {
  this.username=localStorage.getItem('username');
  this.rola=localStorage.getItem('rola');

      this.user = JSON.parse(localStorage.getItem('signed'));




        if(this.user)
        {
        document.getElementById("user").style.display="block";

        }
        else   {document.getElementById("user").style.display="none";
}

}




}
