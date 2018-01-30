import {Component, Input} from '@angular/core';

@Component({
 selector: 'gallerypage',
 templateUrl: './gallerypage.component.html',
 styleUrls: ['./gallerypage.component.css']
})
export class GallerypageComponent{ 

  @Input() datasource;
  selectedImage;

  setSelectedImage(image){
     this.selectedImage= image;	
  }
  navigate(forward){
    var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
    if(index >= 0 && index < this.datasource.length){
       this.selectedImage = this.datasource[index];	
    }
 }
}