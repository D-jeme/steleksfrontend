import { Component, OnInit } from '@angular/core';
import { Sifi } from '../../models/sifi';
import  { EventService } from '../../services/event.service';

@Component({
  selector: 'app-sifipage',
  templateUrl: './sifipage.component.html',
  styleUrls: ['./sifipage.component.css'],
  providers: [EventService]
})

export class SIFIpageComponent implements OnInit {
  godineSifija: Array<String>;
  //private godineElektrijeSadrzaj: Array<Elektrijada>;
  godineSifijaSadrzaj: Array<String>;
  trenutniSadrzaj: String;
  sadrzaj: String;
  trenutniTab:number;
  brojac:number=0;
  godina:String="";

  year: String;
  text: String;
  eventType: String;
  pomocniID: string;

  naziv1: String;
  rad1: String;
  ucesnici1: Array<String>;

  naziv2: String;
  rad2: String;
  ucesnici2: Array<String>;

  naziv3: String;
  rad3: String;
  ucesnici3: Array<String>;

  sifi: Array<Sifi>;
  pomocniSifi: Sifi;

  prikazUcesnika: Array<String>;
  prikazNaziva: Array<String>
  test: String;
  show: boolean;
  aboutSadrzaj: String;

  constructor(private _eventService: EventService) {
    this.godineSifija = new Array<String>();
    this.godineSifijaSadrzaj= new Array<String>();
    this.eventType="sifi";
    this.sifi=new Array<Sifi>();
    this.ucesnici1=new Array<String>();
    this.ucesnici2=new Array<String>();
    this.ucesnici3=new Array<String>();
    this.test="";
    this.aboutSadrzaj='Sarajevo Innovations Festival („SIFI“)  predstavlja smotru studentskih radova koju organizuje udruženje studenata Elektrotehničkog fakulteta Sarajevo “STELEKS”. Raznovrstan program manifestacije obuhvata kako edukativne, tako i zabavne sadržaje. Renomirani predavači će održati predavanja o aktuelnim temama iz oblasti elektrotehnike. Većini studenata jedina motivacija za izradu studentskih radova su ocjene na predmetima, što po našem mišljenju uzrokuje manjak novih ideja i inovacija, te ne priprema studente da “prodaju” svoje ideje. Ciljevi SIFI-a su povećanje kvaliteta studentskih radova, poticanje inovativnih ideja i ohrabrivanje mladih stručnjaka da svoje ideje plasiraju na tržište. Nemojte postavljati sebi kamen spoticanja preranim zaključcima kao što su oni da vaš rad nije dovljno dobar, inovativan ili kreativan, zatim da nema svrhe da se prijavljujete, jer će biti boljih od vas i sl. Pitajte se zašto ne prijaviti rad? Ono što je važno jeste potencijal i' + ' način predstavljanja istog. Ideja ili projekat ne moraju biti dovršeni do kraja, niti perfektno funkcionalni. Očekuje vas iskustvo, potencijalne vrijedne nagrade, odlična prilika da razmijenite ideje, upoznate se sa vrsnim stručnjacima iz različitih oblasti, njihovim radovima i iskustvima, ali i sa budućim poslodavcima. Svi studenti elektrotehničkih i srodnih fakulteta mogu poslati svoje radove iz oblasti automatike, elektronike, energetike, telekomunikacija i informacionih tehnologija. Svi radovi moraju biti napisani u IEEE formatu. Vrlo bitno je da rad bude gramatički i pravopisno korektan i pregledan, a za primjer možete vidjeti pobjednički rad.';
  }
  ngOnInit() {
    this.godineSifija.push('About');
    this.godineSifijaSadrzaj.push(this.aboutSadrzaj);
    this.show=false;
    this.ucesnici1=new Array<String>();
    this.ucesnici2=new Array<String>();
    this.ucesnici3=new Array<String>();
    this.sifi.push(new Sifi('','','','About', this.aboutSadrzaj,this.ucesnici1, this.ucesnici2, this.ucesnici3));
    this._eventService.dajsifi().subscribe(
      data=>{
        for(let i=0;i<data.array.length;i++){
          this.ucesnici1=new Array<String>();
          this.ucesnici2=new Array<String>();
          this.ucesnici3=new Array<String>();
          this.naziv1="";
          this.naziv2="";
          this.naziv3="";
          this.year="";
          this.text="";
          if(data.array[i].eventType!=null && data.array[i].eventType.eventType==this.eventType) {
            this.pomocniID=data.array[i]._id;
            this._eventService.dajEventId(this.pomocniID).subscribe(
              data=>{
                this.year=data.year;
                this.godineSifija.push(this.year);
                this.text=data.longText;
                this.godineSifijaSadrzaj.push(this.text);

                if(data.rankings.firstPlace!=null && data.hasOwnProperty('rankings') && data.rankings.hasOwnProperty('firstPlace') &&data.rankings.firstPlace.hasOwnProperty('NazivRada1'))
                this.naziv1=data.rankings.firstPlace.NazivRada1;
                else this.naziv1="";

                if(data.rankings.secondPlace!=null && data.hasOwnProperty('rankings') && data.rankings.hasOwnProperty('secondPlace') &&data.rankings.secondPlace.hasOwnProperty('NazivRada2'))
                this.naziv2=data.rankings.secondPlace.NazivRada2;
                else this.naziv2="";

                if(data.rankings.thirdPlace!=null && data.hasOwnProperty('rankings') && data.rankings.hasOwnProperty('thirdPlace') &&data.rankings.thirdPlace.hasOwnProperty('NazivRada3'))
                this.naziv3=data.rankings.thirdPlace.NazivRada3;
                else this.naziv3="";
                //this.rad1=data.rankings.firstPlace.Rad1;

                if(data.rankings.firstPlace!=null && data.hasOwnProperty('rankings') && data.rankings.hasOwnProperty('firstPlace') && data.rankings.firstPlace.hasOwnProperty('Ucesnici1')) {
                this.ucesnici1=new Array<String>();
                for(let i=0; i<data.rankings.firstPlace.Ucesnici1.length; i++) {
                  if(data.rankings.firstPlace.Ucesnici1.name!="") {
                    this.ucesnici1.push(data.rankings.firstPlace.Ucesnici1[i].name);
                }
              }
            }
            else this.ucesnici1.push(this.test);


          if(data.rankings.secondPlace!=null && data.hasOwnProperty('rankings') && data.rankings.hasOwnProperty('secondPlace') && data.rankings.secondPlace.hasOwnProperty('Ucesnici2')) {
          this.ucesnici2=new Array<String>();
          for(let i=0; i<data.rankings.secondPlace.Ucesnici2.length; i++) {
            if(data.rankings.secondPlace.Ucesnici2.name!="") {
              this.ucesnici2.push(data.rankings.secondPlace.Ucesnici2[i].name);
          }
        }
        }
        else this.ucesnici2.push(this.test);

        if(data.rankings.thirdPlace!=null && data.hasOwnProperty('rankings') && data.rankings.hasOwnProperty('thirdPlace') && data.rankings.thirdPlace.hasOwnProperty('Ucesnici3')) {
        this.ucesnici3=new Array<String>();
        for(let i=0; i<data.rankings.thirdPlace.Ucesnici3.length; i++) {
          if(data.rankings.thirdPlace.Ucesnici3.name!="") {
            this.ucesnici3.push(data.rankings.thirdPlace.Ucesnici3[i].name);
        }
        }
        }
        else this.ucesnici3.push(this.test);

               this.pomocniSifi=new Sifi(this.naziv1, this.naziv2, this.naziv3, this.year, this.text, this.ucesnici1, this.ucesnici2, this.ucesnici3);
               this.sifi.push(this.pomocniSifi);
              }
            );
          }

          }
      }
    );
    this.godina=this.godineSifija[0];
    this.sadrzaj=this.godineSifijaSadrzaj[0];
  }

  f(godina:String):void{
    this.brojac=0;
    if(godina=='About') this.show=false;
    else this.show=true;
    for (let i of this.godineSifija) {
      this.brojac++;
      if(i==godina)
      {
          this.godina=i;
          break;
        }
    }

this.sadrzaj=this.godineSifijaSadrzaj[this.brojac-1];
this.naziv1=this.sifi[this.brojac-1].naziv1;
this.naziv2=this.sifi[this.brojac-1].naziv2;
this.naziv3=this.sifi[this.brojac-1].naziv3;
this.ucesnici1=this.sifi[this.brojac-1].ucesnici1;
this.ucesnici2=this.sifi[this.brojac-1].ucesnici2;
this.ucesnici3=this.sifi[this.brojac-1].ucesnici3;
      }

}
