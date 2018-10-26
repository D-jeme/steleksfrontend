import { Component, OnInit,ElementRef,Renderer,Input,DoCheck} from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import  { SponzoriService } from '../../services/sponzori.service';
import  { Sponzor } from '../../models/sponzori';
import {Popup} from 'ng2-opd-popup';
import { FileUploader } from 'ng2-file-upload';
import { Router} from '@angular/router';

@Component({
  selector: 'app-formasponzori',
  templateUrl: './formasponzori.component.html',
  styleUrls: ['./formasponzori.component.css'],
  providers: [SponzoriService]
})

export class FormaSponzoriComponent implements OnInit, DoCheck {
  username:String;
  rola:String;
  user:any;
  naziv: String;
  slika: String;
  image:String;
  url:any;
  uploader: CloudinaryUploader = new CloudinaryUploader(
       new CloudinaryOptions({ cloudName: 'du4cgdhn8', uploadPreset: 'd4hf19h6' })
   );
     poceoUpload:boolean=false;
     zavrsio:boolean=true;
  constructor(private popup: Popup ,private renderer : Renderer,private _sponzoriService: SponzoriService, private router: Router) {
     this.naziv="";
     this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
         let res: any = JSON.parse(response);

       this.slika=res.public_id+".jpg";
 } }

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




       this.image=this.url+this.slika;

           this._sponzoriService.prijava(this.naziv, this.image);
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

  print(){
    //this.slika='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=350';

}

}
