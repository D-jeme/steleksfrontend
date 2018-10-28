import { Component, OnInit,ElementRef,Renderer,Input,DoCheck} from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { FileUploader } from 'ng2-file-upload';
import  {AlbumService} from '../../services/album.service';
import  {EventTypeService} from '../../services/eventType.service';
import {Popup} from 'ng2-opd-popup'
import { Router} from '@angular/router';
import { Album } from '../../models/album';




@Component({
  selector: 'app-formagalerija',
  templateUrl: './formagalerija.component.html',
  styleUrls: ['./formagalerija.component.css'],
  providers: [AlbumService,EventTypeService]

})

export class FormaGalerijaComponent implements OnInit,DoCheck {

  nazivAlbuma:string;
  nzvAlbuma:any;
  idAlb:string;
  albuma:Album;
  idAlbuma:any;
  eventTip:any;
  imageId: string;
    imgs:Array<string>;
    zavrsio:boolean=true;
    events: Array<String>;
    albumi: Array<Album>;
    update:boolean=false;
    album: Album;
  poceoUpload:boolean=false;
  brojSlika: number=0;
  url:String;
  username:String;
  rola:String;
  user:any;
  

  uploader: CloudinaryUploader = new CloudinaryUploader(
       new CloudinaryOptions({ cloudName: 'du4cgdhn8', uploadPreset: 'd4hf19h6' })
   );
  constructor(private popup: Popup ,private renderer : Renderer,private _albumService: AlbumService, private _eventTypeService: EventTypeService,private router: Router){

    this.eventTip="";
      this.imgs=[];
      this.events=[];
        this.albumi=[];
        //Override onSuccessItem to retrieve the imageId
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            var element=document.getElementById("kreiraj");
          element.style.width="200px";
          this.url="https://res.cloudinary.com/du4cgdhn8/image/upload/";



          this.imageId=res.public_id+".jpg";
          this.imgs.push(this.url+this.imageId);
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
     onInput1($event) {
        $event.preventDefault();
        this.idAlb=$event.target.value;
        this.album =  this.albumi.find(x => x.naziv == this.idAlb);
        this.idAlbuma=this.album.id;
        let myContainer = document.getElementById('nzv') as HTMLInputElement;
        myContainer.value = this.idAlb;


        console.log("idAblum",this.idAlbuma);
      }

    upload() {

        this.uploader.uploadAll();
        console.log("id albuma je  ",this.idAlbuma);
        console.log("naziv albuma je  ",this.nazivAlbuma);
          console.log("tip eventa ej ",this.eventTip);
          console.log("da li se uploada",this.uploader.isUploading);
          console.log("slike",this.imgs);
          this.renderer.listenGlobal('document','this.uploader.isUploading',(event)=>{console.log("cija ovo rijeka");});

          // dispose the observable
          //this.fixed=this.uploader.isUploading;
        }


  ngOnInit() {
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

    this._eventTypeService.dajEventTypes().subscribe(
      data=>{
        console.log(data.array.length);
        for(let i=0;i<data.array.length;i++){
          this.events.push(data.array[i].eventType);
          console.log("eee",data.array[i].eventType);}

      }
    );
    this._albumService.dajAlbume().subscribe(
      data=>{
        this.idAlbuma=data.array[0]._id;
        this.nzvAlbuma=data.array[0].title;


        for(let i=0;i<data.array.length;i++){
          //console.log("dasd",data.array);
          if(data.array[i].title!=undefined){
                          this.album= new Album (data.array[i]._id,data.array[i].title,data.array[i].imgUrls,0);
          //this.albumi.push(this.album);
          this.albumi.push(new Album(data.array[i]._id,data.array[i].title,data.array[i].imgUrls,100));

        }  }
      }

    );


  }
  YourCancelEvent(){
    this.router.navigateByUrl('/');
}
  ngDoCheck() {
       let elem=document.getElementById("loader-1");
     if(this.uploader.isUploading){

       elem.style.display="block";
       this.poceoUpload=true;}
     else if(!this.uploader.isUploading && this.poceoUpload){
       elem.style.display="none";
       console.log("ne uploada se ",this.brojSlika);
       if(this.nazivAlbuma=="")this.nazivAlbuma=this.idAlb;
           //this._albumService.dodajAlbum(this.nazivAlbuma,this.imgs,this.eventTip);
           if(this.update)
          this._albumService.updateAlbum(this.idAlbuma,this.imgs,this.nazivAlbuma);
           else
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
   odabranoKreiranje()
   {
     let elem=document.getElementById("updateAL");
     elem.style.display="none";
     let elem1=document.getElementById("pre");
     elem1.style.display="block";
     let myContainer = document.getElementById('nzv') as HTMLInputElement;
     myContainer.value = "";
     this.update=false;
   }
   odabranoUpdate()
   {
     let elem=document.getElementById("updateAL");
     elem.style.display="block";
     let elem1=document.getElementById("pre");
     elem1.style.display="none";

       let myContainer = document.getElementById('nzv') as HTMLInputElement;
       myContainer.value = this.nzvAlbuma;
    //   console.log("niz",this.albumi[0].naziv);


     this.update=true;
   }

}
