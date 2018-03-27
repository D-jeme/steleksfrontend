import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderatoropcije',
  templateUrl: './moderatoropcije.component.html',
  styleUrls: ['./moderatoropcije.component.css']
})
export class ModeratorOpcijeComponent implements OnInit {
rld: any;
  ngOnInit() {
    this.rld = localStorage.getItem('reload');console.log("reload",this.rld);
    if(this.rld=="true"){
       localStorage.setItem('reload',JSON.stringify(false));}
  }


load(){
  location.reload();
}
}
