import { Component, OnInit } from '@angular/core';
import { HostListener} from "@angular/core";

import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {PageScrollConfig} from 'ng2-page-scroll';
import  {PrijavaService} from '../../services/prijava.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  host: {
       '(window:scroll)': 'updateHeader($event)'
   },
       providers: [PrijavaService]
})
export class NavigationComponent implements OnInit {
  isScrolled=false;
  currPos:Number =0;
  startPos:Number =0;
  changePos: Number=100;
  steleks:string;
  meni:string;
  prikazi:boolean;
  logo:string;

  constructor(private _prijavaService: PrijavaService){
    this.steleks='assets/images/steleksLogo.png';
    this.logo='assets/images/korisnik.png';
    this.meni='assets/images/menu.png';
    this.prikazi=false;
  }
onVoted(agreed:boolean)
  {
    console.log("jel ovo ravno");
  }



  updateHeader(evt) {
      this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
      if(this.currPos >= this.changePos ) {
          this.isScrolled = true;
      } else {
          this.isScrolled = false;
      }
  }
  klik()
  {
    let elem=document.getElementById("mob1");
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

    setTimeout(()=>{ 
    console.log("da li je prijavljen",this._prijavaService.dajPrijavu());
      if(this._prijavaService.dajPrijavu())
      {


      document.getElementById("user").style.display="block";
      console.log("prijavljen");
      }
      else   {document.getElementById("user").style.display="block";
      console.log("neprijavljen");}},1000);
  }

  ngOnChanges(){
    setTimeout(()=>{ console.log("a ovdjeee");
    console.log("da li je prijavljen",this._prijavaService.dajPrijavu());
      if(this._prijavaService.dajPrijavu())
      {


      document.getElementById("user").style.display="block";
      console.log("prijavljen");
      }
      else if(!this._prijavaService.dajPrijavu())  {document.getElementById("user").style.display="none";
      console.log("neprijavljen");}},1000);
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let i;

}




}
