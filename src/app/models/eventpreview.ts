export class Eventpreview {

id: String;
naziv: String;
lokacija: String;
tekst: String;
slika: String;
mjesec: String;
danPocetak: String;
danKraj: String;
tipEventa: String;
ucesnici: String;
mjesto: String;
ucesce: String;

constructor(id: String,naziv: String, lokacija: String, tekst: String,
  slika: String, mjesec: String, danPocetak: String, danKraj:String,
  ucesnici: String, mjesto: String, ucesce: String) {
    this.id=id;
    this.naziv=naziv;
    this.lokacija=lokacija;
    this.tekst=tekst;
    this.slika=slika;
    this.mjesec=mjesec;
    this.danPocetak=danPocetak;
    this.danKraj=danKraj;
    this.ucesnici=ucesnici;
    this.mjesto=mjesto;
    this.ucesce=ucesce;
}
}
