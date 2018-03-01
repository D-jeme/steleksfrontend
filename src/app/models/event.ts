export class Event {

naziv: String;

kratkiTekst: String;

slika: String;

datum: String;

constructor(naziv: String, slika: String, kratkiTekst: String,  datum: String) {
    this.naziv=naziv;
    this.kratkiTekst=kratkiTekst;
    this.slika=slika;
    this.datum=datum;
}

}
