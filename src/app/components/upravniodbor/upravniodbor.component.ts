import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upravniodbor',
  templateUrl: './upravniodbor.component.html',
  styleUrls: ['./upravniodbor.component.css']
})
export class UpravniodborComponent implements OnInit {
  sefica: string;
  clan1:string;
  clan2:string;
  clan3:string;
  clan4:string;
  clan5:string;
  clan6:string;

  constructor() {
    this.sefica ='assets/images/sefica.jpg';
    this.clan1='assets/images/fuad_hajdarevic.jpg';
    this.clan2='assets/images/mehmed_kadric.jpg';
    this.clan3='assets/images/nur_osmanbegovic.jpg'
    this.clan4='assets/images/adis_dedic.jpg';
    this.clan5='assets/images/erol_terovic.jpg';
    this.clan6='assets/images/miran_hadziomerovic.jpg';
   }

  ngOnInit() {
  }

}
