import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private moderatori: Array<String>;
  private brisanje: Array<String>;
  constructor() {
    this.moderatori = ['Prvi moderator','Drugi moderator','Treci moderator','Cetvrti moderator','Peti moderator'];
    this.brisanje= ['Brisi', 'Brisi', 'Brisi', 'Brisi', 'Brisi']
  }

  ngOnInit() {
  }

}
