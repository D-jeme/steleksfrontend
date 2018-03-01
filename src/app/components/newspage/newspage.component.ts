import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/event';
import  {EventService} from '../../services/event.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css'],
    providers: [EventService]
})
export class NewspageComponent implements OnInit {
showStyle: false;
events: Array<Event>;

  constructor(private _eventService: EventService, private router: Router) {
  this.events=[ new Event("Elektrijada Rimini",
"http://elektrijada.net/wp-content/uploads/2016/03/12799056_588726494624596_3241526187894899946_n.png","56. medunarodni susret studenata elektrotehnike održati ce se u Italiji, u gradu Rimini od 12. do 17. maja 2016.", "")];

}

  ngOnInit() {
      this._eventService.prijava().subscribe(
        data =>{
          console.log("KRaMPA:", data);
          
        }
      );
  }


  getStyle() {
    if(this.showStyle) {
      return "yellow";
    } else {
      return "";
    }
  }
}
