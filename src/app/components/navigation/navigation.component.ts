import { Component, OnInit } from '@angular/core';
import { HostListener} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {PageScrollConfig} from 'ng2-page-scroll';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let i;

}




}
