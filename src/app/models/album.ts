export class Album {
    naziv: String;
    backgroundSlika: String;
    slike: Array<String>;
    brojSlika: number;
    constructor(naziv: String, backgroundSlika: String, slike: Array<String>, brojSlika: number) { 
        this.naziv=naziv;
        this.backgroundSlika=backgroundSlika;
        this.slike=slike;
        this.brojSlika=brojSlika;
    } 
    }
    