import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/event';
import  {EventService} from '../../services/event.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css'],
    providers: [EventService]
})
export class NewspageComponent implements OnInit {
sadrzaj: Array<string>
events: Array<Event>;
str: Array<string>

  constructor(private _eventService: EventService, private router: Router) {
   this.str=["/event","/event2","/event3","/event4"];
}

  ngOnInit() {

     this.events= [new Event("","","","",""), new Event("","","","",""), new Event("","","","",""), new Event("","","","","")];
      this._eventService.prijava().subscribe(
        data =>{


          for(let i=0;i<data.array.length;i++)
          {

          //  this.events.push(new Event(data.array[i].title,data.array[i].imgUrl,data.array[i].shortText,""));

          }

          this.events[0].slika="http://elektrijada.net/wp-content/uploads/2016/03/12799056_588726494624596_3241526187894899946_n.png";
          this.events[1].slika="http://steleks.ba/wp-content/uploads/2016/12/plakat-300x300.png";
          this.events[2].slika="http://steleks.ba/wp-content/uploads/2016/10/^03BB5D90A758FCDF86DDE37616CB4A338B9557657E40A11357^pimgpsh_fullsize_distr-300x300.png";
          this.events[3].slika="http://steleks.ba/wp-content/uploads/2016/09/vijest21-300x300.jpg";

          this.events[0].naziv="Elektrijada Rimini";
          this.events[1].naziv="Steleksijada";
          this.events[2].naziv="STELEKS League of Robots";
          this.events[3].naziv="STELEKS Kviz";

          this.events[0].kratkiTekst="56. međunarodni susret studenata elektrotehnike održati će se u Italiji, u gradu Rimini od 12. do 17. maja 2016.";
          this.events[1].kratkiTekst="Pozivamo sve studente, asistetne i profesore Elektrotehničkog fakulteta Univerziteta u Sarajevu na JAVNU RASPRAVU.";
          this.events[2].kratkiTekst="STELEKS po prvi put organizuje League of Robots i poziva sve zainteresirane da se prijave i odlično zabave!";
          this.events[3].kratkiTekst="STELEKS u toku akademske 2015./16. godine u cilju spajanja nauke, zabave i nagrada organizuje STELEKS kvizove.";

          this.events[0].link="/event2";
            this.events[1].link="/event3";
              this.events[2].link="/event4";
                this.events[3].link="/event5";
        }
      );
  }

}
