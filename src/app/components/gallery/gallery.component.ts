import {Component } from '@angular/core';

@Component({
 selector: 'my-gallery',
 template: `
 <gallerypage [datasource]=images></gallerypage>
`,
})

export class GalleryComponent { 
  images;

  constructor(){
     this.images = [
   {"url":"http://steleks.ba/wp-content/gallery/elektrijada-2016/DSC_0367_Easy-Resize.com_.jpg",  
   "title":"Naslov1",
   "caption":"Opis1"},
   {"url":"http://steleks.ba/wp-content/gallery/elektrijada-2016/DSC_0378_Easy-Resize.com_.jpg",
   "title":"Naslov2",
   "caption":"Opis2"},
   {"url":"http://steleks.ba/wp-content/gallery/elektrijada-2016/DSC_0006_Easy-Resize.com_.jpg",
   "title":"Naslov3",
   "caption":"Opis3"},
   {"url":"http://steleks.ba/wp-content/gallery/elektrijada-2016/DSC_0055_Easy-Resize.com_.jpg",
   "title":"Naslov4",
   "caption":"Opis4"},
   {"url":"http://steleks.ba/wp-content/gallery/elektrijada-2016/DSC_0152_Easy-Resize.com_.jpg",
   "title":"Naslov5",
   "caption":"Opis5"},
   {"url":"http://steleks.ba/wp-content/gallery/elektrijada-2016/dsc_0543_Easy-Resize.com_.jpg",
   "title":"Naslov6",
   "caption":"Opis6"},
     ];
  }
}