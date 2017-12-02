import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upravniodbor',
  templateUrl: './upravniodbor.component.html',
  styleUrls: ['./upravniodbor.component.css']
})
export class UpravniodborComponent implements OnInit {
  amina_aljicevic: string;
  fuad_hajdarevic:string;
  mehmed_kadric:string;
  nur_osmanbegovic:string;
  adis_dedic:string;
  erol_terovic:string;
  miran_hadziomerovic:string;
  harun_muhic:string;
  osman_merhemic:string;
  almin_repesa:string;
  edina_osmanspahic:string;

  constructor() {
    this.amina_aljicevic ='assets/images/amina_aljicevic.jpg';
    this.fuad_hajdarevic='assets/images/fuad_hajdarevic.jpg';
    this.mehmed_kadric='assets/images/mehmed_kadric.jpg';
    this.nur_osmanbegovic='assets/images/nur_osmanbegovic.jpg'
    this.adis_dedic='assets/images/adis_dedic.jpg';
    this.erol_terovic='assets/images/erol_terovic.jpg';
    this.miran_hadziomerovic='assets/images/miran_hadziomerovic.jpg';
    this.harun_muhic='assets/images/harun_muhic.jpg';
    this.osman_merhemic='assets/images/osman_merhemic.jpg';
    this.almin_repesa='assets/images/almin_repesa.jpg';
    this.edina_osmanspahic='assets/images/edina_osmanspahic.jpg';
   }

  ngOnInit() {
  }

}
