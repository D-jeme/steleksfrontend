import {Component } from '@angular/core';
import {NgModule} from '@angular/core';

@Component({
 selector: 'my-gallery',
 templateUrl: './gallery.component.html',
 styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
  images;



  constructor(){
     this.images = [
   {"url":"http://steleks.ba/wp-content/gallery/elektrijada-2016/DSC_0367_Easy-Resize.com_.jpg",
   "title":"Naslov1",
   "caption":"Elektrijada 2015"},
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

 ]

  }
}
/*
  STARI HTML
  <ul  class="tab">
        <li class="dropdown">
          <div>
            <button class="dropbtn">Sifi</button>
            <div class="dropdown-content">
              <li *ngFor="let i of godineSifi;">
                <div (click)="f(i)">{{i}}</div>
              </li>
            </div>
          </div>
        </li>

        <li class="dropdown">
            <div>
              <button class="dropbtn">Elektrijada</button>
              <div class="dropdown-content">
                <li *ngFor="let i of godineElektrijade;">
                  <div (click)="f(i)">{{i}}</div>
                </li>
              </div>
            </div>
          </li>

        <li class="dropdown">
            <div>
              <button class="dropbtn">Liga robota</button>
              <div class="dropdown-content">
                <li *ngFor="let i of godineLigaRobota;">
                  <div (click)="f(i)">{{i}}</div>
                </li>
              </div>
            </div>
          </li>

          <li class="dropdown">
              <div>
                <button class="dropbtn">Steleksijada</button>
                <div class="dropdown-content">
                  <li *ngFor="let i of godineSteleksijada;">
                    <div (click)="f(i)">{{i}}</div>
                  </li>
                </div>
              </div>
            </li>

            <li class="dropdown">
                <div>
                  <button class="dropbtn">Kviz</button>
                  <div class="dropdown-content">
                    <li *ngFor="let i of godineKviz;">
                      <div (click)="f(i)">{{i}}</div>
                    </li>
                  </div>
                </div>
              </li>

              <li class="dropdown">
                  <div>
                    <button class="dropbtn">Izleti</button>
                    <div class="dropdown-content">
                      <li *ngFor="let i of godineIzleti;">
                        <div (click)="f(i)">{{i}}</div>
                      </li>
                    </div>
                  </div>
                </li>

                <li class="dropdown">
                    <div>
                      <button class="dropbtn">Ostalo</button>
                      <div class="dropdown-content">
                        <li *ngFor="let i of godineOstalo;">
                          <div (click)="f(i)">{{i}}</div>
                        </li>
                      </div>
                    </div>
                  </li>
    </ul>
    <div *ngIf="i==trenutniTab">{{sadrzaj}} </div>
<gallerypage [datasource]=images></gallerypage>
*/
