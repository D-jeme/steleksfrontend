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
    this.godineElektrijade = ['About','2012','2013','2014','2015','2016','2017'];
    this.godineElektrijadeSadrzaj= ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus dui, sollicitudin vulputate vestibulum in, sodales et mauris. Suspendisse rutrum urna finibus, efficitur velit in, hendrerit dui. Aenean faucibus est a ante molestie porta. Donec hendrerit eleifend ex, quis porta velit molestie at. Donec velit leo, consequat eu mi in, rhoncus placerat lectus. Etiam molestie, est in pharetra lacinia, purus nibh condimentum nunc, a pharetra sem nulla vulputate quam. Nulla ut justo quis tellus cursus ullamcorper in ut ligula. Pellentesque at facilisis nisi, sit amet pulvinar leo. Vivamus et lectus lacus. Phasellus in pulvinar mauris, eu blandit nisl. Nunc volutpat risus et mi gravida, vel cursus ligula interdum. Sed metus nibh, gravida vel imperdiet ut, fermentum ut mi. Aliquam dictum sed nulla et commodo. Fusce in quam a dolor hendrerit placerat nec vitae augue. Sed nec convallis mi, eu maximus sapien.Phasellus maximus dolor a lectus cursus faucibus. Suspendisse viverra consectetur erat id convallis. Nullam mattis mauris eget porttitor suscipit. In non nisi tortor. Vestibulum ut lacinia eros, at convallis sapien. Donec bibendum neque massa, eget pulvinar orci molestie a. In ac dictum felis. Donec pretium velit a urna eleifend eleifend. Nam facilisis turpis tortor. Integer hendrerit sodales sem, vitae posuere est sodales ut. Curabitur iaculis enim a dictum condimentum. Sed aliquam sapien eleifend rhoncus tristique. Aliquam tempus, ex nec molestie lacinia, nibh lorem bibendum odio, vel imperdiet risus neque quis tellus. Vivamus convallis nisi in nunc tincidunt, ut dictum mi facilisis.Nam commodo nunc ac risus pulvinar vestibulum. Donec vel imperdiet nunc, in scelerisque velit. Phasellus sodales arcu a odio tristique eleifend. Curabitur pulvinar porta sem in tristique. Nullam molestie vehicula neque. Vestibulum urna lorem, consectetur euismod mattis non, luctus rhoncus orci. Morbi finibus augue et elit aliquam scelerisque sed lobortis tortor. Nullam viverra leo vitae laoreet eleifend. Fusce euismod, eros vel luctus viverra, orci libero porttitor sapien, nec auctor magna mi at turpis.Aenean posuere tortor urna, non ultricies est euismod ut. Nulla vitae venenatis nisl. Nam sed egestas dui. Morbi non justo ut urna maximus euismod vel vel dui. Suspendisse congue tincidunt ex vel aliquam. Sed convallis elit lorem, sit amet viverra erat viverra a. Aliquam porttitor quis nibh eget consequat. Aliquam erat volutpat. Aliquam erat volutpat. Mauris aliquam, dolor sit amet ultricies fringilla, arcu tortor dapibus enim, at pharetra nisl leo ac neque. Duis pulvinar, tortor vitae euismod mollis, risus mi mattis tortor, efficitur pharetra eros diam et tellus. Vivamus interdum lorem fermentum mauris efficitur, sit amet auctor est ornare. Curabitur felis est, eleifend a lobortis vitae, lacinia in lacus. Donec ac dui sed urna pretium lacinia.Aenean eu lacinia sem. Donec aliquam turpis ac neque posuere pellentesque. Nullam commodo ante nisl, eu interdum erat eleifend sit amet. Praesent gravida varius nibh eu ornare. Nunc at hendrerit justo, vel bibendum elit. Vivamus eu elit risus. Nullam maximus, sem a viverra fermentum, felis elit consequat arcu, a condimentum erat nisl vitae nibh. Phasellus egestas, nibh vel fringilla mollis, metus turpis suscipit lectus, ut placerat urna tortor in metus. Proin feugiat vel urna sit amet volutpat. Donec blandit interdum consequat. Phasellus facilisis finibus ligula et mattis. Praesent vel metus quis urna mollis bibendum non ut elit. Donec semper ut enim non suscipit. Nam aliquam tempus lacus a molestie.', 'Elektrijada 2012', 'Elektrijada 2013','Elektrijada 2014', 'Elektrijada 2015', 'Elektrijada 2016', 'Elektrijada 2017'];
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
