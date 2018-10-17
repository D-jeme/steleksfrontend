import {Component, Input,OnInit, OnDestroy} from '@angular/core';
import {NgModule} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GalerijaService} from '../../services/galerija.service';
import 'rxjs/add/operator/switchMap';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';




@Component({
 selector: 'gallerypage',
 templateUrl: './gallerypage.component.html',
 styleUrls: ['./gallerypage.component.css'],
 providers:[GalerijaService]
})
export class GallerypageComponent implements OnInit, OnDestroy{


  @Input() datasource;
  selectedImage;
  slike: Array<String>;
  traka: Array<String>;
  indeks:any;
  naziv:String;

  //za pristup prosljedjenom individualno-u

  id: number;
 private sub: any;


   uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({ cloudName: 'du4cgdhn8', uploadPreset: 'd4hf19h6' })
    );

 constructor(private route: ActivatedRoute, private _galleryService: GalerijaService) {this.slike=[];this.traka=[];this.indeks=0;}


 ngOnInit() {
   this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });
   this._galleryService.postaviIdGalerije(String(this.id));

   this._galleryService.dajSlike().subscribe(
     data =>{
      console.log("SLike",data);

      this.naziv=data.title;
      console.log("naziv",this.naziv);
       for(let i=0;i<data.imgUrls.length;i++)
       {
         if(i==0)this.selectedImage=data.imgUrls[i];
       this.slike.push(data.imgUrls[i]);
       if(i<5)
       this.traka.push(data.imgUrls[i]);

       console.log("Slike:",this.slike);
     }
     }
   );


 }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setSelectedImage(image){
    let slike=document.getElementById("slika");
    slike.style.display="table";
  /*  var el=document.getElementById('selectedImageModal');
    el.style.paddingTop="75px";

    var sirina=(window.screen.width);
    if(sirina>1850)el.style.paddingBottom="280px";
    else if(sirina>1000 && sirina<1850) el.style.paddingBottom="65px";
    else el.style.paddingBottom="250px";
    console.log(sirina);*/
     this.selectedImage= image;

  }
  pomjeri(forward){

    let temp=this.indeks+forward;
      console.log("temp",temp);
    if(temp>=0&&temp<=this.slike.length)
    this.indeks=temp;
    console.log("indeks",this.indeks);
    for(let i =0;i<5;i++)
    {

        if(this.indeks >= 0 && this.indeks+5 < this.slike.length){

      this.traka[i]=this.slike[this.indeks+i];
    }
}
    if(this.indeks==0)  document.getElementById("l").style.visibility="hidden";
    else document.getElementById("l").style.visibility="visible";
    if(this.indeks+4==this.slike.length) document.getElementById("d").style.visibility="hidden";
    else document.getElementById("d").style.visibility="visible";
}



  navigate(forward){
  /*  var index = this.slike.indexOf(this.selectedImage)+(forward ? 1: -1);
    if(index >= 0 && index < this.slike.length){
       this.selectedImage = this.slike[index];
    }*/
 }
}
