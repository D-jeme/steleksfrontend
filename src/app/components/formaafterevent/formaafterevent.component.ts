import { Component, OnInit,ElementRef,Renderer,Input,DoCheck} from '@angular/core';
import  {EventService} from '../../services/event.service';
import { Router} from '@angular/router';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {Popup} from 'ng2-opd-popup';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-formaafterevent',
  templateUrl: './formaafterevent.component.html',
  styleUrls: ['./formaafterevent.component.css'],
  providers: [EventService]
})
export class FormaAfterEventComponent implements OnInit, DoCheck {

  Title: string;
  BackPicture: string;
  LongText: string;
  ShortText: string;
  image: string;

  StartDate: Date = new Date();
    settings = {
        bigBanner: false,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: false
}
EndDate: Date = new Date();

url:any;
uploader: CloudinaryUploader = new CloudinaryUploader(
   new CloudinaryOptions({ cloudName: 'du4cgdhn8', uploadPreset: 'd4hf19h6' })
 );
 poceoUpload:boolean=false;
 zavrsio:boolean=true;
user:any;
rola:String;
username:String;

  constructor(private _eventService: EventService, private router: Router, private popup: Popup ,private renderer : Renderer) {

  this.Title = "";
  this.BackPicture="";
  this.LongText="";
  this.ShortText="";
  this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      let res: any = JSON.parse(response);

    this.BackPicture=res.public_id+".jpg";
  }
 }
  ngOnInit() {
    this.url="https://res.cloudinary.com/du4cgdhn8/image/upload/";
    this.username=localStorage.getItem('username');
    this.rola=localStorage.getItem('rola');

        this.user = JSON.parse(localStorage.getItem('signed'));


        console.log("rola",this.rola);
        console.log("frajko",this.user);

          if(!this.user||this.rola!="moderator")
          {
          document.getElementById("user").style.display="block";
this.router.navigateByUrl('/admin');

          }
  }

  ngDoCheck() {
     if(this.uploader.isUploading){
       console.log("uploada se");

       this.poceoUpload=true;}
     else if(!this.uploader.isUploading && this.poceoUpload){

       this.image=this.url+this.BackPicture;
       this._eventService.kreiranjeIzvjestaja(this.Title,this.image,this.ShortText,this.LongText,this.StartDate,this.EndDate);
       this.poceoUpload=false;
       this.popup.options={
         header:"Upload-anje",
         color:"green",
         animationDuration:1.5,
           cancleBtnContent: "Ostanite ovdje",
           confirmBtnContent: "Vratite se na pocetnu",
         animation: "fadeInDown"
       }
     }
   }

   upload() {
       this.uploader.uploadAll();
       this.renderer.listenGlobal('document','this.uploader.isUploading',(event)=>{console.log("cija ovo rijeka");});
       }

}
