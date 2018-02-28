import { Component, OnInit } from '@angular/core';
import { Sponzor } from '../../models/sponzori';

@Component({
  selector: 'app-sponzori',
  templateUrl: './sponzori.component.html',
  styleUrls: ['./sponzori.component.css']
})
export class SponzoriComponent implements OnInit {
  private bhtelecom: String;
  private bsts: String;
  private disti: String;
  private diveco: String;
  private infostudio: String;
  private mistral: String;
  private zira: String;
  private sue: String;
  private sponzori: Array<Sponzor>;
  constructor() {
    this.bhtelecom ='assets/images/bhtelecom2.jpg';
    this.bsts='assets/images/BSTS_logo2.png';
    this.disti='assets/images/disti2.jpg';
    this.diveco='assets/images/diveco2.png';
    this.infostudio='assets/images/infostudio2.png';
    this.mistral='assets/images/mistral.png';
    this.zira='assets/images/zira2.png';
    this.sue='assets/images/sue2.jpg';
    this.sponzori=new Array<Sponzor>();
    this.sponzori.push(new Sponzor(this.bhtelecom, 'BH Telecom'));
    this.sponzori.push(new Sponzor(this.bsts, 'BS Telecom Solutions'));
    this.sponzori.push(new Sponzor(this.disti, 'Disti'));
    this.sponzori.push(new Sponzor(this.diveco, 'Diveco Energo d.o.o.'));
    this.sponzori.push(new Sponzor(this.infostudio, 'InfoStudio'));
    this.sponzori.push(new Sponzor(this.mistral, 'Mistral'));
    this.sponzori.push(new Sponzor(this.zira, 'Zira'));
    this.sponzori.push(new Sponzor(this.sue, 'Energoinvest SUE'));
  }

  ngOnInit() {
  }
}
