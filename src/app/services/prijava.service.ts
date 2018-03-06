import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PrijavaService {
  url:string="http://localhost:8080";
  rola:string;

  constructor(private _http:Http){this.rola="";}





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

        },
    error =>{
      console.log(error);
    }

    );
}
/*
izbrisiModeratora(user:string) {
  var body = JSON.stringify({username: user});
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
console.log(body);
  this._http.delete(this.url + '/api/moderators',
  body,
    {
      headers: headers,
      withCredentials: true
    }
  ).map(res=> res.json()).subscribe(
    data => {
        console.log("Izbrisao");

      },
  error =>{
    console.log(error);
  }

  );
}
*/
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

}
