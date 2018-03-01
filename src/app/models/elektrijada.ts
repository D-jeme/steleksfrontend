import { Medalje } from '../models/medalje';
import { Sponzor } from '../models/sponzori';

export class Elektrijada {

naziv: String;

godina: String;

sadrzaj: String;

plasman: Medalje;

sponzori: Array<Sponzor>;

constructor(naziv: String, godina: String,sadrzaj: String,plasman: Medalje,sponzori: Array<Sponzor>) {
  this.naziv=naziv;
  this.godina=godina;
  this.sadrzaj=sadrzaj;
  this.plasman=plasman;
  this.sponzori=sponzori;

}
}
