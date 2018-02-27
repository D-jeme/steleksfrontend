import { Component, OnInit } from '@angular/core';
import { HostListener} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {PageScrollConfig} from 'ng2-page-scroll';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  host: {
       '(window:scroll)': 'updateHeader($event)'
   }
})
export class NavigationComponent implements OnInit {
  isScrolled=false;
  currPos:Number =0;
  startPos:Number =0;
  changePos: Number=100;
  steleks:string;
  meni:string;
  prikazi:boolean;

  constructor(){
    this.steleks='assets/images/steleksLogo.png';
    this.meni='assets/images/menu.png';
    this.prikazi=false;
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
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let i;

}




}
