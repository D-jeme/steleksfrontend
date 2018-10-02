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
sadrzaj: Array<string>
events: Array<Event>;
MONTHS: Array<string>

  constructor(private _eventService: EventService, private router: Router) {

    this.events=[];
    this.MONTHS = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
}
onClick (id) {
 this.router.navigate(['/event', id]);

}

  ngOnInit() {


      this._eventService.dajEvents().subscribe(
        data =>{

          for(let i=0;i<data.array.length;i++)
          {
            const date = new Date(data.array[i].startsAt);
            console.log("TIp eventa",data.array[i].eventType.eventType);
            this.events.push(new Event(data.array[i]._id,data.array[i].title,data.array[i].imgUrl,data.array[i].shortText, "","","",this.MONTHS[date.getMonth()],String(date.getDate()),data.array[i].eventType.eventType));

          }



        }
      );
  }

}
