import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Osoba } from '../models/osoba';
import 'rxjs/add/operator/map';

@Injectable()
export class PrijavaService {
  url:string="http://localhost:8080";
  rola:string;
  prijavljen:boolean;

  constructor(private _http:Http){this.rola="";this.prijavljen=true;}





  prijava(user:string, password:string) {
    var body = JSON.stringify({username: user, password: password});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
console.log(body);
    this._http.post(this.url + '/api/moderators/login',
    body,
      {
        headers: headers,
        withCredentials: true
      }
    ).map(res=> res.json()).subscribe(
      data => {
          console.log("podaci rola",data.role);
          this.rola=data.role;
          this.prijavljen=true;
          console.log("prijavljen sam",this.prijavljen);

        },
    error =>{
      console.log(error);
      this.prijavljen=false;
    }

    );
}

odjava(){
  console.log("tu saam");
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return this._http.get( this.url + '/api/moderators/logout', {
    headers: headers,
    withCredentials: true
  } )
    .map( data => {

      return data.json();
    } );


}

izbrisiModeratora(osoba: Osoba) {
  var body = JSON.stringify({username: osoba.username});
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);

  this._http.delete(this.url + '/api/moderators',

    {
      body:body,
      headers: headers,
      withCredentials: true
    }
  ).subscribe((ok)=>{console.log(ok)});
}



dajModeratore(){
  console.log("tu saam");
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return this._http.get( this.url + '/api/moderators', {
    headers: headers,
    withCredentials: true
  } )
    .map( data => {

      return data.json();
    } );


}
dajAdmine(){
  console.log("tu saam");
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return this._http.get( this.url + '/api/moderators/admin', {
    headers: headers,
    withCredentials: true
  } )
    .map( data => {

      return data.json();
    } );


}
dajRolu(){
  return this.rola;
}
dajPrijavu(){
  return this.prijavljen;
}

}
