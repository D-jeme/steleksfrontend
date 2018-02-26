import { Component, OnInit } from '@angular/core';
import { Elektrijada } from '../../models/elektrijada';
@Component({
  selector: 'app-elektrijadapage',
  templateUrl: './elektrijadapage.component.html',
  styleUrls: ['./elektrijadapage.component.css']
})
export class ElektrijadapageComponent implements OnInit {
  private godineElektrijade: Array<String>;
  //private godineElektrijeSadrzaj: Array<Elektrijada>;
  private godineElektrijadeSadrzaj: Array<String>;
  private naslovi: Array<String>;
  private naslov: String;
  private trenutniSadrzaj: String;
  private sadrzaj: String;
  private trenutniTab:number;
  private brojac:number=0;
  private godina:String="";
  private pomocni: String="Lorem ipsum dolor sit amet, detracto platonem te sed. Dicam utamur mandamus quo no, vim eu consul dissentias. Te pri latine temporibus. Libris iuvaret epicuri per ut, ad vel libris erroribus. Ut veritus delectus eleifend eam. Cu unum reprehendunt delicatissimi eam, eum dolor epicurei contentiones te, ne vel porro perfecto. Ex sed epicuri convenire, mei ne eleifend delicatissimi. Tantas electram comprehensam no qui, et primis complectitur mea, cum id case duis mediocrem. Consulatu theophrastus in eam, mea ad omnes definiebas. Quo posse latine te, mel dictas similique temporibus an. Nam possit reformidans eu. Ad nostro nusquam per. Eu gubergren maiestatis his. Purto lucilius pertinacia ut per, possit labitur vis ei. Essent sanctus deleniti mea ex, has ocurreret intellegam at. Nec agam oportere posidonium et. Ne omnium vocent sapientem eos, cum erat meis causae an. Quo dico tollit cu. Ex altera utroque invidunt vix, periculis principes ad est. Eirmod reprimique reprehendunt cu ius, mei mollis ancillae no, nam ad tantas reprimique. Ea qui mandamus interesset consequuntur, ne choro munere integre pro. Suas option in eos, id nam aperiam dolorum inciderint. Usu vitae sapientem gubergren ex."

  constructor() {
    this.godineElektrijade = ['About','2012','2013','2014','2015','2016','2017'];
    this.godineElektrijadeSadrzaj= ['Međunarodni susreti studenata elektrotehnike, poznatiji kao Elektrijada, tradicionalno se održavaju skoro pola stoljeća na prostorima bivše Jugoslavije i predstavljaju najveći godišnji skup studenata elektrotehnike u jugoistočnoj Evropi, a i šire. Nakon perioda kriznih godina i ratnih dešavanja, Elektrijada kao simbol jedinstva globalne akademske zajednice i studentskog duha, ipak opstaje i svojim djelovanjem doprinosi cilju čvršćeg povezivanja, saradnje i razmjene studenata elektrotehnike. Elektrijada kroz svoje programe širi i populariše sve sfere aktivnog studentskog života – naučni rad, takmičenja u znanju, sportska takmičenja, edukativne programe, zabavu... Ali ono što je najbitnije napomenuti jeste činjenica da Elektrijada, kao veliki susret studenata ovog tipa, predstavlja multietnički i multinacionalni projekat vrijedan pažnje. Petodnevni program Elektrijade se održava na atraktivnim turističkim destinacijama, gdje se uz dobro organizovan program, lijepu prirodu i dobro poznatu energiju studenata, navedene aktivnosti sprovode u atmosferi zdrave konkurencije i toplog prijateljstva. Putem Elektrijade studenti stupaju u kontakt sa privredom i firmama iz struke, uz čiju pomoć dolaze do sredstava za organizaciju skupa i na taj način ostvaruju prve korake poslovne saradnje korisne za budućnost. Posljednjih godina Elektrijada broji preko 2000 učesnika sa 30 fakulteta iz čitave Evrope. Pored organizatora, studenata iz Srbije, redovni učesnici, suorganizatori i dragi gosti Elektrijade su i studenti iz Bosne i Hercegovine, Srbije, Crne Gore, Slovenije, Makedonije i Hrvatske, Bugarske, Italije, Švajcarske, Grčke, Njemačke, Rumunije, Holandije i drugih evropskih zemalja. Formalni dio ove manifestacije čine takmičenje u nauci i sportu, gdje se svi fakulteti bore za pojedinačne uspjehe, kao i za titulu generalnog pobjednika Elektrijade.', this.pomocni, this.pomocni, this.pomocni, this.pomocni, this.pomocni, this.pomocni];
    this.naslovi = ['Šta je Elektrijada?', 'Elektrijada 2012', 'Elektrijada 2013',
    'Elektrijada 2014','Elektrijada 2014', 'Elektrijada 2015',
    'Elektrijada 2016', 'Elektrijada 2017'];
    this.sadrzaj=this.godineElektrijadeSadrzaj[0];
    this.naslov=this.naslovi[0];
  }
  ngOnInit() {
  }

  f(godina:String):void{
    this.brojac=0;
    console.log("Pozvana");
    for (let i of this.godineElektrijade) {
      this.brojac++;
    //  console.log(i);
      if(i==godina)
      {
          //this.trenutniTab=i;
          this.godina=i;
          break;
}
    }

this.sadrzaj=this.godineElektrijadeSadrzaj[this.brojac-1];
this.naslov=this.naslovi[this.brojac-1];
      }

}
