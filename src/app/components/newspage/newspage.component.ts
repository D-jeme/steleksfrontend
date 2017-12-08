import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {
showStyle: false;
  constructor() { }

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
