import { Component, OnInit,ElementRef,Renderer,Input,DoCheck} from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { FileUploader } from 'ng2-file-upload';
import  {AlbumService} from '../../services/album.service';
import  {EventTypeService} from '../../services/eventType.service';
import {Popup} from 'ng2-opd-popup'
import { Router} from '@angular/router';



@Component({
  selector: 'app-formagalerija',
  templateUrl: './formagalerija.component.html',
  styleUrls: ['./formagalerija.component.css'],
  providers: [AlbumService,EventTypeService]

})

export class FormaGalerijaComponent implements OnInit,DoCheck {

  nazivAlbuma:string;
  eventTip:any;
  imageId: string;
    imgs:Array<string>;
    zavrsio:boolean=true;
    events: Array<String>;

  poceoUpload:boolean=false;
  brojSlika: number=0;

  uploader: CloudinaryUploader = new CloudinaryUploader(
       new CloudinaryOptions({ cloudName: 'du4cgdhn8', uploadPreset: 'd4hf19h6' })
   );
  constructor(private popup: Popup ,private renderer : Renderer,private _albumService: AlbumService, private _eventTypeService: EventTypeService,private router: Router){

    this.eventTip="";
      this.imgs=[];
      this.events=[];
        //Override onSuccessItem to retrieve the imageId
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);

          this.imageId=res.public_id;
          this.imgs.push(this.imageId);
          this.brojSlika++;
            console.log("full",res);
            console.log("idovi",this.imageId);
            return { item, response, status, headers };
        };

    }
    onInput($event) {
       $event.preventDefault();
       this.eventTip=$event.target.value
     }
    upload() {

        this.uploader.uploadAll();
        console.log("naziv albuma je  ",this.nazivAlbuma);
        console.log("tip eventa ej ",this.eventTip);
          console.log("da li se uploada",this.uploader.isUploading);
          console.log("slike",this.imgs);
          this.renderer.listenGlobal('document','this.uploader.isUploading',(event)=>{console.log("cija ovo rijeka");});

          // dispose the observable
          //this.fixed=this.uploader.isUploading;
        }


  ngOnInit() {

    this._eventTypeService.dajEventTypes().subscribe(
      data=>{
        console.log(data.array.length);
        for(let i=0;i<data.array.length;i++){
          this.events.push(data.array[i].eventType);
          console.log("eee",data.array[i].eventType);}
      }
    );

  }
  YourCancelEvent(){
    this.router.navigateByUrl('/');
}
  ngDoCheck() {
       let elem=document.getElementById("loader-1");

     console.log("promjeen");
     if(this.uploader.isUploading){
       console.log("uploada se");

       elem.style.display="block";
       this.poceoUpload=true;}
     else if(!this.uploader.isUploading && this.poceoUpload){
       elem.style.display="none";
       console.log("ne uploada se ",this.brojSlika);
           this._albumService.dodajAlbum(this.nazivAlbuma,this.imgs,this.eventTip);
       this.poceoUpload=false;
       this.popup.options={
         header:"Upload-anje",
         color:"green",
         animationDuration:1.5,
           cancleBtnContent: "Ostanite ovdje",
           confirmBtnContent: "Vratite se na pocetnu",




         animation: "fadeInDown"
       }
           this.popup.show();
                this.brojSlika=0;
     }


   }

}
