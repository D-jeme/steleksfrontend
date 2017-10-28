import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upravniodbor',
  templateUrl: './upravniodbor.component.html',
  styleUrls: ['./upravniodbor.component.css']
})
export class UpravniodborComponent implements OnInit {
  sefica: string;
  ostalimanjevazniclan1:string;
  ostalimanjevazniclan2:string;

  constructor() {
    this.sefica ='assets/images/sefica.jpg';
    this.ostalimanjevazniclan1='assets/images/fuad_hajdarevic.jpg';
    this.ostalimanjevazniclan2='assets/images/mehmed_kadric.jpg';
   }

  ngOnInit() {
  }

}
