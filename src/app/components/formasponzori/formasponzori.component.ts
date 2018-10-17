import { Component, OnInit,ElementRef,Renderer,Input,DoCheck} from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import  { SponzoriService } from '../../services/sponzori.service';
import  { Sponzor } from '../../models/sponzori';
import {Popup} from 'ng2-opd-popup';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-formasponzori',
  templateUrl: './formasponzori.component.html',
  styleUrls: ['./formasponzori.component.css'],
  providers: [SponzoriService]
})

export class FormaSponzoriComponent implements OnInit, DoCheck {
  naziv: String;
  slika: String;
  uploader: CloudinaryUploader = new CloudinaryUploader(
       new CloudinaryOptions({ cloudName: 'du4cgdhn8', uploadPreset: 'd4hf19h6' })
   );
     poceoUpload:boolean=false;
     zavrsio:boolean=true;
  constructor(private popup: Popup ,private renderer : Renderer,private _sponzoriService: SponzoriService) {
     this.naziv="";
     this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
         let res: any = JSON.parse(response);

       this.slika=res.public_id;
 } }

  ngOnInit() {
  }

  ngDoCheck() {
     if(this.uploader.isUploading){
       console.log("uploada se");

       this.poceoUpload=true;}
     else if(!this.uploader.isUploading && this.poceoUpload){

           this._sponzoriService.prijava(this.naziv, this.slika);
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
