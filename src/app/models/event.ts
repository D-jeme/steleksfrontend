export class Event {

id: String;

naziv: String;

kratkiTekst: String;

slika: String;

mjesec: String;

dan: String;

tipEventa: String;


constructor(id: String,naziv: String, slika: String, kratkiTekst: String,  mjesec: String, dan: String, tipEventa: String) {
    this.id=id;
    this.naziv=naziv;
    this.kratkiTekst=kratkiTekst;
    this.slika=slika;
    this.mjesec=mjesec;
    this.dan=dan;
    this.tipEventa=tipEventa;
}

}
