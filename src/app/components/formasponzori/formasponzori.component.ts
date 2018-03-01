import { Component, OnInit } from '@angular/core';
import  { SponzoriService } from '../../services/sponzori.service';
import  { Sponzor } from '../../models/sponzori';

@Component({
  selector: 'app-formasponzori',
  templateUrl: './formasponzori.component.html',
  styleUrls: ['./formasponzori.component.css'],
  providers: [SponzoriService]
})
export class FormaSponzoriComponent implements OnInit {
  private sponzor: Sponzor;
  constructor(private _sponzoriService: SponzoriService) {
    this.sponzor=new Sponzor("","");
 }

  ngOnInit() {
  }

  print(){
    console.log(this.sponzor);
    this._sponzoriService.prijava(this.sponzor);
}

}
