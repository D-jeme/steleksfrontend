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


  constructor(private _eventService: EventService, private router: Router) {

    this.events=[];

}

  ngOnInit() {
      this._eventService.prijava().subscribe(
        data =>{


          for(let i=0;i<data.array.length;i++)
          {

            this.events.push(new Event(data.array[i].title,data.array[i].imgUrl,data.array[i].shortText,""));

          }



        }
      );
  }

}
