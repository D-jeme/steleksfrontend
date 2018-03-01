export class Event {

naziv: String;

kratkiTekst: String;

slika: String;

datum: String;

link: String;

constructor(naziv: String, slika: String, kratkiTekst: String,  datum: String, link: String) {
    this.naziv=naziv;
    this.kratkiTekst=kratkiTekst;
    this.slika=slika;
    this.datum=datum;
    this.link=link;
}

}
