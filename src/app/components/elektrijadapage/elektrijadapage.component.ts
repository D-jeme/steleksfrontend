import { Component, OnInit } from '@angular/core';
import { Elektrijada } from '../../models/elektrijada';
@Component({
  selector: 'app-elektrijadapage',
  templateUrl: './elektrijadapage.component.html',
  styleUrls: ['./elektrijadapage.component.css']
})
export class ElektrijadapageComponent implements OnInit {
  private godineElektrijade: Array<String>;
  //private godineElektrijeSadrzaj: Array<Elektrijada>;
  private godineElektrijadeSadrzaj: Array<String>;

  private trenutniSadrzaj: String;
  private trenutniTab:number;
  private brojac:number

  constructor() {
    this.godineElektrijade = ['2012','2013','2014','2015','2016','2017'];
    this.godineElektrijadeSadrzaj= ['Elektrijada 2012', 'Elektrijada 2013','Elektrijada 2014', 'Elektrijada 2015', 'Elektrijada 2016', 'Elektrijada 2017'] ;

  }
  ngOnInit() {
  }

  f(godina:String):void{
    for (let i of this.godineElektrijadeSadrzaj) {
      this.brojac++;
      if(i==godina)
      {
          //this.trenutniTab=i;
          this.trenutniSadrzaj=i;
}

    }
      console.log(this.trenutniSadrzaj);
      }
}
