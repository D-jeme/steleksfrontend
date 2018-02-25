import { Component, OnInit } from '@angular/core';
import { Elektrijada } from '../../models/elektrijada';

@Component({
  selector: 'app-sifipage',
  templateUrl: './sifipage.component.html',
  styleUrls: ['./sifipage.component.css']
})

export class SIFIpageComponent implements OnInit {
  private godineSifija: Array<String>;
  //private godineElektrijeSadrzaj: Array<Elektrijada>;
  private godineSifijaSadrzaj: Array<String>;

  private trenutniSadrzaj: String;
  private sadrzaj: String;
  private trenutniTab:number;
  private brojac:number=0;
  private godina:String="";

  constructor() {
    this.godineSifija = ['About', '2012', '2013', '2014', '2015', '2016', '2017'];
    this.godineSifijaSadrzaj= ['ŠTA JE SARAJEVO INNOVATIONS FESTIVAL? Udruženje studenata Elektrotehničkog fakulteta Sarajevo “STELEKS” po drugi put organizuje smotru studentskih radova pod nazivom Sarajevo Innovations Festival (“SIFI”). Festival će se održati 25. i 26. oktobra u prostorijama Elektrotehničkog fakulteta u Sarajevu. “SIFI 2017” je odlična prilika da prezentirate svoje radove, razmijenite ideje, upoznate se sa vrsnim stručnjacima iz različitih oblasti, njihovim radovima i iskustvima, ali i sa budućim poslodavcima. Raznovrstan program manifestacije obuhvata kako edukativne, tako i zabavne sadržaje. Renomirani predavači će održati predavanja o aktuelnim temama iz oblasti elektrotehnike. ZAŠTO SE ORGANIZUJE SIFI?Ciljevi SIFI-a su povećanje kvaliteta studentskih radova, poticanje inovativnih ideja i ohrabrivanje mladih stručnjaka da svoje ideje plasiraju na tržište. Većini studenata jedina motivacija za izradu studentskih radova su ocjene na predmetima, što po našem mišljenju uzrokuje manjak novih ideja i inovacija, te ne priprema studente da “prodaju” svoje ideje. DA LI JE MOJ RAD DOVOLJNO DOBAR? Svi studenti elektrotehničkih i srodnih fakulteta mogu poslati svoje radove iz oblasti automatike, elektronike, energetike, telekomunikacija i informacionih tehnologija. Ideja ili projekat ne moraju biti dovršeni do kraja, niti perfektno funkcionalni. Važan je njihov potencijal i način predstavljanja. Svi radovi moraju biti napisani u IEEE formatu. Vrlo bitno je da rad bude gramatički i pravopisno korektan i pregledan, a za primjer možete vidjeti prošlogodišnji pobjednički rad.Također na ovoj fotogaleriji možete vidjeti postere radova prošlogodišnjeg SIFI-a. Utiske učesnika možete vidjeti na ovome videu. KAKO SE PRIJAVITI? Upute za prijavu vaših radova možete vidjeti ovdje. Krajnji rok za prijavu i slanje radova je 01. oktobar 2017. ŠTA NAKON PRIJAVE?  Nakon isteka roka prijave, stručni recenzenti će pregledati radove i autori radova koji zadovolje kriterije učešća na festivalu će dobiti mail potvrde o učešću. Prvi dan manifestacije, svaki od učesnika će imati svoj štand, gdje će izložiti svoje radove i na originalan način ih prezentovati posjetiteljima manifestacije. Primjer postera koji će se nalazaiti na štandu možete vidjeti ovdje. Drugi dan slijedi izložba i proglašenje najboljih radova. Svečana ceremonija zatvaranja smotre bit će krunisana proglašenjem tri najbolja rada, kada će autorima biti uručene novčane nagrade u iznosu od 200, 300 i 500 KM.', 'Sifi 2012', 'Sifi 2013','Sifi 2014', 'Sifi 2015', 'Sifi 2016', 'Sifi 2017'];
  }
  ngOnInit() {
  }

  f(godina:String):void{
    this.brojac=0;
    console.log("Pozvana");
    for (let i of this.godineSifija) {
      this.brojac++;
    //  console.log(i);
      if(i==godina)
      {
          //this.trenutniTab=i;
          this.godina=i;
          break;
}
    }

this.sadrzaj=this.godineSifijaSadrzaj[this.brojac-1];

      }

}
