import {Component, Input,OnInit, OnDestroy} from '@angular/core';
import {NgModule} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GalerijaService} from '../../services/galerija.service';
import 'rxjs/add/operator/switchMap';

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

  //za pristup prosljedjenom individualno-u

  id: number;
 private sub: any;

 constructor(private route: ActivatedRoute, private _galleryService: GalerijaService) {this.slike=[];}


 ngOnInit() {


   this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this._galleryService.postaviIdGalerije(String(this.id));

   this._galleryService.dajSlike().subscribe(
     data =>{

       for(let i=0;i<data.imgUrls.length;i++)
       this.slike.push(data.imgUrls[i]);
     }
   );

 }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



  setSelectedImage(image){
     this.selectedImage= image;

  }



  navigate(forward){
    var index = this.slike.indexOf(this.selectedImage)+(forward ? 1: -1);
    if(index >= 0 && index < this.slike.length){
       this.selectedImage = this.slike[index];
    }
 }
}
