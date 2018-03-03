import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formasifi',
  templateUrl: './formasifi.component.html',
  styleUrls: ['./formasifi.component.css']
})
export class FormaSifiComponent implements OnInit {

       fieldArray1: Array<any> = [];
       newAttribute1: any = {};
       fieldArray2: Array<any> = [];
       newAttribute2: any = {};
       fieldArray3: Array<any> = [];
       newAttribute3: any = {};


      addFieldValue1() {
        console.log("hbhygbbuh");
        console.log(this.newAttribute1);
        console.log(this.fieldArray1);
          this.fieldArray1.push(this.newAttribute1)
          this.newAttribute1 = {};
      }

      deleteFieldValue1(index) {
          this.fieldArray1.splice(index, 1);
      }
      addFieldValue2() {
          this.fieldArray2.push(this.newAttribute2)
          this.newAttribute2 = {};
      }

      deleteFieldValue2(index) {
          this.fieldArray2.splice(index, 1);
      }
      addFieldValue3() {
          this.fieldArray3.push(this.newAttribute3)
          this.newAttribute3 = {};
      }

      deleteFieldValue3(index) {
          this.fieldArray3.splice(index, 1);
      }

  constructor() { }

  ngOnInit() {
  }

}
