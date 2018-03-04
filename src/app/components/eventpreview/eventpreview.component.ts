import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {EventPreviewService} from '../../services/eventpreview.service'

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpreview.component.html',
  styleUrls: ['./eventpreview.component.css'],
  providers:[EventPreviewService]
})
export class EventpreviewComponent implements OnInit,OnDestroy {

  id: number;
 private sub: any;
  constructor(private route: ActivatedRoute, private _eventpreviewService: EventPreviewService) { }

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
        console.log("event",data);
      }
    );

  }
  ngOnDestroy(){}

}
