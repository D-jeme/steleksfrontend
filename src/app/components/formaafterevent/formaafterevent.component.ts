import { Component, OnInit } from '@angular/core';
import  {EventService} from '../../services/event.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-formaafterevent',
  templateUrl: './formaafterevent.component.html',
  styleUrls: ['./formaafterevent.component.css'],
  providers: [EventService]
})
export class FormaAfterEventComponent implements OnInit {

  Title: string;
  BackPicture: string;
  LongText: string;
  ShortText: string;


  StartDate: Date = new Date();
    settings = {
        bigBanner: false,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: false
}
EndDate: Date = new Date();
  

  constructor(private _eventService: EventService, private router: Router) {
  this.Title = "";
  this.BackPicture="";
  this.LongText="";
  this.ShortText="";
 }
  ngOnInit() {
  }

  print(){



    this._eventService.kreiranjeIzvjestaja(this.Title,this.BackPicture,this.ShortText,this.LongText,this.StartDate,this.EndDate);
    //console.log("ovo",this._eventService.kreiranjeIzvjestaja(this.Title, this.ShortText,this.LongText,this.StartDate,this.EndDate,this.BackPicture));
  /*  setTimeout(()=>{


},1500);*/



  }

}
