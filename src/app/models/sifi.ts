export class Sifi {

godina: String;

sadrzaj: String;

naziv1: String;

naziv2: String;

naziv3: String;

rad: String;

ucesnici1: Array<String>;

ucesnici2: Array<String>;

ucesnici3: Array<String>;

constructor(naziv1: String, naziv2: String, naziv3: String, godina: String,sadrzaj: String,ucesnici1: Array<String>, ucesnici2: Array<String>,
ucesnici3: Array<String>) {
  this.naziv1=naziv1;
  this.naziv2=naziv2;
  this.naziv3=naziv3;
  this.godina=godina;
  this.sadrzaj=sadrzaj;
  this.ucesnici1=ucesnici1;
  this.ucesnici2=ucesnici2;
  this.ucesnici3=ucesnici3;
  //this.rad=rad;
}

dajSadrzaj() {
  return this.sadrzaj;
}

}
