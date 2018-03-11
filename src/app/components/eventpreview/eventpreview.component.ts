import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {EventPreviewService} from '../../services/eventpreview.service'
import {Eventpreview} from '../../models/eventpreview'

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpreview.component.html',
  styleUrls: ['./eventpreview.component.css'],
  providers:[EventPreviewService]
})
export class EventpreviewComponent implements OnInit,OnDestroy {

  id: number;
 private sub: any;
 sadrzaj: Array<Eventpreview>;
 event: Eventpreview;
 MONTHS: Array<String>;
  constructor(private route: ActivatedRoute, private _eventpreviewService: EventPreviewService) {
    this.event=new Eventpreview("", "", "", "", "", "", "", "", "", "", "");
  this.MONTHS = ["JANUAR", "FEBRUAR", "MART", "APRIL", "MAJ", "JUNI", "JULI", "AUGUST", "SEPTEMBAR", "OKTOBAR", "NOVEMBAR", "DECEMBAR"];
 }

  ngOnInit() {


    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
 console.log("param",this.id);

    });
    this._eventpreviewService.postaviIdEventa(String(this.id));

    this._eventpreviewService.dajEvent().subscribe(
      data =>{
        // Treba popuniti event koji dobijamo i provjeravati
        // kojeg je tipa evetn i u zavisnoti od toga birati nacin popunjavanja
console.log("velicina",data );
        const date = new Date(data.startsAt);
        const end = new Date(data.finishedAt);
        console.log("velicina",data._id );
        this.event=new Eventpreview(data._id, data.title, "Lokacija", data.longText,
         data.imgUrl, this.MONTHS[date.getMonth()], String(date.getDate()), String(end.getDate()),
         data.participantText, data.placeText, data.participationText);
    }
    );
  }
  ngOnDestroy(){}

}
