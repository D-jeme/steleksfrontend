export class Medalje {

plasmani:Array<String>;
naziviradova: Array<String>;
fakulteti:Array<String>;
ucesnici:Array<Array<String>>;
radovi: Array<File>;
constructor(plasmani: Array<String>, naziviradova: Array<String>,fakulteti:Array<String>,ucesnici:Array<Array<String>>,radovi: Array<File>) {
  this.plasmani=plasmani;
  this.naziviradova=naziviradova;
  this.fakulteti=fakulteti;
  this.ucesnici=ucesnici;
  this.radovi=radovi;
}
}
