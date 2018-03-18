import { Component, OnInit,ElementRef,Renderer} from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { FileUploader } from 'ng2-file-upload';
import  {AlbumService} from '../../services/album.service';
import  {EventTypeService} from '../../services/eventType.service';



@Component({
  selector: 'app-formagalerija',
  templateUrl: './formagalerija.component.html',
  styleUrls: ['./formagalerija.component.css'],
  providers: [AlbumService,EventTypeService]

})
export class FormaGalerijaComponent implements OnInit {
  imageId: string;
    imgs:Array<String>;
    zavrsio:boolean=true;
    events: Array<String>;

  uploader: CloudinaryUploader = new CloudinaryUploader(
       new CloudinaryOptions({ cloudName: 'du4cgdhn8', uploadPreset: 'd4hf19h6' })
   );
  constructor(private renderer : Renderer,private _albumService: AlbumService, private _eventTypeService: EventTypeService){

      this.imgs=[];
      this.events=[];
        //Override onSuccessItem to retrieve the imageId
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);

            //this.imageId = res.public_id;
          this.imageId=res.public_id;
          this.imgs.push(this.imageId);
            console.log("full",res);
            console.log("idovi",this.imageId);
            return { item, response, status, headers };
        };
    }

    upload() {
console.log("da li se prije uploada",this.uploader.isUploading);
        this.uploader.uploadAll();

          console.log("da li se uploada",this.uploader.isUploading);
          console.log("slike",this.imgs);
          this.renderer.listenGlobal('document','this.uploader.isUploading',(event)=>{console.log("cija ovo rijeka");});
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


}
