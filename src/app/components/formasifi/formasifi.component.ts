import { Component, OnInit } from '@angular/core';
import  {EventService} from '../../services/event.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-formasifi',
  templateUrl: './formasifi.component.html',
  styleUrls: ['./formasifi.component.css'],
  providers: [EventService]
})
export class FormaSifiComponent implements OnInit {

       Year: string;
       LongText: string;
       NazivRada1: string;
       NazivRada2: string;
       NazivRada3: string;

       Rad1 : FileList;
       Rad2 : FileList;
       Rad3 : FileList;



       Ucesnici1: Array<string> = [];
       newAttribute1: any = {};
       Ucesnici2: Array<string> = [];
       newAttribute2: any = {};
       Ucesnici3: Array<string> = [];
       newAttribute3: any = {};
       shortText: string;
       title: string;
       startsAt: Date;
       finishedAt: Date;
       imgUrl: string;

      addFieldValue1() {
          this.Ucesnici1.push(this.newAttribute1)
          this.newAttribute1 = {};
      }

      deleteFieldValue1(index) {
          this.Ucesnici1.splice(index, 1);
      }
      addFieldValue2() {
          this.Ucesnici2.push(this.newAttribute2)
          this.newAttribute2 = {};
      }

      deleteFieldValue2(index) {
          this.Ucesnici2.splice(index, 1);
      }
      addFieldValue3() {
          this.Ucesnici3.push(this.newAttribute3)
          this.newAttribute3 = {};
      }

      deleteFieldValue3(index) {
          this.Ucesnici3.splice(index, 1);
      }

  constructor(private _eventService: EventService, private router: Router){
    this.Year="";
    this.LongText="";
    this.NazivRada1="";
    this.NazivRada2="";
    this.NazivRada3="";
    this.title="Sifi";
    this.shortText="Sifi2";
    this.startsAt=new Date("February 4, 2016 10:13:00");
    this.finishedAt=new Date("February 5, 2016 10:13:00");
    this.imgUrl='https://preview.ibb.co/iBHyML/sifi.png';
  }

  ngOnInit() {
  }
  getRad1(event){
      this.Rad1 = event.target.Rad1;
  }
  getRad2(event){
      this.Rad2 = event.target.Rad2;
  }
  getRad3(event){
      this.Rad3 = event.target.Rad3;
  }
  print(){
    console.log("NAJVAZNIJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: " + this.Ucesnici1.length);
    this._eventService.kreirajSifi(this.title, this.shortText, this.startsAt, this.finishedAt, this.imgUrl, this.Year,this.LongText,this.NazivRada1,this.Rad1,this.Ucesnici1,this.NazivRada2,this.Rad2,this.Ucesnici2,this.NazivRada3,this.Rad3,this.Ucesnici3);
    //console.log("ovo",this._eventService.kreiranjeIzvjestaja(this.Title, this.ShortText,this.LongText,this.StartDate,this.EndDate,this.BackPicture));
    setTimeout(()=>{


  },1500);



  }

}
