export class Album {
    id:String;
    naziv: String;
    backgroundSlika: String;
    slike: Array<String>;
    brojSlika: number;
    constructor(id: String, naziv: String, slike: Array<String>, brojSlika: number) {
        this.naziv=naziv;
        this.id=id;
        this.slike=slike;
        this.brojSlika=brojSlika;
    }
    }
