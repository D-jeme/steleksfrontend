import { Component, OnInit } from '@angular/core';
import  { ModeratorPrijavaService } from '../../services/moderatorprijava.service';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css'],
  providers: [ModeratorPrijavaService]
})
export class ModeratorComponent implements OnInit {

  Username: string;
  Password: string;

  constructor(private _moderatorPrijavaService: ModeratorPrijavaService) {
  this.Username = "";
  this.Password = "";
 }

  ngOnInit() {

  }

  print(){
    console.log(this.Username+":"+this.Password);
    this._moderatorPrijavaService.prijava(this.Username, this.Password);


  }


}
