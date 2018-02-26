import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
@Component({
  selector: 'app-albumipage',
  templateUrl: './albumipage.component.html',
  styleUrls: ['./albumipage.component.css']
})
export class AlbumipageComponent implements OnInit {

  albumi : Array<Album>;
  showStyle: false;
  images;
  constructor() {
    this.albumi=[new Album("Elektrijada 2016","assets/images/elektrijada2016.jpg",["URL"], 100),
    new Album("Dan otvorenih vrata ETF-a","assets/images/dan_otvorenih_vrata.jpg",["URL"], 100),
    new Album("Arduino radionica","assets/images/arduino_radionica.jpg",["URL"], 100),
    new Album("Stručna ekskurzija u Tuzlu","assets/images/strucna_ekskurzija.jpg",["URL"], 100)
  ];



  }

  ngOnInit() {
  }
  getStyle() {
    if(this.showStyle) {
      return "yellow";
    } else {
      return "";
    }
  }
}
