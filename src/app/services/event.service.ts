import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {NewspageComponent} from '../components/newspage/newspage.component'
import { Event } from '../models/event';
import { Router} from '@angular/router';



@Injectable()
export class EventService {
  url:string="http://localhost:8080";

  constructor(private _http:Http){}

  dajEvents() {
    console.log("tu saam");
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(this.url + '/api/events/news')
    return this._http.get( this.url + '/api/events/news', {
      headers: headers
    } )
      .map( data => {
        console.log("PODACI");
        console.log(data.json());
        return data.json();
      } );
  }


  kreiranjeIzvjestaja(title:string, imgUrl:string, shortText:string, longText:string, startsAt:Date, finishedAt:Date ) {

    var body = JSON.stringify({title: title, shortText: shortText, longText:longText, startsAt:startsAt, finishedAt:finishedAt , imgUrl:imgUrl});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
console.log(body);
    this._http.post(this.url + '/api/events',
    body,
      {
        headers: headers,
        withCredentials: true
      }
    ).map(res=> res.json()).subscribe(
      data => {
        },
    error =>{
      console.log(error);
    }
    );

}

kreiranjeNajave(title:string, startsAt:Date,imgUrl:string,longText:string,shortText:string,ucesnici:string,mjesto:string,ucesce:string ) {
  var body = JSON.stringify({title: title, startsAt:startsAt, imgUrl:imgUrl,longText:longText,shortText:shortText, participantText:ucesnici,placeText:mjesto,participationText:ucesce });
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
console.log(body);
  this._http.post(this.url + '/api/events',
  body,
    {
      headers: headers,
      withCredentials: true
    }
  ).map(res=> res.json()).subscribe(
    data => {
      console.log(data);
      },
  error =>{
    console.log(error);
  }
  );
}


dajsifi() {

  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this._http.get( this.url + '/api/events', {
    headers: headers,
    withCredentials: true
  } )
    .map( data => {
      console.log(data.json());
      return data.json();
    } );
}

kreirajSifi(Year:string,LongText:string,NazivRada1:string,Rad1:FileList,Ucesnici1:Array<any>,NazivRada2:string,Rad2:FileList,Ucesnici2:Array<any>,NazivRada3:string,Rad3:FileList,Ucesnici3:Array<any>) {
  var body = JSON.stringify({year:Year,longText:LongText,rankings:{firstPlace:{NazivRada1,Rad1,Ucesnici1},secondPlace:{NazivRada2,Rad2,Ucesnici2},thirdPlace:{NazivRada3,Rad3,Ucesnici3}},eventType:"sifi"});
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
console.log(body);
  this._http.post(this.url + '/api/events',
  body,
    {
      headers: headers,
      withCredentials: true
    }
  ).map(res=> res.json()).subscribe(
    data => {
      console.log(data);
      },
  error =>{
    console.log(error);
  }
  );
}

}
