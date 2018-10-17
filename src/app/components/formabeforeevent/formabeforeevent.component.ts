import { Component, OnInit } from '@angular/core';
import  {EventService} from '../../services/event.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-formabeforeevent',
  templateUrl: './formabeforeevent.component.html',
  styleUrls: ['./formabeforeevent.component.css'],
  providers: [EventService]
})
export class FormaBeforeEventComponent implements OnInit {


  Title: string;
  BackPicture: string;
  LongText: string;
  ShortText: string;
  Ucesnici:string;
  Mjesto:string;
  Ucesce:string;
  StartDate: Date = new Date();
    settings = {
        bigBanner: false,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: false
}


  constructor(private _eventService: EventService, private router: Router) {
  this.Title = "";
  this.BackPicture="";
  this.LongText="";
  this.Ucesce="";
  this.Ucesnici="";
  this.Mjesto="";
  this.ShortText="";
 }

  ngOnInit() {
  }
  print(){

    this._eventService.kreiranjeNajave(this.Title,this.StartDate,this.BackPicture,this.LongText,this.ShortText,this.Ucesnici,this.Mjesto,this.Ucesce);
    //console.log("ovo",this._eventService.kreiranjeIzvjestaja(this.Title, this.ShortText,this.LongText,this.StartDate,this.EndDate,this.BackPicture));
    setTimeout(()=>{


  },1500);



  }
}
