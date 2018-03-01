import { Component, OnInit } from '@angular/core';
import { Elektrijada } from '../../models/elektrijada';
import { Medalje } from '../../models/medalje';
import  { ElektrijadaService } from '../../services/elektrijada.service';

@Component({
  selector: 'app-formaelektrijada',
  templateUrl: './formaelektrijada.component.html',
  styleUrls: ['./formaelektrijada.component.css'],
  providers: [ElektrijadaService]
})
export class FormaElektrijadaComponent implements OnInit {
  elektrijada: Elektrijada;
  fakulteti:Array<String>;
  medalje:Medalje;
  naziv:String='';
  godina:String='';
  sadrzaj:String='';
  faculty1:String='';
  faculty2:String='';
  faculty3:String='';


  constructor(private _elektrijadaService: ElektrijadaService) {
  this.fakulteti=new Array<String>();

  }

  ngOnInit() {
  }

  print(){
    this.fakulteti=[this.faculty1,this.faculty2,this.faculty3];
    this.medalje=new Medalje(null,null,this.fakulteti,null,null);
    this.elektrijada=new Elektrijada(this.naziv,this.godina,this.sadrzaj,this.medalje,null);
    this._elektrijadaService.prijava(this.elektrijada);

  }

}
