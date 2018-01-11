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

  private trenutniSadrzaj: String;
  private sadrzaj: String;
  private trenutniTab:number;
  private brojac:number=0;
  private godina:String="";

  constructor() {
    this.godineElektrijade = ['2012','2013','2014','2015','2016','2017'];
    this.godineElektrijadeSadrzaj= ['Medunarodni susreti studenata elektrotehnike, poznatiji kao Elektrijada, tradicionalno se odravaju skoro pola stoljeca na prostorima bive Jugoslavije i predstavljaju najveci godinji skup studenata elektrotehnike u jugoistocnoj Evropi, a i ire. Nakon perioda kriznih godina i ratnih deavanja, Elektrijada kao simbol jedinstva globalne akademske zajednice i studentskog duha, ipak opstaje i svojim djelovanjem doprinosi cilju cvrceg povezivanja, saradnje i razmjene studenata elektrotehnike. Elektrijada kroz svoje programe iri i popularie sve sfere aktivnog studentskog ivota  naucni rad, takmicenja u znanju, sportska takmicenja, edukativne programe, zabavu... Ali ono to je najbitnije napomenuti jeste cinjenica da Elektrijada, kao veliki susret studenata ovog tipa, predstavlja multietnicki i multinacionalni projekat vrijedan panje. Petodnevni program Elektrijade se odrava na atraktivnim turistickim destinacijama, gdje se uz dobro organizovan program, lijepu prirodu i dobro poznatu energiju studenata, navedene aktivnosti sprovode u atmosferi zdrave konkurencije i toplog prijateljstva. Putem Elektrijade studenti stupaju u kontakt sa privredom i firmama iz struke, uz ciju pomoc dolaze do sredstava za organizaciju skupa i na taj nacin ostvaruju prve korake poslovne saradnje korisne za buducnost. Posljednjih godina Elektrijada broji preko 2000 ucesnika sa 30 fakulteta iz citave Evrope.', 'Elektrijada 2013','Elektrijada 2014', 'Elektrijada 2015', 'Elektrijada 2016', 'Elektrijada 2017'] ;

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

      }

}
