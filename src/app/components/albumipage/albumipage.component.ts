import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import {AlbumService} from '../../services/album.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-albumipage',
  templateUrl: './albumipage.component.html',
  styleUrls: ['./albumipage.component.css'],
  providers:[AlbumService]
})
export class AlbumipageComponent implements OnInit {

  albumi : Array<Album>;
  id:String;

  images;
  constructor(private _albumService: AlbumService, private router: Router) {
    this.albumi=[];

  }


  onClick (id) {
    this.router.navigate(['/galerija', id]);
  }


  ngOnInit() {


    this._albumService.dajAlbume().subscribe(

      data =>{

        for(let i=0;i<data.array.length;i++){

          this.albumi.push(new Album(data.array[i]._id,data.array[i].title,data.array[i].imgUrls,100));
          

        }
      }
    );

    }

    print(naziv: string){

      this._albumService.postaviIdGalerije(naziv);

    }


}
