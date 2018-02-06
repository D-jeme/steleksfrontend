import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formasifi',
  templateUrl: './formasifi.component.html',
  styleUrls: ['./formasifi.component.css']
})
export class FormaSifiComponent implements OnInit {

      private fieldArray1: Array<any> = [];
      private newAttribute1: any = {};
      private fieldArray2: Array<any> = [];
      private newAttribute2: any = {};
      private fieldArray3: Array<any> = [];
      private newAttribute3: any = {};


      addFieldValue1() {
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
