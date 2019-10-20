import { Component, OnInit } from '@angular/core';
import { Elektrijada } from '../../models/elektrijada';
@Component({
  selector: 'app-elektrijadapage',
  templateUrl: './elektrijadapage.component.html',
  styleUrls: ['./elektrijadapage.component.css']
})
export class ElektrijadapageComponent implements OnInit {
  v: number;
  //private godineElektrijeSadrzaj: Array<Elektrijada>;
trenutnaSlika: String;
brojacElemenata: number=0;

  historijaText: Array<String>;
  elektrijadaText: Array<String>;
  stemText: Array<String>;
  trenutniText: Array<String>;

  historijaSlike: Array<String>;
  elektrijadaSlike: Array<String>;
  stemSlike: Array<String>;
  trenutneSlike: Array<String>;

  slika1url: String;
  slika2url: String;
    slika3url: String;
      slika4url: String;

  godineElektrijadeSadrzaj: Array<String>;
  naslovi: Array<String>;
  naslov: String;
  trenutniSadrzaj: String;
  sadrzaj: String;
  trenutniTab:number;
  brojac:number=0;
  godina:String="";
  pomocni: String="Lorem ipsum dolor sit amet, detracto platonem te sed. Dicam utamur mandamus quo no, vim eu consul dissentias. Te pri latine temporibus. Libris iuvaret epicuri per ut, ad vel libris erroribus. Ut veritus delectus eleifend eam. Cu unum reprehendunt delicatissimi eam, eum dolor epicurei contentiones te, ne vel porro perfecto. Ex sed epicuri convenire, mei ne eleifend delicatissimi. Tantas electram comprehensam no qui, et primis complectitur mea, cum id case duis mediocrem. Consulatu theophrastus in eam, mea ad omnes definiebas. Quo posse latine te, mel dictas similique temporibus an. Nam possit reformidans eu. Ad nostro nusquam per. Eu gubergren maiestatis his. Purto lucilius pertinacia ut per, possit labitur vis ei. Essent sanctus deleniti mea ex, has ocurreret intellegam at. Nec agam oportere posidonium et. Ne omnium vocent sapientem eos, cum erat meis causae an. Quo dico tollit cu. Ex altera utroque invidunt vix, periculis principes ad est. Eirmod reprimique reprehendunt cu ius, mei mollis ancillae no, nam ad tantas reprimique. Ea qui mandamus interesset consequuntur, ne choro munere integre pro. Suas option in eos, id nam aperiam dolorum inciderint. Usu vitae sapientem gubergren ex."

  constructor() {
    this.slika1url='assets/images/historija.jpg';
    this.slika2url='assets/images/elektrijadaHistorija.jpg';
    this.slika3url='assets/images/zanimljivosti.jpg';
    this.slika4url='assets/images/pehari.jpg';
    this.naslovi = ['Historija','Elektrijada','Stem games'];
    this.historijaText=['Općenito o Historiji medjunarodnih takmičanja u Steleksu', 'Prvo učešće na međunaodnim takmičenjima', 'Zanimljivosti o učešćima na međunarodnim takmičenjima', 'Najbolji rezultati kroz historiju'];
    this.elektrijadaText=['Siofok 2014 Lorem ipsum dolor sit amet, detracto platonem te sed. Dicam utamur mandamus quo no, vim eu consul dissentias. Te pri latine temporibus. Libris iuvaret epicuri per ut, ad vel libris erroribus. Consulatu theophrastus in eam, mea ad omnes definiebas. Quo posse latine te, mel dictas similique temporibus an. Nam possit reformidans eu. Ad nostro nusquam per. Eu gubergren maiestatis his. Purto lucilius pertinacia ut per, possit labitur vis ei. Essent sanctus deleniti mea ex, ha', 'Bečići 2015 Lorem ipsum dolor sit amet, detracto platonem te sed. Dicam utamur mandamus quo no, vim eu consul dissentias. Te pri latine temporibus. Libris iuvaret epicuri per ut, ad vel libris erroribus. Consulatu theophrastus in eam, mea ad omnes definiebas. Quo posse latine te, mel dictas similique temporibus an. Nam possit reformidans eu. Ad nostro nusquam per. Eu gubergren maiestatis his. Purto lucilius pertinacia ut per, possit labitur vis ei. Essent sanctus deleniti mea ex, ha', 'Rimini 2016 Lorem ipsum dolor sit amet, detracto platonem te sed. Dicam utamur mandamus quo no, vim eu consul dissentias. Te pri latine temporibus. Libris iuvaret epicuri per ut, ad vel libris erroribus. Consulatu theophrastus in eam, mea ad omnes definiebas. Quo posse latine te, mel dictas similique temporibus an. Nam possit reformidans eu. Ad nostro nusquam per. Eu gubergren maiestatis his. Purto lucilius pertinacia ut per, possit labitur vis ei. Essent sanctus deleniti mea ex, ha', 'Budva 2017 Lorem ipsum dolor sit amet, detracto platonem te sed. Dicam utamur mandamus quo no, vim eu consul dissentias. Te pri latine temporibus. Libris iuvaret epicuri per ut, ad vel libris erroribus.Consulatu theophrastus in eam, mea ad omnes definiebas. Quo posse latine te, mel dictas similique temporibus an. Nam possit reformidans eu. Ad nostro nusquam per. Eu gubergren maiestatis his. Purto lucilius pertinacia ut per, possit labitur vis ei. Essent sanctus deleniti mea ex, ha'];
    this.stemText=['2018 godine se održalo u Poreču. Učestvovalo...', 'Nesto o nauci', 'NEsto o sportu', 'Partneri projekta'];
    this.historijaSlike=[this.slika1url, this.slika2url, this.slika3url, this.slika4url];
    this.elektrijadaSlike=[this.slika1url,this.slika1url,this.slika1url,this.slika1url];
    this.stemSlike=[this.slika3url,this.slika2url,this.slika4url,this.slika1url];
this.trenutneSlike=this.historijaSlike;
this.trenutniText=[];
this.trenutnaSlika="";
this.brojacElemenata=0;
    this.godineElektrijadeSadrzaj= ['Međunarodni susreti studenata elektrotehnike, poznatiji kao Elektrijada, tradicionalno se održavaju skoro pola stoljeća na prostorima bivše Jugoslavije i predstavljaju najveći godišnji skup studenata elektrotehnike u jugoistočnoj Evropi, a i šire. Nakon perioda kriznih godina i ratnih dešavanja, Elektrijada kao simbol jedinstva globalne akademske zajednice i studentskog duha, ipak opstaje i svojim djelovanjem doprinosi cilju čvršćeg povezivanja, saradnje i razmjene studenata elektrotehnike. Elektrijada kroz svoje programe širi i populariše sve sfere aktivnog studentskog života – naučni rad, takmičenja u znanju, sportska takmičenja, edukativne programe, zabavu... Ali ono što je najbitnije napomenuti jeste činjenica da Elektrijada, kao veliki susret studenata ovog tipa, predstavlja multietnički i multinacionalni projekat vrijedan pažnje. Petodnevni program Elektrijade se održava na atraktivnim turističkim destinacijama, gdje se uz dobro organizovan program, lijepu prirodu i dobro poznatu energiju studenata, navedene aktivnosti sprovode u atmosferi zdrave konkurencije i toplog prijateljstva. Putem Elektrijade studenti stupaju u kontakt sa privredom i firmama iz struke, uz čiju pomoć dolaze do sredstava za organizaciju skupa i na taj način ostvaruju prve korake poslovne saradnje korisne za budućnost. Posljednjih godina Elektrijada broji preko 2000 učesnika sa 30 fakulteta iz čitave Evrope. Pored organizatora, studenata iz Srbije, redovni učesnici, suorganizatori i dragi gosti Elektrijade su i studenti iz Bosne i Hercegovine, Srbije, Crne Gore, Slovenije, Makedonije i Hrvatske, Bugarske, Italije, Švajcarske, Grčke, Njemačke, Rumunije, Holandije i drugih evropskih zemalja. Formalni dio ove manifestacije čine takmičenje u nauci i sportu, gdje se svi fakulteti bore za pojedinačne uspjehe, kao i za titulu generalnog pobjednika Elektrijade.', this.pomocni, this.pomocni, this.pomocni, this.pomocni, this.pomocni, this.pomocni];
    this.trenutniText=this.historijaText;
    //this.sadrzaj=this.historijaText[0];
    this.naslov=this.naslovi[0];
    this.sadrzaj=this.godineElektrijadeSadrzaj[0];
  }
  ngOnInit() {
  }
fun(naslov:String){

    var elem1= document.getElementById("drugi_1");
      var elem2= document.getElementById("drugi_2");
        var elem3= document.getElementById("drugi_3");
  if(naslov=="Historija"){
    elem1.style.display="table";
    elem2.style.display="none";
    elem3.style.display="none";
  }
  else if(naslov=="Elektrijada"){
    elem1.style.display="none";
    elem2.style.display="table";
    elem3.style.display="none";
  }
  else if(naslov=="Stem games"){
    elem1.style.display="none";
    elem2.style.display="none";
    elem3.style.display="table";
  }
}
  f(godina:String):void{
    this.brojac=0;
    console.log("Pozvana");
    for (let i of this.naslovi) {
      this.brojac++;
    //  console.log(i);
      if(i==godina)
      {
          //this.trenutniTab=i;
          this.godina=i;
          break;
        }
    }
    console.log(this.brojac);
    if(this.brojac==1) {
      this.trenutniText=this.historijaText;
      this.trenutneSlike=this.historijaSlike;
      this.brojacElemenata=0;

    }
    if(this.brojac==2) {
      this.trenutniText=this.elektrijadaText;
      this.trenutneSlike=this.elektrijadaSlike;
      this.brojacElemenata=0;
    }
    if(this.brojac==3){
      this.trenutniText=this.stemText;
      this.trenutneSlike=this.stemSlike;
      this.brojacElemenata=0;
    }
    console.log("trenutni text",this.trenutniText);
    this.sadrzaj=this.godineElektrijadeSadrzaj[this.brojac-1];
    this.naslov=this.naslovi[this.brojac-1];
  }


  check(item: String):boolean{
    console.log("ima li meeee");
    console.log(item);
    console.log("brojac ell");
    console.log(this.brojacElemenata);
    console.log(this.trenutneSlike);
    this.trenutnaSlika=this.trenutneSlike[this.brojacElemenata];
    this.brojacElemenata++;
    console.log("jel ovo",this.trenutnaSlika);

    if (this.brojacElemenata>3)
this.brojacElemenata=0;
return true;

  }

}
