import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {NewspageComponent} from '../components/newspage/newspage.component'
import { Router} from '@angular/router';

@Injectable()
export class EventService {
  url:string="https://steleksdevelopment.herokuapp.com";

  constructor(private _http:Http){}

  prijava() {
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

  //  var body = JSON.stringify({username: user, password: password});
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
    //
    // this._http.get(this.url + '/api/events/news',
    // ,
    //   {
    //     headers: headers
    //   }
    // ).map(res=> res.json()).subscribe(
    //   data => {
    //       console.log(data);
    //       JSON.stringify({ token: data.token, user: data.user }));
    //     },
    // error =>{
    //   console.log(error);
    // }
    //
    // );




    // async _fetch( method, endpoint, body ) {
    //     const constructedUrl = ${ this.url }${ endpoint }
    //     try {
    //       const response = await axios( {
    //         method,
    //         url: constructedUrl,
    //         data: body,
    //       } )
    //       if ( response.status >= 200 || response.status <= 299 ) {
    //         return response.data
    //       }
    //       // if ( response.status >= 400 || response.status <= 499 ) {
    //       //   // Todo, return error message
    //       //   return false
    //       // }
    //       throw ( response )
    //     } catch ( error ) {
    //       console.error( Error fetching ${ method }: ${ endpoint }, error.response.data )
    //       throw new Error( error.response.data.message )
    //     }
    //   }
  }



}
