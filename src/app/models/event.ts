export class Event {

id: String;

naziv: String;

kratkiTekst: String;

tekst: String;

datumPocetka: String;

datumZavrsetka: String;

slika: String;

mjesec: String;

dan: String;

tipEventa: String;


constructor(id: String,naziv: String,slika: String,kratkiTekst: String, tekst:String, datumPocetka:String,  datumZavrsetka:String, mjesec: String, dan: String, tipEventa: String){
  this.naziv=naziv;
  this.datumPocetka=datumPocetka;
  this.datumZavrsetka=datumZavrsetka;
  this.slika=slika;
  this.tekst=tekst;
  this.kratkiTekst=kratkiTekst;
  this.id=id;
  this.mjesec=mjesec;
  this.dan=dan;
  this.tipEventa=tipEventa;
}
/*constructor(id: String,naziv: String, slika: String, kratkiTekst: String,  mjesec: String, dan: String, tipEventa: String) {
    this.id=id;
    this.naziv=naziv;
    this.kratkiTekst=kratkiTekst;
    this.slika=slika;
    this.mjesec=mjesec;
    this.dan=dan;
    this.tipEventa=tipEventa;
}*/


}
