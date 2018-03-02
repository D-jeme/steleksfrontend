import {Component, Input} from '@angular/core';
import {NgModule} from '@angular/core';


@Component({
 selector: 'gallerypage',
 templateUrl: './gallerypage.component.html',
 styleUrls: ['./gallerypage.component.css']
})
export class GallerypageComponent{

  @Input() datasource;
  selectedImage;

  setSelectedImage(image){
    var el=document.getElementById('selectedImageModal');
    el.style.paddingTop="75px";

    var sirina=(window.screen.width);
    if(sirina>1850)el.style.paddingBottom="280px";
    else if(sirina>1000 && sirina<1850) el.style.paddingBottom="65px";
    else el.style.paddingBottom="250px";
    console.log(sirina);
     this.selectedImage= image;
  }
  navigate(forward){
    var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
    if(index >= 0 && index < this.datasource.length){
       this.selectedImage = this.datasource[index];
    }
 }
}
