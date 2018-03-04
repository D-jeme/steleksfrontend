webpackJsonp([1,5],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sponzor; });
var Sponzor = (function () {
    function Sponzor(slika, naziv) {
        this.slika = slika;
        this.naziv = naziv;
    }
    return Sponzor;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/sponzori.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutpageComponent = (function () {
    function AboutpageComponent() {
    }
    AboutpageComponent.prototype.ngOnInit = function () {
    };
    AboutpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-aboutpage',
            template: __webpack_require__(768),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutpageComponent);
    return AboutpageComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/aboutpage.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_prijava_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(_prijavaService, router) {
        this._prijavaService = _prijavaService;
        this.router = router;
        this.Username = "";
        this.Password = "";
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.print = function () {
        this.router.navigateByUrl('/adminopcije');
        console.log(this.Username + ":" + this.Password);
        this._prijavaService.prijava(this.Username, this.Password);
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__(769),
            styles: [__webpack_require__(728)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_prijava_service__["a" /* PrijavaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_prijava_service__["a" /* PrijavaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_prijava_service__["a" /* PrijavaService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/admin.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOpcijeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminOpcijeComponent = (function () {
    function AdminOpcijeComponent() {
        this.ime = '';
        this.prezime = '';
        this.messageUspjesno = '';
        this.errorMessageIme = '';
        this.errorMessagePrezime = '';
        this.br = 0;
        this.showSelected = false;
        this.moderatori = ['Mujak Amila', 'Drugi moderator', 'Treci moderator', 'Cetvrti moderator', 'Peti moderator'];
    }
    AdminOpcijeComponent.prototype.ngOnInit = function () {
    };
    AdminOpcijeComponent.prototype.redniBroj = function (i) {
        this.br = 0;
        for (var n in this.moderatori) {
            this.br++;
            if (this.moderatori[n] == i) {
                return this.br;
            }
        }
        return this.br;
    };
    AdminOpcijeComponent.prototype.obrisiModeratora = function (n) {
        this.moderatori.splice(n, 1);
        this.br--;
    };
    AdminOpcijeComponent.prototype.ShowButton = function () {
        this.showSelected = true;
    };
    AdminOpcijeComponent.prototype.HideButton = function () {
        this.messageUspjesno = '';
        this.errorMessageIme = '';
        this.errorMessagePrezime = '';
        this.ime = '';
        this.prezime = '';
        this.showSelected = false;
    };
    AdminOpcijeComponent.prototype.dodajModeratora = function () {
        if (this.ime == '') {
            this.errorMessagePrezime = '';
            this.errorMessageIme = 'Molimo Vas da unesete ime!';
        }
        else if (this.prezime == '') {
            this.errorMessageIme = '';
            this.errorMessagePrezime = 'Molimo Vas da unesete prezime!';
        }
        else {
            this.errorMessageIme = '';
            this.errorMessagePrezime = '';
            this.br++;
            this.moderatori.push(this.ime + ' ' + this.prezime);
            this.messageUspjesno = 'Uspjesno ste dodali novog moderatora.';
        }
    };
    AdminOpcijeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-adminopcije',
            template: __webpack_require__(770),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminOpcijeComponent);
    return AdminOpcijeComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/adminopcije.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_album__ = __webpack_require__(558);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumipageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumipageComponent = (function () {
    function AlbumipageComponent() {
        this.albumi = [new __WEBPACK_IMPORTED_MODULE_1__models_album__["a" /* Album */]("Elektrijada 2016", "assets/images/elektrijada2016.jpg", ["URL"], 100),
            new __WEBPACK_IMPORTED_MODULE_1__models_album__["a" /* Album */]("Dan otvorenih vrata ETF-a", "assets/images/dan_otvorenih_vrata.jpg", ["URL"], 100),
            new __WEBPACK_IMPORTED_MODULE_1__models_album__["a" /* Album */]("Arduino radionica", "assets/images/arduino_radionica.jpg", ["URL"], 100),
            new __WEBPACK_IMPORTED_MODULE_1__models_album__["a" /* Album */]("Stručna ekskurzija u Tuzlu", "assets/images/strucna_ekskurzija.jpg", ["URL"], 100)
        ];
    }
    AlbumipageComponent.prototype.ngOnInit = function () {
    };
    AlbumipageComponent.prototype.getStyle = function () {
        if (this.showStyle) {
            return "yellow";
        }
        else {
            return "";
        }
    };
    AlbumipageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-albumipage',
            template: __webpack_require__(771),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumipageComponent);
    return AlbumipageComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/albumipage.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElektrijadapageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElektrijadapageComponent = (function () {
    function ElektrijadapageComponent() {
        this.brojac = 0;
        this.godina = "";
        this.pomocni = "Lorem ipsum dolor sit amet, detracto platonem te sed. Dicam utamur mandamus quo no, vim eu consul dissentias. Te pri latine temporibus. Libris iuvaret epicuri per ut, ad vel libris erroribus. Ut veritus delectus eleifend eam. Cu unum reprehendunt delicatissimi eam, eum dolor epicurei contentiones te, ne vel porro perfecto. Ex sed epicuri convenire, mei ne eleifend delicatissimi. Tantas electram comprehensam no qui, et primis complectitur mea, cum id case duis mediocrem. Consulatu theophrastus in eam, mea ad omnes definiebas. Quo posse latine te, mel dictas similique temporibus an. Nam possit reformidans eu. Ad nostro nusquam per. Eu gubergren maiestatis his. Purto lucilius pertinacia ut per, possit labitur vis ei. Essent sanctus deleniti mea ex, has ocurreret intellegam at. Nec agam oportere posidonium et. Ne omnium vocent sapientem eos, cum erat meis causae an. Quo dico tollit cu. Ex altera utroque invidunt vix, periculis principes ad est. Eirmod reprimique reprehendunt cu ius, mei mollis ancillae no, nam ad tantas reprimique. Ea qui mandamus interesset consequuntur, ne choro munere integre pro. Suas option in eos, id nam aperiam dolorum inciderint. Usu vitae sapientem gubergren ex.";
        this.godineElektrijade = ['About', '2012', '2013', '2014', '2015', '2016', '2017'];
        this.godineElektrijadeSadrzaj = ['Međunarodni susreti studenata elektrotehnike, poznatiji kao Elektrijada, tradicionalno se održavaju skoro pola stoljeća na prostorima bivše Jugoslavije i predstavljaju najveći godišnji skup studenata elektrotehnike u jugoistočnoj Evropi, a i šire. Nakon perioda kriznih godina i ratnih dešavanja, Elektrijada kao simbol jedinstva globalne akademske zajednice i studentskog duha, ipak opstaje i svojim djelovanjem doprinosi cilju čvršćeg povezivanja, saradnje i razmjene studenata elektrotehnike. Elektrijada kroz svoje programe širi i populariše sve sfere aktivnog studentskog života – naučni rad, takmičenja u znanju, sportska takmičenja, edukativne programe, zabavu... Ali ono što je najbitnije napomenuti jeste činjenica da Elektrijada, kao veliki susret studenata ovog tipa, predstavlja multietnički i multinacionalni projekat vrijedan pažnje. Petodnevni program Elektrijade se održava na atraktivnim turističkim destinacijama, gdje se uz dobro organizovan program, lijepu prirodu i dobro poznatu energiju studenata, navedene aktivnosti sprovode u atmosferi zdrave konkurencije i toplog prijateljstva. Putem Elektrijade studenti stupaju u kontakt sa privredom i firmama iz struke, uz čiju pomoć dolaze do sredstava za organizaciju skupa i na taj način ostvaruju prve korake poslovne saradnje korisne za budućnost. Posljednjih godina Elektrijada broji preko 2000 učesnika sa 30 fakulteta iz čitave Evrope. Pored organizatora, studenata iz Srbije, redovni učesnici, suorganizatori i dragi gosti Elektrijade su i studenti iz Bosne i Hercegovine, Srbije, Crne Gore, Slovenije, Makedonije i Hrvatske, Bugarske, Italije, Švajcarske, Grčke, Njemačke, Rumunije, Holandije i drugih evropskih zemalja. Formalni dio ove manifestacije čine takmičenje u nauci i sportu, gdje se svi fakulteti bore za pojedinačne uspjehe, kao i za titulu generalnog pobjednika Elektrijade.', this.pomocni, this.pomocni, this.pomocni, this.pomocni, this.pomocni, this.pomocni];
        this.naslovi = ['Šta je Elektrijada?', 'Elektrijada 2012', 'Elektrijada 2013',
            'Elektrijada 2014', 'Elektrijada 2014', 'Elektrijada 2015',
            'Elektrijada 2016', 'Elektrijada 2017'];
        this.sadrzaj = this.godineElektrijadeSadrzaj[0];
        this.naslov = this.naslovi[0];
    }
    ElektrijadapageComponent.prototype.ngOnInit = function () {
    };
    ElektrijadapageComponent.prototype.f = function (godina) {
        this.brojac = 0;
        console.log("Pozvana");
        for (var _i = 0, _a = this.godineElektrijade; _i < _a.length; _i++) {
            var i = _a[_i];
            this.brojac++;
            //  console.log(i);
            if (i == godina) {
                //this.trenutniTab=i;
                this.godina = i;
                break;
            }
        }
        this.sadrzaj = this.godineElektrijadeSadrzaj[this.brojac - 1];
        this.naslov = this.naslovi[this.brojac - 1];
    };
    ElektrijadapageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-elektrijadapage',
            template: __webpack_require__(772),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [])
    ], ElektrijadapageComponent);
    return ElektrijadapageComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/elektrijadapage.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventpreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventpreviewComponent = (function () {
    function EventpreviewComponent() {
    }
    EventpreviewComponent.prototype.ngOnInit = function () {
    };
    EventpreviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-eventpage',
            template: __webpack_require__(774),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [])
    ], EventpreviewComponent);
    return EventpreviewComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/eventpreview.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Eventpreview2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Eventpreview2Component = (function () {
    function Eventpreview2Component() {
    }
    Eventpreview2Component.prototype.ngOnInit = function () {
    };
    Eventpreview2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-eventpage',
            template: __webpack_require__(775),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [])
    ], Eventpreview2Component);
    return Eventpreview2Component;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/eventpreview2.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Eventpreview3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Eventpreview3Component = (function () {
    function Eventpreview3Component() {
    }
    Eventpreview3Component.prototype.ngOnInit = function () {
    };
    Eventpreview3Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-eventpage',
            template: __webpack_require__(776),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [])
    ], Eventpreview3Component);
    return Eventpreview3Component;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/eventpreview3.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Eventpreview4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Eventpreview4Component = (function () {
    function Eventpreview4Component() {
    }
    Eventpreview4Component.prototype.ngOnInit = function () {
    };
    Eventpreview4Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-eventpage',
            template: __webpack_require__(777),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [])
    ], Eventpreview4Component);
    return Eventpreview4Component;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/eventpreview4.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormaAfterEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormaAfterEventComponent = (function () {
    function FormaAfterEventComponent() {
    }
    FormaAfterEventComponent.prototype.ngOnInit = function () {
    };
    FormaAfterEventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-formaafterevent',
            template: __webpack_require__(779),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [])
    ], FormaAfterEventComponent);
    return FormaAfterEventComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/formaafterevent.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormaBeforeEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormaBeforeEventComponent = (function () {
    function FormaBeforeEventComponent() {
    }
    FormaBeforeEventComponent.prototype.ngOnInit = function () {
    };
    FormaBeforeEventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-formabeforeevent',
            template: __webpack_require__(780),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [])
    ], FormaBeforeEventComponent);
    return FormaBeforeEventComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/formabeforeevent.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_elektrijada__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_medalje__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_elektrijada_service__ = __webpack_require__(563);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormaElektrijadaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormaElektrijadaComponent = (function () {
    function FormaElektrijadaComponent(_elektrijadaService) {
        this._elektrijadaService = _elektrijadaService;
        this.naziv = '';
        this.godina = '';
        this.sadrzaj = '';
        this.faculty1 = '';
        this.faculty2 = '';
        this.faculty3 = '';
        this.fakulteti = new Array();
    }
    FormaElektrijadaComponent.prototype.ngOnInit = function () {
    };
    FormaElektrijadaComponent.prototype.print = function () {
        this.fakulteti = [this.faculty1, this.faculty2, this.faculty3];
        this.medalje = new __WEBPACK_IMPORTED_MODULE_2__models_medalje__["a" /* Medalje */](null, null, this.fakulteti, null, null);
        this.elektrijada = new __WEBPACK_IMPORTED_MODULE_1__models_elektrijada__["a" /* Elektrijada */](this.naziv, this.godina, this.sadrzaj, this.medalje, null);
        this._elektrijadaService.prijava(this.elektrijada);
    };
    FormaElektrijadaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-formaelektrijada',
            template: __webpack_require__(781),
            styles: [__webpack_require__(740)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_elektrijada_service__["a" /* ElektrijadaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_elektrijada_service__["a" /* ElektrijadaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_elektrijada_service__["a" /* ElektrijadaService */]) === 'function' && _a) || Object])
    ], FormaElektrijadaComponent);
    return FormaElektrijadaComponent;
    var _a;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/formaelektrijada.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormaGalerijaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormaGalerijaComponent = (function () {
    function FormaGalerijaComponent() {
    }
    FormaGalerijaComponent.prototype.ngOnInit = function () {
    };
    FormaGalerijaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-formagalerija',
            template: __webpack_require__(782),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [])
    ], FormaGalerijaComponent);
    return FormaGalerijaComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/formagalerija.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormaSifiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormaSifiComponent = (function () {
    function FormaSifiComponent() {
        this.fieldArray1 = [];
        this.newAttribute1 = {};
        this.fieldArray2 = [];
        this.newAttribute2 = {};
        this.fieldArray3 = [];
        this.newAttribute3 = {};
    }
    FormaSifiComponent.prototype.addFieldValue1 = function () {
        console.log("hbhygbbuh");
        console.log(this.newAttribute1);
        console.log(this.fieldArray1);
        this.fieldArray1.push(this.newAttribute1);
        this.newAttribute1 = {};
    };
    FormaSifiComponent.prototype.deleteFieldValue1 = function (index) {
        this.fieldArray1.splice(index, 1);
    };
    FormaSifiComponent.prototype.addFieldValue2 = function () {
        this.fieldArray2.push(this.newAttribute2);
        this.newAttribute2 = {};
    };
    FormaSifiComponent.prototype.deleteFieldValue2 = function (index) {
        this.fieldArray2.splice(index, 1);
    };
    FormaSifiComponent.prototype.addFieldValue3 = function () {
        this.fieldArray3.push(this.newAttribute3);
        this.newAttribute3 = {};
    };
    FormaSifiComponent.prototype.deleteFieldValue3 = function (index) {
        this.fieldArray3.splice(index, 1);
    };
    FormaSifiComponent.prototype.ngOnInit = function () {
    };
    FormaSifiComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-formasifi',
            template: __webpack_require__(783),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [])
    ], FormaSifiComponent);
    return FormaSifiComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/formasifi.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sponzori_service__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_sponzori__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormaSponzoriComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormaSponzoriComponent = (function () {
    function FormaSponzoriComponent(_sponzoriService) {
        this._sponzoriService = _sponzoriService;
        this.sponzor = new __WEBPACK_IMPORTED_MODULE_2__models_sponzori__["a" /* Sponzor */]("", "");
    }
    FormaSponzoriComponent.prototype.ngOnInit = function () {
    };
    FormaSponzoriComponent.prototype.print = function () {
        console.log(this.sponzor);
        this._sponzoriService.prijava(this.sponzor);
    };
    FormaSponzoriComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-formasponzori',
            template: __webpack_require__(784),
            styles: [__webpack_require__(743)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_sponzori_service__["a" /* SponzoriService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sponzori_service__["a" /* SponzoriService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_sponzori_service__["a" /* SponzoriService */]) === 'function' && _a) || Object])
    ], FormaSponzoriComponent);
    return FormaSponzoriComponent;
    var _a;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/formasponzori.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = (function () {
    function GalleryComponent() {
        this.images = [
            { "url": "http://steleks.ba/wp-content/gallery/dan-otvorenih-vrata-etf/20160521_120007.jpg",
                "title": "Naslov1",
                "caption": "Elektrijada 2015" },
            { "url": "http://steleks.ba/wp-content/gallery/dan-otvorenih-vrata-etf/20160521_120714.jpg",
                "title": "Naslov2",
                "caption": "Opis2" },
            { "url": "http://steleks.ba/wp-content/gallery/dan-otvorenih-vrata-etf/20160521_122759.jpg",
                "title": "Naslov3",
                "caption": "Opis3" },
            { "url": "http://steleks.ba/wp-content/gallery/dan-otvorenih-vrata-etf/20160521_120757.jpg",
                "title": "Naslov4",
                "caption": "Opis4" },
            { "url": "http://steleks.ba/wp-content/gallery/elektrijada-2016/DSC_0152_Easy-Resize.com_.jpg",
                "title": "Naslov5",
                "caption": "Opis5" },
            { "url": "http://steleks.ba/wp-content/gallery/dan-otvorenih-vrata-etf/20160521_122704.jpg",
                "title": "Naslov1",
                "caption": "Opis1" },
            { "url": "http://steleks.ba/wp-content/gallery/dan-otvorenih-vrata-etf/20160521_120804.jpg",
                "title": "Naslov2",
                "caption": "Opis2" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_142010.jpg",
                "title": "Naslov3",
                "caption": "Opis3" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_142016.jpg",
                "title": "Naslov4",
                "caption": "Opis4" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_151707.jpg",
                "title": "Naslov5",
                "caption": "Opis5" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_152734.jpg",
                "title": "Naslov2",
                "caption": "Opis2" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_142828.jpg",
                "title": "Naslov3",
                "caption": "Opis3" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_141928.jpg",
                "title": "Naslov4",
                "caption": "Opis4" },
            { "url": "http://steleks.ba/wp-content/gallery/arduino-radionica/12742735_10208778103874439_1589255451811377693_n.jpg",
                "title": "Naslov5",
                "caption": "Opis5" },
            { "url": "http://steleks.ba/wp-content/gallery/arduino-radionica/13246029_10209584751920136_784504567_n.jpg",
                "title": "Naslov1",
                "caption": "Opis1" },
            { "url": "http://steleks.ba/wp-content/gallery/arduino-radionica/13250396_10209584748440049_1473511931_n.jpg",
                "title": "Naslov4",
                "caption": "Opis4" },
            { "url": "http://steleks.ba/wp-content/gallery/arduino-radionica/13250403_10209584749240069_691699865_n.jpg",
                "title": "Naslov5",
                "caption": "Opis5" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_142010.jpg",
                "title": "Naslov1",
                "caption": "Opis1" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_142016.jpg",
                "title": "Naslov2",
                "caption": "Opis2" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_143154.jpg",
                "title": "Naslov3",
                "caption": "Opis3" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_151707.jpg",
                "title": "Naslov4",
                "caption": "Opis4" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_152734.jpg",
                "title": "Naslov1",
                "caption": "Opis1" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_142828.jpg",
                "title": "Naslov2",
                "caption": "Opis2" },
            { "url": "http://steleks.ba/wp-content/gallery/promocija-elektrijade/20160527_141928.jpg",
                "title": "Naslov3",
                "caption": "Opis3" },
            { "url": "http://steleks.ba/wp-content/gallery/elektrijada-2016/DSC_0055_Easy-Resize.com_.jpg",
                "title": "Naslov4",
                "caption": "Opis4" },
            { "url": "http://steleks.ba/wp-content/gallery/elektrijada-2016/DSC_0152_Easy-Resize.com_.jpg",
                "title": "Naslov5",
                "caption": "Opis5" },
        ];
    }
    GalleryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'my-gallery',
            template: __webpack_require__(785),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [])
    ], GalleryComponent);
    return GalleryComponent;
}());
/*
  STARI HTML
  <ul  class="tab">
        <li class="dropdown">
          <div>
            <button class="dropbtn">Sifi</button>
            <div class="dropdown-content">
              <li *ngFor="let i of godineSifi;">
                <div (click)="f(i)">{{i}}</div>
              </li>
            </div>
          </div>
        </li>

        <li class="dropdown">
            <div>
              <button class="dropbtn">Elektrijada</button>
              <div class="dropdown-content">
                <li *ngFor="let i of godineElektrijade;">
                  <div (click)="f(i)">{{i}}</div>
                </li>
              </div>
            </div>
          </li>

        <li class="dropdown">
            <div>
              <button class="dropbtn">Liga robota</button>
              <div class="dropdown-content">
                <li *ngFor="let i of godineLigaRobota;">
                  <div (click)="f(i)">{{i}}</div>
                </li>
              </div>
            </div>
          </li>

          <li class="dropdown">
              <div>
                <button class="dropbtn">Steleksijada</button>
                <div class="dropdown-content">
                  <li *ngFor="let i of godineSteleksijada;">
                    <div (click)="f(i)">{{i}}</div>
                  </li>
                </div>
              </div>
            </li>

            <li class="dropdown">
                <div>
                  <button class="dropbtn">Kviz</button>
                  <div class="dropdown-content">
                    <li *ngFor="let i of godineKviz;">
                      <div (click)="f(i)">{{i}}</div>
                    </li>
                  </div>
                </div>
              </li>

              <li class="dropdown">
                  <div>
                    <button class="dropbtn">Izleti</button>
                    <div class="dropdown-content">
                      <li *ngFor="let i of godineIzleti;">
                        <div (click)="f(i)">{{i}}</div>
                      </li>
                    </div>
                  </div>
                </li>

                <li class="dropdown">
                    <div>
                      <button class="dropbtn">Ostalo</button>
                      <div class="dropdown-content">
                        <li *ngFor="let i of godineOstalo;">
                          <div (click)="f(i)">{{i}}</div>
                        </li>
                      </div>
                    </div>
                  </li>
    </ul>
    <div *ngIf="i==trenutniTab">{{sadrzaj}} </div>
<gallerypage [datasource]=images></gallerypage>
*/
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/gallery.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearningpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearningpageComponent = (function () {
    function LearningpageComponent() {
    }
    LearningpageComponent.prototype.ngOnInit = function () {
    };
    LearningpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-learningpage',
            template: __webpack_require__(787),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [])
    ], LearningpageComponent);
    return LearningpageComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/learningpage.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainpageComponent = (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-mainpage',
            template: __webpack_require__(788),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainpageComponent);
    return MainpageComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/mainpage.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_moderatorprijava_service__ = __webpack_require__(565);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeratorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModeratorComponent = (function () {
    function ModeratorComponent(_moderatorPrijavaService) {
        this._moderatorPrijavaService = _moderatorPrijavaService;
        this.Username = "";
        this.Password = "";
    }
    ModeratorComponent.prototype.ngOnInit = function () {
    };
    ModeratorComponent.prototype.print = function () {
        console.log(this.Username + ":" + this.Password);
        this._moderatorPrijavaService.prijava(this.Username, this.Password);
    };
    ModeratorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-moderator',
            template: __webpack_require__(790),
            styles: [__webpack_require__(749)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_moderatorprijava_service__["a" /* ModeratorPrijavaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_moderatorprijava_service__["a" /* ModeratorPrijavaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_moderatorprijava_service__["a" /* ModeratorPrijavaService */]) === 'function' && _a) || Object])
    ], ModeratorComponent);
    return ModeratorComponent;
    var _a;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/moderator.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeratorOpcijeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModeratorOpcijeComponent = (function () {
    function ModeratorOpcijeComponent() {
    }
    ModeratorOpcijeComponent.prototype.ngOnInit = function () {
    };
    ModeratorOpcijeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-moderatoropcije',
            template: __webpack_require__(791),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [])
    ], ModeratorOpcijeComponent);
    return ModeratorOpcijeComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/moderatoropcije.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_event__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewspageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewspageComponent = (function () {
    function NewspageComponent(_eventService, router) {
        this._eventService = _eventService;
        this.router = router;
        this.str = ["/event", "/event2", "/event3", "/event4"];
    }
    NewspageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events = [new __WEBPACK_IMPORTED_MODULE_1__models_event__["a" /* Event */]("", "", "", "", ""), new __WEBPACK_IMPORTED_MODULE_1__models_event__["a" /* Event */]("", "", "", "", ""), new __WEBPACK_IMPORTED_MODULE_1__models_event__["a" /* Event */]("", "", "", "", ""), new __WEBPACK_IMPORTED_MODULE_1__models_event__["a" /* Event */]("", "", "", "", "")];
        this._eventService.prijava().subscribe(function (data) {
            for (var i = 0; i < data.array.length; i++) {
            }
            _this.events[0].slika = "http://elektrijada.net/wp-content/uploads/2016/03/12799056_588726494624596_3241526187894899946_n.png";
            _this.events[1].slika = "http://steleks.ba/wp-content/uploads/2016/12/plakat-300x300.png";
            _this.events[2].slika = "http://steleks.ba/wp-content/uploads/2016/10/^03BB5D90A758FCDF86DDE37616CB4A338B9557657E40A11357^pimgpsh_fullsize_distr-300x300.png";
            _this.events[3].slika = "http://steleks.ba/wp-content/uploads/2016/09/vijest21-300x300.jpg";
            _this.events[0].naziv = "Elektrijada Rimini";
            _this.events[1].naziv = "Steleksijada";
            _this.events[2].naziv = "STELEKS League of Robots";
            _this.events[3].naziv = "STELEKS Kviz";
            _this.events[0].kratkiTekst = "56. međunarodni susret studenata elektrotehnike održati će se u Italiji, u gradu Rimini od 12. do 17. maja 2016.";
            _this.events[1].kratkiTekst = "Pozivamo sve studente, asistente i profesore Elektrotehničkog fakulteta Univerziteta u Sarajevu na Steleksijadu.";
            _this.events[2].kratkiTekst = "STELEKS po prvi put organizuje League of Robots i poziva sve zainteresirane da se prijave i odlično zabave!";
            _this.events[3].kratkiTekst = "STELEKS u toku akademske 2015./16. godine u cilju spajanja nauke, zabave i nagrada organizuje STELEKS kvizove.";
            _this.events[0].link = "/event2";
            _this.events[1].link = "/event3";
            _this.events[2].link = "/event";
            _this.events[3].link = "/event4";
        });
    };
    NewspageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-newspage',
            template: __webpack_require__(793),
            styles: [__webpack_require__(752)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NewspageComponent);
    return NewspageComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/newspage.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_registracijastudent__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_registracija_service__ = __webpack_require__(566);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistracijaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistracijaComponent = (function () {
    function RegistracijaComponent(_registracijaService) {
        this._registracijaService = _registracijaService;
        this.ime = '';
        this.prezime = '';
        this.email = '';
        this.emailFakultet = '';
        this.brojTelefona = '';
        this.brojIndeksa = '';
        this.korisnickoIme = '';
        this.lozinka = '';
        this.lozinka2 = '';
        this.odsjek = '';
        this.godinaStudija = '';
        this.errorMessage = '';
        this.messageUspjesno = '';
        this.registrovani = new Array();
    }
    RegistracijaComponent.prototype.ngOnInit = function () {
    };
    RegistracijaComponent.prototype.print = function () {
        this.errorMessage = '';
        if (this.ime == '' || this.prezime == '' || this.email == '' || this.emailFakultet == '' || this.brojTelefona == '' ||
            this.brojIndeksa == '' || this.korisnickoIme == '' || this.lozinka == '' || this.lozinka2 == '') {
            this.errorMessage = 'Molimo popunite sva polja!';
            this.messageUspjesno = '';
            return;
        }
        else if (this.lozinka != this.lozinka2) {
            this.errorMessage = 'Lozinke se ne podudaraju!';
            this.messageUspjesno = '';
            return;
        }
        console.log("ima li te");
        this.novi = new __WEBPACK_IMPORTED_MODULE_1__models_registracijastudent__["a" /* RegistrovaniClan */](this.ime, this.prezime, this.email, this.emailFakultet, this.brojTelefona, this.brojIndeksa, this.korisnickoIme, this.lozinka, this.odsjek, this.godinaStudija);
        this._registracijaService.prijava(this.novi);
        this.errorMessage = '';
        this.messageUspjesno = 'Uspjesno!';
    };
    RegistracijaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-registracija',
            template: __webpack_require__(794),
            styles: [__webpack_require__(753)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_registracija_service__["a" /* RegistracijaService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_registracija_service__["a" /* RegistracijaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_registracija_service__["a" /* RegistracijaService */]) === 'function' && _a) || Object])
    ], RegistracijaComponent);
    return RegistracijaComponent;
    var _a;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/registracija.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIFIpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SIFIpageComponent = (function () {
    function SIFIpageComponent() {
        this.brojac = 0;
        this.godina = "";
        this.pomocni = "Lorem ipsum dolor sit amet, detracto platonem te sed. Dicam utamur mandamus quo no, vim eu consul dissentias. Te pri latine temporibus. Libris iuvaret epicuri per ut, ad vel libris erroribus. Ut veritus delectus eleifend eam. Cu unum reprehendunt delicatissimi eam, eum dolor epicurei contentiones te, ne vel porro perfecto. Ex sed epicuri convenire, mei ne eleifend delicatissimi. Tantas electram comprehensam no qui, et primis complectitur mea, cum id case duis mediocrem. Consulatu theophrastus in eam, mea ad omnes definiebas. Quo posse latine te, mel dictas similique temporibus an. Nam possit reformidans eu. Ad nostro nusquam per. Eu gubergren maiestatis his. Purto lucilius pertinacia ut per, possit labitur vis ei. Essent sanctus deleniti mea ex, has ocurreret intellegam at. Nec agam oportere posidonium et. Ne omnium vocent sapientem eos, cum erat meis causae an. Quo dico tollit cu. Ex altera utroque invidunt vix, periculis principes ad est. Eirmod reprimique reprehendunt cu ius, mei mollis ancillae no, nam ad tantas reprimique. Ea qui mandamus interesset consequuntur, ne choro munere integre pro. Suas option in eos, id nam aperiam dolorum inciderint. Usu vitae sapientem gubergren ex.";
        this.godineSifija = ['About', '2012', '2013', '2014', '2015', '2016', '2017'];
        this.godineSifijaSadrzaj = ['“STELEKS”, udruženje studenata Elektrotehničkog fakulteta Sarajevo, po drugi put organizuje smotru studentskih radova pod nazivom Sarajevo Innovations Festival (“SIFI”). Festival će se održati 25. i 26. oktobra u prostorijama Elektrotehničkog fakulteta u Sarajevu. “SIFI 2017” je odlična prilika da prezentirate svoje radove, razmijenite ideje, upoznate se sa vrsnim stručnjacima iz različitih oblasti, njihovim radovima i iskustvima, ali i sa budućim poslodavcima. Raznovrstan program manifestacije obuhvata kako edukativne, tako i zabavne sadržaje. Renomirani predavači će održati predavanja o aktuelnim temama iz oblasti elektrotehnike. Ciljevi SIFI-a su povećanje kvaliteta studentskih radova, poticanje inovativnih ideja i ohrabrivanje mladih stručnjaka da svoje ideje plasiraju na tržište. Većini studenata jedina motivacija za izradu studentskih radova su ocjene na predmetima, što po našem mišljenju uzrokuje manjak novih ideja i inovacija, te ne priprema studente da “prodaju” svoje ideje. Svi studenti elektrotehničkih i srodnih fakulteta mogu poslati svoje radove iz oblasti automatike, elektronike, energetike, telekomunikacija i informacionih tehnologija. Ideja ili projekat ne moraju biti dovršeni do kraja, niti perfektno funkcionalni. Važan je njihov potencijal i način predstavljanja. Svi radovi moraju biti napisani u IEEE formatu. Vrlo bitno je da rad bude gramatički i pravopisno korektan i pregledan, a za primjer možete vidjeti prošlogodišnji pobjednički rad.Također na ovoj fotogaleriji možete vidjeti postere radova prošlogodišnjeg SIFI-a. Utiske učesnika možete vidjeti na ovome videu. Upute za prijavu vaših radova možete vidjeti ovdje. Krajnji rok za prijavu i slanje radova je 01. oktobar 2017. Nakon isteka roka prijave, stručni recenzenti će pregledati radove i autori radova koji zadovolje kriterije učešća na festivalu će dobiti mail potvrde o učešću. Prvi dan manifestacije, svaki od učesnika će imati svoj štand, gdje će izložiti svoje radove i na originalan način ih prezentovati posjetiteljima manifestacije. Primjer postera koji će se nalazaiti na štandu možete vidjeti ovdje. Drugi dan slijedi izložba i proglašenje najboljih radova. Svečana ceremonija zatvaranja smotre bit će krunisana proglašenjem tri najbolja rada, kada će autorima biti uručene novčane nagrade u iznosu od 200, 300 i 500 KM.', this.pomocni, this.pomocni, this.pomocni, this.pomocni, this.pomocni, this.pomocni];
        this.naslovi = ['Šta je SIFI?', 'Sarajevo Innovations Festival 2012', 'Sarajevo Innovations Festival 2013',
            'Sarajevo Innovations Festival 2014', 'Sarajevo Innovations Festival 2014', 'Sarajevo Innovations Festival 2015',
            'Sarajevo Innovations Festival 2016', 'Sarajevo Innovations Festival 2017'];
        this.sadrzaj = this.godineSifijaSadrzaj[0];
        this.naslov = this.naslovi[0];
    }
    SIFIpageComponent.prototype.ngOnInit = function () {
    };
    SIFIpageComponent.prototype.f = function (godina) {
        this.brojac = 0;
        console.log("Pozvana");
        for (var _i = 0, _a = this.godineSifija; _i < _a.length; _i++) {
            var i = _a[_i];
            this.brojac++;
            //  console.log(i);
            if (i == godina) {
                //this.trenutniTab=i;
                this.godina = i;
                break;
            }
        }
        this.sadrzaj = this.godineSifijaSadrzaj[this.brojac - 1];
        this.naslov = this.naslovi[this.brojac - 1];
    };
    SIFIpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-sifipage',
            template: __webpack_require__(795),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [])
    ], SIFIpageComponent);
    return SIFIpageComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/sifipage.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SifipreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SifipreviewComponent = (function () {
    function SifipreviewComponent() {
    }
    SifipreviewComponent.prototype.ngOnInit = function () {
    };
    SifipreviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-eventpage',
            template: __webpack_require__(796),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [])
    ], SifipreviewComponent);
    return SifipreviewComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/sifipreview.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_prijava_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuperAdminComponent = (function () {
    function SuperAdminComponent(_prijavaService, router) {
        this._prijavaService = _prijavaService;
        this.router = router;
        this.Username = "";
        this.Password = "";
    }
    SuperAdminComponent.prototype.ngOnInit = function () {
    };
    SuperAdminComponent.prototype.print = function () {
        console.log(this.Username + ":" + this.Password);
        this.router.navigateByUrl('/superadminopcije');
        this._prijavaService.prijava(this.Username, this.Password);
    };
    SuperAdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-superadmin',
            template: __webpack_require__(800),
            styles: [__webpack_require__(759)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_prijava_service__["a" /* PrijavaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_prijava_service__["a" /* PrijavaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_prijava_service__["a" /* PrijavaService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], SuperAdminComponent);
    return SuperAdminComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/superadmin.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperAdminOpcijeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuperAdminOpcijeComponent = (function () {
    function SuperAdminOpcijeComponent() {
        this.ime = '';
        this.prezime = '';
        this.messageUspjesno = '';
        this.errorMessageIme = '';
        this.errorMessagePrezime = '';
        this.br = 0;
        this.showSelected = false;
        this.admini = ['Admin naziv'];
    }
    SuperAdminOpcijeComponent.prototype.ngOnInit = function () {
    };
    SuperAdminOpcijeComponent.prototype.redniBroj = function (i) {
        this.br = 0;
        for (var n in this.admini) {
            this.br++;
            if (this.admini[n] == i) {
                return this.br;
            }
        }
        return this.br;
    };
    SuperAdminOpcijeComponent.prototype.obrisiAdmina = function (n) {
        this.admini.splice(n, 1);
        this.br--;
    };
    SuperAdminOpcijeComponent.prototype.ShowButton = function () {
        this.showSelected = true;
    };
    SuperAdminOpcijeComponent.prototype.HideButton = function () {
        this.messageUspjesno = '';
        this.errorMessageIme = '';
        this.errorMessagePrezime = '';
        this.ime = '';
        this.prezime = '';
        this.showSelected = false;
    };
    SuperAdminOpcijeComponent.prototype.dodajAdmina = function () {
        if (this.ime == '') {
            this.errorMessagePrezime = '';
            this.errorMessageIme = 'Molimo Vas da unesete ime!';
        }
        else if (this.prezime == '') {
            this.errorMessageIme = '';
            this.errorMessagePrezime = 'Molimo Vas da unesete prezime!';
        }
        else {
            this.errorMessageIme = '';
            this.errorMessagePrezime = '';
            this.br++;
            this.admini.push(this.ime + ' ' + this.prezime);
            this.messageUspjesno = 'Uspjesno ste dodali novog admina.';
        }
    };
    SuperAdminOpcijeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-superadminopcije',
            template: __webpack_require__(801),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [])
    ], SuperAdminOpcijeComponent);
    return SuperAdminOpcijeComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/superadminopcije.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__ = __webpack_require__(561);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpravniodborComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpravniodborComponent = (function () {
    function UpravniodborComponent() {
        this.amina_aljicevic = 'assets/images/amina_aljicevic.jpg';
        this.fuad_hajdarevic = 'assets/images/fuad_hajdarevic.jpg';
        this.mehmed_kadric = 'assets/images/mehmed_kadric.jpg';
        this.nur_osmanbegovic = 'assets/images/nur_osmanbegovic.jpg';
        this.adis_dedic = 'assets/images/adis_dedic.jpg';
        this.erol_terovic = 'assets/images/erol_terovic.jpg';
        this.miran_hadziomerovic = 'assets/images/miran_hadziomerovic.png';
        this.harun_muhic = 'assets/images/harun_muhic.jpg';
        this.osman_mehremic = 'assets/images/osman_mehremic.jpg';
        this.almin_repesa = 'assets/images/almin_repesa.jpg';
        this.edina_osmanspahic = 'assets/images/edina_osmanspahic.jpg';
        this.clanovi = new Array();
        this.prvi = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Fuad', 'Hajdarević', 'Predsjednik STELEKS-a', this.fuad_hajdarevic);
        this.clanovi.push(this.prvi);
        this.drugi = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Amina', 'Aljićević', 'Potpredsjednik STELEKS-a', this.amina_aljicevic);
        this.clanovi.push(this.drugi);
        this.treci = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Mehmed', 'Kadrić', 'Sekretar STELEKS-a', this.mehmed_kadric);
        this.clanovi.push(this.treci);
        this.cetvrti = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Nur', 'Osmanbegović', 'Koordinator sektora za odnose s javnošću', this.nur_osmanbegovic);
        this.clanovi.push(this.cetvrti);
        this.peti = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Edina', 'Osmanspahić', 'Zamjenik koordinatora sektora za odnose s javnošću', this.edina_osmanspahic);
        this.clanovi.push(this.peti);
        this.sesti = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Miran', 'Hadžiomerović', 'Koordinator sektora za sport', this.miran_hadziomerovic);
        this.clanovi.push(this.sesti);
        this.sedmi = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Almin', 'Repeša', 'Zamjenik koordinatora sektora za sport', this.almin_repesa);
        this.clanovi.push(this.sedmi);
        this.osmi = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Adis', 'Dedić', 'Koordinator sektora za kulturu i zabavu', this.adis_dedic);
        this.clanovi.push(this.osmi);
        this.deveti = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Erol', 'Terović', 'Zamjenik koordinatora sektora za kulturu i zabavu', this.erol_terovic);
        this.clanovi.push(this.deveti);
        this.deseti = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Harun', 'Muhić', 'Koordinator sektora za nauku', this.harun_muhic);
        this.clanovi.push(this.deseti);
        this.jedanaesti = new __WEBPACK_IMPORTED_MODULE_1__models_upravniodbor__["a" /* ClanUO */]('Osman', 'Mehremić', 'Zamjenik koordinatora sektora za nauku', this.osman_mehremic);
        this.clanovi.push(this.jedanaesti);
    }
    UpravniodborComponent.prototype.ngOnInit = function () {
    };
    UpravniodborComponent.prototype.dodajClanove = function (clan) {
        this.clanovi.push(clan);
    };
    UpravniodborComponent.prototype.dajNaziv = function (clan) {
        return clan.ime + ' ' + clan.prezime;
    };
    UpravniodborComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-upravniodbor',
            template: __webpack_require__(806),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], UpravniodborComponent);
    return UpravniodborComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/upravniodbor.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Elektrijada; });
var Elektrijada = (function () {
    function Elektrijada(naziv, godina, sadrzaj, plasman, sponzori) {
        this.naziv = naziv;
        this.godina = godina;
        this.sadrzaj = sadrzaj;
        this.plasman = plasman;
        this.sponzori = sponzori;
    }
    return Elektrijada;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/elektrijada.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrovaniClan; });
var RegistrovaniClan = (function () {
    function RegistrovaniClan(ime, prezime, email, emailFakultet, brojTelefona, brojIndeksa, korisnickoIme, lozinka, odsjek, godinaStudija) {
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.emailFakultet = emailFakultet;
        this.brojTelefona = brojTelefona;
        this.brojIndeksa = brojIndeksa;
        this.korisnickoIme = korisnickoIme;
        this.lozinka = lozinka;
        this.odsjek = odsjek;
        this.godinaStudija = godinaStudija;
    }
    return RegistrovaniClan;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/registracijastudent.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrijavaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrijavaService = (function () {
    function PrijavaService(_http) {
        this._http = _http;
        this.url = "https://steleksdevelopment.herokuapp.com";
    }
    PrijavaService.prototype.prijava = function (user, password) {
        var body = JSON.stringify({ username: user, password: password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
        console.log(body);
        this._http.post(this.url + '/user/login', body, {
            headers: headers
        }).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(body);
            localStorage.setItem('currentUser', JSON.stringify({ token: data.token, user: data.user }));
        }, function (error) {
            console.log(error);
        });
    };
    PrijavaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PrijavaService);
    return PrijavaService;
    var _a;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/prijava.service.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 423;


/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(544);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/main.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(766),
            styles: [__webpack_require__(725)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/app.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mainpicture_mainpicture_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_stelekstv_stelekstv_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_upravniodbor_upravniodbor_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sponzori_sponzori_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_mainpage_mainpage_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_aboutpage_aboutpage_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_newspage_newspage_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_gallerypage_gallerypage_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_albumipage_albumipage_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_gallery_gallery_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sifipage_sifipage_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_elektrijadapage_elektrijadapage_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_learningpage_learningpage_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_moderator_moderator_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_eventpreview_eventpreview_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_eventmainpicture_eventmainpicture_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_aboutevent_aboutevent_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_sifipreview_sifipreview_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_tekst_tekst_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_skills_skills_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_formaelektrijada_formaelektrijada_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_registracija_registracija_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_formasifi_formasifi_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_adminopcije_adminopcije_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_admin_admin_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_moderatoropcije_moderatoropcije_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_superadmin_superadmin_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_superadminopcije_superadminopcije_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_formagalerija_formagalerija_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_formabeforeevent_formabeforeevent_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_formaafterevent_formaafterevent_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_formasponzori_formasponzori_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_tekst2_tekst2_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_tekst3_tekst3_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_tekst4_tekst4_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_eventpreview2_eventpreview2_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_eventpreview3_eventpreview3_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_eventpreview4_eventpreview4_component__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_mainpicture_mainpicture_component__["a" /* MainpictureComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_stelekstv_stelekstv_component__["a" /* StelekstvComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_upravniodbor_upravniodbor_component__["a" /* UpravniodborComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_sponzori_sponzori_component__["a" /* SponzoriComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_mainpage_mainpage_component__["a" /* MainpageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_aboutpage_aboutpage_component__["a" /* AboutpageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_newspage_newspage_component__["a" /* NewspageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_gallerypage_gallerypage_component__["a" /* GallerypageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_albumipage_albumipage_component__["a" /* AlbumipageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_sifipage_sifipage_component__["a" /* SIFIpageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_elektrijadapage_elektrijadapage_component__["a" /* ElektrijadapageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_learningpage_learningpage_component__["a" /* LearningpageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_moderator_moderator_component__["a" /* ModeratorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_eventpreview_eventpreview_component__["a" /* EventpreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_eventmainpicture_eventmainpicture_component__["a" /* EventmainpictureComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_aboutevent_aboutevent_component__["a" /* AbouteventComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_sifipreview_sifipreview_component__["a" /* SifipreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_tekst_tekst_component__["a" /* TekstComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_formaelektrijada_formaelektrijada_component__["a" /* FormaElektrijadaComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_registracija_registracija_component__["a" /* RegistracijaComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_adminopcije_adminopcije_component__["a" /* AdminOpcijeComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_formasifi_formasifi_component__["a" /* FormaSifiComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_moderatoropcije_moderatoropcije_component__["a" /* ModeratorOpcijeComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_superadmin_superadmin_component__["a" /* SuperAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_superadminopcije_superadminopcije_component__["a" /* SuperAdminOpcijeComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_formagalerija_formagalerija_component__["a" /* FormaGalerijaComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_formabeforeevent_formabeforeevent_component__["a" /* FormaBeforeEventComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_formaafterevent_formaafterevent_component__["a" /* FormaAfterEventComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_formasponzori_formasponzori_component__["a" /* FormaSponzoriComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_tekst2_tekst2_component__["a" /* Tekst2Component */],
                __WEBPACK_IMPORTED_MODULE_41__components_tekst3_tekst3_component__["a" /* Tekst3Component */],
                __WEBPACK_IMPORTED_MODULE_42__components_tekst4_tekst4_component__["a" /* Tekst4Component */],
                __WEBPACK_IMPORTED_MODULE_43__components_eventpreview2_eventpreview2_component__["a" /* Eventpreview2Component */],
                __WEBPACK_IMPORTED_MODULE_44__components_eventpreview3_eventpreview3_component__["a" /* Eventpreview3Component */],
                __WEBPACK_IMPORTED_MODULE_45__components_eventpreview4_eventpreview4_component__["a" /* Eventpreview4Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* AppRouting */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/app.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbouteventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AbouteventComponent = (function () {
    function AbouteventComponent() {
    }
    AbouteventComponent.prototype.ngOnInit = function () {
    };
    AbouteventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-aboutevent',
            template: __webpack_require__(767),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], AbouteventComponent);
    return AbouteventComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/aboutevent.component.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventmainpictureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventmainpictureComponent = (function () {
    function EventmainpictureComponent() {
    }
    EventmainpictureComponent.prototype.ngOnInit = function () {
    };
    EventmainpictureComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-eventmainpicture',
            template: __webpack_require__(773),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [])
    ], EventmainpictureComponent);
    return EventmainpictureComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/eventmainpicture.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(778),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/footer.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallerypageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GallerypageComponent = (function () {
    function GallerypageComponent() {
    }
    GallerypageComponent.prototype.setSelectedImage = function (image) {
        var el = document.getElementById('selectedImageModal');
        el.style.paddingTop = "75px";
        var sirina = (window.screen.width);
        if (sirina > 1850)
            el.style.paddingBottom = "280px";
        else if (sirina > 1000 && sirina < 1850)
            el.style.paddingBottom = "65px";
        else
            el.style.paddingBottom = "250px";
        console.log(sirina);
        this.selectedImage = image;
    };
    GallerypageComponent.prototype.navigate = function (forward) {
        var index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
        if (index >= 0 && index < this.datasource.length) {
            this.selectedImage = this.datasource[index];
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', Object)
    ], GallerypageComponent.prototype, "datasource", void 0);
    GallerypageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'gallerypage',
            template: __webpack_require__(786),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [])
    ], GallerypageComponent);
    return GallerypageComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/gallerypage.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpictureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainpictureComponent = (function () {
    function MainpictureComponent() {
    }
    MainpictureComponent.prototype.ngOnInit = function () {
    };
    MainpictureComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-mainpicture',
            template: __webpack_require__(789),
            styles: [__webpack_require__(748)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainpictureComponent);
    return MainpictureComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/mainpicture.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent() {
        this.isScrolled = false;
        this.currPos = 0;
        this.startPos = 0;
        this.changePos = 100;
        this.steleks = 'assets/images/steleksLogo.png';
        this.meni = 'assets/images/menu.png';
        this.prikazi = false;
    }
    NavigationComponent.prototype.updateHeader = function (evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if (this.currPos >= this.changePos) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
    };
    NavigationComponent.prototype.klik = function () {
        var elem = document.getElementById("mob1");
        if (this.prikazi == false) {
            this.prikazi = true;
            elem.style.display = "block";
        }
        else {
            this.prikazi = false;
            elem.style.display = "none";
        }
    };
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.onWindowScroll = function () {
        var i;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])("window:scroll", []), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NavigationComponent.prototype, "onWindowScroll", null);
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__(792),
            styles: [__webpack_require__(751)],
            host: {
                '(window:scroll)': 'updateHeader($event)'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/navigation.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__(797),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [])
    ], SkillsComponent);
    return SkillsComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/skills.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sponzori__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponzoriComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponzoriComponent = (function () {
    function SponzoriComponent() {
        this.bhtelecom = 'assets/images/bhtelecom2.jpg';
        this.bsts = 'assets/images/BSTS_logo2.png';
        this.disti = 'assets/images/disti2.jpg';
        this.diveco = 'assets/images/diveco2.png';
        this.infostudio = 'assets/images/infostudio2.png';
        this.mistral = 'assets/images/mistral.png';
        this.zira = 'assets/images/zira2.png';
        this.sue = 'assets/images/sue2.jpg';
        this.sponzori = new Array();
        this.sponzori.push(new __WEBPACK_IMPORTED_MODULE_1__models_sponzori__["a" /* Sponzor */](this.bhtelecom, 'BH Telecom'));
        this.sponzori.push(new __WEBPACK_IMPORTED_MODULE_1__models_sponzori__["a" /* Sponzor */](this.bsts, 'BS Telecom Solutions'));
        this.sponzori.push(new __WEBPACK_IMPORTED_MODULE_1__models_sponzori__["a" /* Sponzor */](this.disti, 'Disti'));
        this.sponzori.push(new __WEBPACK_IMPORTED_MODULE_1__models_sponzori__["a" /* Sponzor */](this.diveco, 'Diveco Energo d.o.o.'));
        this.sponzori.push(new __WEBPACK_IMPORTED_MODULE_1__models_sponzori__["a" /* Sponzor */](this.infostudio, 'InfoStudio'));
        this.sponzori.push(new __WEBPACK_IMPORTED_MODULE_1__models_sponzori__["a" /* Sponzor */](this.mistral, 'Mistral'));
        this.sponzori.push(new __WEBPACK_IMPORTED_MODULE_1__models_sponzori__["a" /* Sponzor */](this.zira, 'Zira'));
        this.sponzori.push(new __WEBPACK_IMPORTED_MODULE_1__models_sponzori__["a" /* Sponzor */](this.sue, 'Energoinvest SUE'));
    }
    SponzoriComponent.prototype.ngOnInit = function () {
    };
    SponzoriComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-sponzori',
            template: __webpack_require__(798),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [])
    ], SponzoriComponent);
    return SponzoriComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/sponzori.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StelekstvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StelekstvComponent = (function () {
    function StelekstvComponent() {
    }
    StelekstvComponent.prototype.ngOnInit = function () {
    };
    StelekstvComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-stelekstv',
            template: __webpack_require__(799),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [])
    ], StelekstvComponent);
    return StelekstvComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/stelekstv.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TekstComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TekstComponent = (function () {
    function TekstComponent() {
    }
    TekstComponent.prototype.ngOnInit = function () {
    };
    TekstComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-tekst',
            template: __webpack_require__(802),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [])
    ], TekstComponent);
    return TekstComponent;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/tekst.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tekst2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tekst2Component = (function () {
    function Tekst2Component() {
    }
    Tekst2Component.prototype.ngOnInit = function () {
    };
    Tekst2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-tekst2',
            template: __webpack_require__(803),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [])
    ], Tekst2Component);
    return Tekst2Component;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/tekst2.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tekst3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tekst3Component = (function () {
    function Tekst3Component() {
    }
    Tekst3Component.prototype.ngOnInit = function () {
    };
    Tekst3Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-tekst3',
            template: __webpack_require__(804),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [])
    ], Tekst3Component);
    return Tekst3Component;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/tekst3.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tekst4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tekst4Component = (function () {
    function Tekst4Component() {
    }
    Tekst4Component.prototype.ngOnInit = function () {
    };
    Tekst4Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-tekst4',
            template: __webpack_require__(805),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [])
    ], Tekst4Component);
    return Tekst4Component;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/tekst4.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
var Album = (function () {
    function Album(naziv, backgroundSlika, slike, brojSlika) {
        this.naziv = naziv;
        this.backgroundSlika = backgroundSlika;
        this.slike = slike;
        this.brojSlika = brojSlika;
    }
    return Album;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/album.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event(naziv, slika, kratkiTekst, datum, link) {
        this.naziv = naziv;
        this.kratkiTekst = kratkiTekst;
        this.slika = slika;
        this.datum = datum;
        this.link = link;
    }
    return Event;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/event.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Medalje; });
var Medalje = (function () {
    function Medalje(plasmani, naziviradova, fakulteti, ucesnici, radovi) {
        this.plasmani = plasmani;
        this.naziviradova = naziviradova;
        this.fakulteti = fakulteti;
        this.ucesnici = ucesnici;
        this.radovi = radovi;
    }
    return Medalje;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/medalje.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClanUO; });
var ClanUO = (function () {
    function ClanUO(ime, prezime, uloga, slika) {
        this.ime = ime;
        this.prezime = prezime;
        this.uloga = uloga;
        this.slika = slika;
    }
    return ClanUO;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/upravniodbor.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_aboutpage_aboutpage_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elektrijadapage_elektrijadapage_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_gallery_gallery_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_albumipage_albumipage_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_learningpage_learningpage_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_upravniodbor_upravniodbor_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mainpage_mainpage_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_newspage_newspage_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sifipage_sifipage_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_moderator_moderator_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_eventpreview_eventpreview_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sifipreview_sifipreview_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_formaelektrijada_formaelektrijada_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_registracija_registracija_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_formasifi_formasifi_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_adminopcije_adminopcije_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_moderatoropcije_moderatoropcije_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_superadmin_superadmin_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_superadminopcije_superadminopcije_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_formagalerija_formagalerija_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_formabeforeevent_formabeforeevent_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_formaafterevent_formaafterevent_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_formasponzori_formasponzori_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_eventpreview2_eventpreview2_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_eventpreview3_eventpreview3_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_eventpreview4_eventpreview4_component__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });




























var app_routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_mainpage_mainpage_component__["a" /* MainpageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__components_aboutpage_aboutpage_component__["a" /* AboutpageComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_8__components_newspage_newspage_component__["a" /* NewspageComponent */] },
    { path: 'sifi', component: __WEBPACK_IMPORTED_MODULE_9__components_sifipage_sifipage_component__["a" /* SIFIpageComponent */] },
    { path: 'upravniodbor', component: __WEBPACK_IMPORTED_MODULE_6__components_upravniodbor_upravniodbor_component__["a" /* UpravniodborComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_4__components_albumipage_albumipage_component__["a" /* AlbumipageComponent */] },
    { path: 'galerija', component: __WEBPACK_IMPORTED_MODULE_3__components_gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'elektrijada', component: __WEBPACK_IMPORTED_MODULE_2__components_elektrijadapage_elektrijadapage_component__["a" /* ElektrijadapageComponent */] },
    { path: 'materijali', component: __WEBPACK_IMPORTED_MODULE_5__components_learningpage_learningpage_component__["a" /* LearningpageComponent */] },
    { path: 'moderator', component: __WEBPACK_IMPORTED_MODULE_10__components_moderator_moderator_component__["a" /* ModeratorComponent */] },
    { path: 'event', component: __WEBPACK_IMPORTED_MODULE_11__components_eventpreview_eventpreview_component__["a" /* EventpreviewComponent */] },
    { path: 'sifipreview', component: __WEBPACK_IMPORTED_MODULE_12__components_sifipreview_sifipreview_component__["a" /* SifipreviewComponent */] },
    { path: 'formaelektrijada', component: __WEBPACK_IMPORTED_MODULE_13__components_formaelektrijada_formaelektrijada_component__["a" /* FormaElektrijadaComponent */] },
    { path: 'formasifi', component: __WEBPACK_IMPORTED_MODULE_15__components_formasifi_formasifi_component__["a" /* FormaSifiComponent */] },
    { path: 'registracija', component: __WEBPACK_IMPORTED_MODULE_14__components_registracija_registracija_component__["a" /* RegistracijaComponent */] },
    { path: 'adminopcije', component: __WEBPACK_IMPORTED_MODULE_16__components_adminopcije_adminopcije_component__["a" /* AdminOpcijeComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'moderatoropcije', component: __WEBPACK_IMPORTED_MODULE_18__components_moderatoropcije_moderatoropcije_component__["a" /* ModeratorOpcijeComponent */] },
    { path: 'superadmin', component: __WEBPACK_IMPORTED_MODULE_19__components_superadmin_superadmin_component__["a" /* SuperAdminComponent */] },
    { path: 'superadminopcije', component: __WEBPACK_IMPORTED_MODULE_20__components_superadminopcije_superadminopcije_component__["a" /* SuperAdminOpcijeComponent */] },
    { path: 'formagalerija', component: __WEBPACK_IMPORTED_MODULE_21__components_formagalerija_formagalerija_component__["a" /* FormaGalerijaComponent */] },
    { path: 'formabeforeevent', component: __WEBPACK_IMPORTED_MODULE_22__components_formabeforeevent_formabeforeevent_component__["a" /* FormaBeforeEventComponent */] },
    { path: 'formaafterevent', component: __WEBPACK_IMPORTED_MODULE_23__components_formaafterevent_formaafterevent_component__["a" /* FormaAfterEventComponent */] },
    { path: 'formasponzori', component: __WEBPACK_IMPORTED_MODULE_24__components_formasponzori_formasponzori_component__["a" /* FormaSponzoriComponent */] },
    { path: 'event2', component: __WEBPACK_IMPORTED_MODULE_25__components_eventpreview2_eventpreview2_component__["a" /* Eventpreview2Component */] },
    { path: 'event3', component: __WEBPACK_IMPORTED_MODULE_26__components_eventpreview3_eventpreview3_component__["a" /* Eventpreview3Component */] },
    { path: 'event4', component: __WEBPACK_IMPORTED_MODULE_27__components_eventpreview4_eventpreview4_component__["a" /* Eventpreview4Component */] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(app_routes);
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/routes.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_elektrijada__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElektrijadaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ElektrijadaService = (function () {
    function ElektrijadaService(_http) {
        this._http = _http;
        this.url = "https://steleksdevelopment.herokuapp.com";
    }
    ElektrijadaService.prototype.prijava = function (elektrijada) {
        console.log("ima li te ");
        var body = JSON.stringify({ elektrijada: __WEBPACK_IMPORTED_MODULE_2__models_elektrijada__["a" /* Elektrijada */] });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
        console.log(body);
        this._http.post(this.url + '/user/login', body, {
            headers: headers
        }).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            localStorage.setItem('currentUser', JSON.stringify({ elektrijada: data.elektrijada }));
        }, function (error) {
            console.log(error);
        });
    };
    ElektrijadaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ElektrijadaService);
    return ElektrijadaService;
    var _a;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/elektrijada.service.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = (function () {
    function EventService(_http) {
        this._http = _http;
        this.url = "https://steleksdevelopment.herokuapp.com";
    }
    EventService.prototype.prijava = function () {
        console.log("tu saam");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(this.url + '/api/events/news');
        return this._http.get(this.url + '/api/events/news', {
            headers: headers
        })
            .map(function (data) {
            console.log("PODACI");
            console.log(data.json());
            return data.json();
        });
        //  var body = JSON.stringify({username: user, password: password});
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
        //
        // this._http.get(this.url + '/api/events/news',
        // ,
        //   {
        //     headers: headers
        //   }
        // ).map(res=> res.json()).subscribe(
        //   data => {
        //       console.log(data);
        //       JSON.stringify({ token: data.token, user: data.user }));
        //     },
        // error =>{
        //   console.log(error);
        // }
        //
        // );
        // async _fetch( method, endpoint, body ) {
        //     const constructedUrl = ${ this.url }${ endpoint }
        //     try {
        //       const response = await axios( {
        //         method,
        //         url: constructedUrl,
        //         data: body,
        //       } )
        //       if ( response.status >= 200 || response.status <= 299 ) {
        //         return response.data
        //       }
        //       // if ( response.status >= 400 || response.status <= 499 ) {
        //       //   // Todo, return error message
        //       //   return false
        //       // }
        //       throw ( response )
        //     } catch ( error ) {
        //       console.error( Error fetching ${ method }: ${ endpoint }, error.response.data )
        //       throw new Error( error.response.data.message )
        //     }
        //   }
    };
    EventService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], EventService);
    return EventService;
    var _a;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/event.service.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeratorPrijavaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModeratorPrijavaService = (function () {
    function ModeratorPrijavaService(_http) {
        this._http = _http;
        this.url = "https://steleksdevelopment.herokuapp.com";
    }
    ModeratorPrijavaService.prototype.prijava = function (user, password) {
        var body = { username: user, password: password };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
        console.log(body);
        this._http.post(this.url + '/api/moderators/login', body, {
            headers: headers,
            withCredentials: true
        }).map(function (res) {
            if (res.status >= 200 && res.status <= 299)
                return res.json();
            console.log("Ne valja:", res);
            throw new Error("NE VALJA");
        }).subscribe(function (data) {
            console.log(data);
            //localStorage.setItem('currentUser', JSON.stringify({ token: data.token, user: data.user }));
        }, function (error) {
            console.log(error);
        });
    };
    ModeratorPrijavaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ModeratorPrijavaService);
    return ModeratorPrijavaService;
    var _a;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/moderatorprijava.service.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_registracijastudent__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistracijaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistracijaService = (function () {
    function RegistracijaService(_http) {
        this._http = _http;
        this.url = "https://steleksdevelopment.herokuapp.com";
    }
    RegistracijaService.prototype.prijava = function (clan) {
        console.log("ima li te ");
        var body = JSON.stringify({ clan: __WEBPACK_IMPORTED_MODULE_2__models_registracijastudent__["a" /* RegistrovaniClan */] });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
        console.log(body);
        this._http.post(this.url + '/user/login', body, {
            headers: headers
        }).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            localStorage.setItem('currentUser', JSON.stringify({ token: data.token, clan: data.clan }));
        }, function (error) {
            console.log(error);
        });
    };
    RegistracijaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], RegistracijaService);
    return RegistracijaService;
    var _a;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/registracija.service.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_sponzori__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponzoriService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SponzoriService = (function () {
    function SponzoriService(_http) {
        this._http = _http;
        this.url = "https://steleksdevelopment.herokuapp.com";
    }
    SponzoriService.prototype.prijava = function (sponzor) {
        console.log("ima li te ");
        var body = JSON.stringify({ sponzor: __WEBPACK_IMPORTED_MODULE_2__models_sponzori__["a" /* Sponzor */] });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('authorization', 'Bearer ' + localStorage.getItem("currentUser").token);
        console.log(body);
        this._http.post(this.url + '/api/sponsors', body, {
            headers: headers
        }).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("cao");
            console.log(data);
            localStorage.setItem('currentUser', JSON.stringify({ sponzor: data.sponzor }));
        }, function (error) {
            console.log(error);
        });
    };
    SponzoriService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], SponzoriService);
    return SponzoriService;
    var _a;
}());
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/sponzori.service.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/faruksinanovic/Desktop/steleks/deploySteleks/client/src/environment.js.map

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = ".okvir {\n    margin: auto;\n    padding: 50px;\n    \n}\nh1 {\n    text-align: center;\n    text-transform: uppercase;\n    color: #4CAF50;\n}\n.tekst {\n    text-align: justify;\n    letter-spacing: 0px;\n    word-spacing: 0px;\n}\n\n.image {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  filter: gray;\n  -webkit-filter: grayscale(1);\n\ttransition: .3s ease-in-out;\n  float: left;\n}\n.image:hover {\n  filter: none;\n      -webkit-filter: grayscale(0);\n      -webkit-transform: scale(1.01);\n}\n.images{\n  width: 100%;\n    display: table;\n\n}\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = ".picture{\nmin-height: 495px;\nbackground-image: url('../../assets/images/aboutus.jpg');\n\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position:center center;\n\n}\n.info-overflow{\n  transform: translateZ(0);\n    height: 495px;\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    z-index: 4;\n\n}\n.info-overflow::before{\n  position: absolute;\n  top: 0;\n  left: 0;\npadding-top: 80px;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 50%, #002f40 100%);\n}\nh1{\nposition: center;\nfont-family: 'Roboto', sans-serif;\nfont-weight: 700;\nfont-size: 50px;\n\ntext-align: center;\n\n}\n.content{\n  padding-top: 40px;\n  padding-left: 40px;\n}\n\n\nhr {\n  max-width: 70px;\n  border-width: 3px;\n  border-color: #06d7d9;\n}\n.historija{\npadding-top: 10px;\npadding-left: 60px;\n\n}\nh2{\n  text-align: left;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  font-size: 40px;\n  color: #4b799b;\n\n}\np{\n  padding-top: 50px;\n  text-align: justify;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  padding-right: 50px;\n\n}\n.projekti{\n  padding-top: 90px;\n  padding-left: 60px;\n  padding-bottom: 90px;\n  display:inline-block;\n}\nul{\n  padding-top: 50px;\n  text-align: left;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n}\n.nazivi{\n  float: left;\n}\n.slike{\n  float: left;\ndisplay: inline-block;\n}\nimg{\n  float: left;\n}\n@media screen and (max-width: 680px) {\n.slike{\n  padding: 0;\n\n}\n\n.content{\n  width: 100%;\n  padding-right: 0;\n  padding-left: 0;\n  margin-left: 0;\n\n}\n}\n@media screen and (max-width: 720px) {\n.slike{\n  padding: 0;\n\n}\n\n.content{\n  width: 100%;\n  padding-right: 0;\n  padding-left: 0;\n  margin-left: 0;\n\n}\n}\n@media screen and (max-width: 768px) {\n.slike{\n  padding: 0;\n\n}\nimg{\n  \n}\n\nh2{\n  text-align: left;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  font-size: 30px;\n  color: #4b799b;\n  padding-left: 0px;\n  margin-left: 0px;\n}\np{\n  padding-top: 50px;\n  text-align: justify;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  padding-left: 0px;\n  margin-left: 0px;\n\n}\n.historija{\n  padding-left: 15px;\n  margin-left: 15px;\n}\n.projekti{\n  padding-left: 10px;\n  margin-left: 10px;\n}\n.nazivi{\n  font-size: 20px;\n}\n}\n@media screen and (max-width: 920px) {\n.slike{\n  padding: 0;\n\n}\n\n.content{\n  width: 100%;\n\n}\n\n\n\n}\n\n@media screen and (min-width: 1600px) {\n  .picture{\n    min-height: 850px;\n  }\n  .info-overflow{\n    height: 850px;\n  }\n  .slike{\n    margin-left: 150px;\n  }\n  .content{\n    width: 100%;\n\n  }\n\n}\n@media screen and (max-width: 1366px) {\n  .picture{\n    min-height: 495px;\n  }\n  .info-overflow{\n    height: 495px;\n  }\n}\n.s{\n\n  display:block;\n}\n.onama{\n  padding-bottom: 100px;\n}\n@media only screen and (min-width: 1024px) and (max-width: 1366px)\n  and (-webkit-min-device-pixel-ratio: 1.5) {\n    .slike{\n      padding: 0;\n    }\n}\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "html {\n    height: 100%;\n}\n\nbody{\n\n  position: absolute;\n  width:100%;\n  height:100%;\n  margin: 0;\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  opacity: 1;\n}\n.prijava\n{\n  width: 100%;\n  height: auto;\n  padding-top: 125px;\n  padding-bottom: 50px;\n}\n\ninput[type=\"text\"]{\n  width: 87%;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  font-family: 'Roboto', sans-serif;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n\n    input[type=\"password\"]{\n      width: 87%;\n      margin-left: 35px;\n      margin-right: 35px;\n      margin-top: 10px;\n      margin-bottom: 10px;\n      padding: 5px;\n      font-size: 14px;\n      font-weight: 400;\n      background-color: white;\n      color: #3B3B3D;\n      border: 1px solid #cccccc;\n      border-radius: 4px;\n      font-family: 'Roboto', sans-serif;\n    }\n\n      input[type=\"password\"]:focus {\n        border: 1px solid #4D4D4D;\n        outline: none;\n      }\n\n      input[type=\"password\"]::-webkit-input-placeholder {\n        color: #aaa;\n      }\n\n      input[type=\"password\"]:-ms-input-placeholder {\n        color: #aaa;\n      }\n\n      input[type=\"password\"]::placeholder {\n        color: #aaa;\n      }\n\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n\n\n.groupBox {\n\n  width: 100%;\n  margin-right: 10px;\n  margin-left: 10px;\n    border-color: black;\n    border-style: double;\n    z-index: 32;\n    background-color: #fff;\n}\n\n.form-content{\n  position: relative;\n  height: auto;\n  width: 40%;\n  display: table;\n  margin:0px auto;\n\tborder-radius: 5px;\n\tpadding:20px;\n}\n\nh2{background: #4D4D4D;\n  text-align: center;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\n.form-content input[type=\"submit\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto', sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    margin: 39px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"submit\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n@media screen and (max-width: 1130px) {\n  .form-content{\n    width: 50%;\n    padding:20px;\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 40px;\n    margin-left: 40px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 50px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .form-content{\n    width: 50%;\n    padding:20px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 30px;\n    margin-left: 30px;\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 40px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n  .groupBox{\n    width: 95%;\n    margin-right: 10px;\n    margin-left: 10px;\n  }\n\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 35px;\n  }\n\n}\n\n@media screen and (max-width: 600px) {\n  .form-content{\n    width: 100%;\n    padding:20px;\n\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 30px;\n    margin-left: 30px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 35px;\n  }\n}\n@media only screen and (max-width: 1367px){\n  div.prijava{\n    min-width: 0;\n  }\n  div.form-content{\n    min-width: 0;\n  }\n}\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "th, td {\n    border: 2px solid white;\n    border-collapse: collapse;\n}\nth, td {\n    padding: 5px;\n    text-align: left;\n}\ntable {\n  background: #d9d9d9;\n  border: 2px solid white;\n  border-collapse: collapse;\n  width: 70%;\n  margin:0 auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n}\ntr:nth-child(even) {\n  background: #ececec;\n}\n\ntr:first-child {\n  border-bottom: 2px solid #333;\n}\n\n.elektrijada\n{\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  background-size: cover;\n  background-position: center center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  width:100%;\n  height: 1300px;\n  opacity: 1;\n  padding-top: 125px;\n}\n.form-content{\n  position: relative;\n  height: auto;\n  width: 50%;\n  display: table;\n  margin:0px auto;\n background-color: #fff;\n font-family: 'Roboto', sans-serif;\n}\n@media only screen and (max-width: 1367px){\n  div.elektrijada{\n    min-width: 0;\n  }\n  div.form-content{\n    min-width: 0;\n  }\n}\nh2{background: #4D4D4D;\n  text-align: center;\n    text-transform: uppercase;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\n\ninput[type=\"text\"]{\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  float: left;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n\n  .groupBox {\n    width: 70%;\n    margin:0 auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    padding: 40px;\n    padding-top: 50px;\n    padding-bottom: 20px;\n    border: 1px solid  #b3b3b3;\n    border-radius: 0px;\n    background-color: #e6e6e6;\n  }\n\n/* button za brisanje */\n.button1 {\n  box-shadow: inset 0px 1px 0px 0px #595959;\n  background-color: #595959;\n  border: 1px solid #595959;\n  display: inline-block;\n  cursor: pointer;\n  color: gray;\n  font-size: 12px;\n  margin: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  float:right;\n  padding: 5px 18px;\n  text-decoration: none;\n  border-radius: 4px;\n  color: white;\n}\n.button2 {\n  box-shadow: inset 0px 1px 0px 0px #595959;\n  background-color: #595959;\n  border: 1px solid #595959;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: 'Roboto', sans-serif;\n  font-size: 12px;\n  margin:0 auto;\n  margin-top: 40px;\n  float:left;\n  padding: 5px 18px;\n  text-decoration: none;\n  border-radius: 4px;\n}\n\nbutton{\n  box-shadow: inset 0px 1px 0px 0px #595959;\n  background-color: #595959;\n  border: 1px solid #595959;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: 'Roboto', sans-serif;\n  font-size: 15px;\n  margin: 35px;\n  margin-right: 110px;\n  margin-top: 15px;\n  float:right;\n  padding: 5px 28px;\n  text-decoration: none;\n  border-radius: 4px;\n}\nbutton:hover, .button1:hover {\n  background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n  background-color:#666666;\n}\n\n@media screen and (max-width: 1920px) and (max-height: 1024px) {\n  .form-content{\n    width: 50%;\n  }\n  button {\n    margin-left: 85px;\n    margin-right: 145px;\n    margin-bottom: 40px;\n  }\n}\n\n@media screen and (max-width: 1920px) and (max-height: 900px) {\n  .form-content{\n    width: 50%;\n  }\n  button {\n    margin-left: 85px;\n    margin-right: 105px;\n    margin-bottom: 40px;\n  }\n}\n\n.error {\n  color: red;\n  text-align: center;\n  font-size: 12px;\n}\n\n.poruka {\n  color:green;\n  text-align: center;\n  font-size: 12px;\n}\n\n@media screen and (max-width: 1300px) {\n  .form-content{\n    width: 40%;\n  }\n  .elektrijada{\n    height: 1300px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n  button {\n    margin-left: 85px;\n    margin-right: 85px;\n    margin-bottom: 40px;\n  }\n  .groupBox {\n    padding: 7px;\n    margin-bottom: 30px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .form-content{\n    width: 50%;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .form-content{\n    width: 100%;\n    padding: 20px;\n  }\n  button {\n    margin:0 auto;\n    margin-bottom: 40px;\n  }\n  .groupBox {\n    padding: 7px;\n    margin-bottom: 30px;\n  }\n  input[type=\"text\"] {\n    margin: 15px;\n    margin-bottom: 5px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .form-content{\n    width: 50%;\n  }\n}\n\n.error {\n  color: red;\n  text-align: center;\n}\n\n.poruka {\n  color:green;\n  text-align: center;\n}\n\n@media screen and (max-width: 3900px) {\n  .form-content{\n    width: 50%;\n    margin-top: 50px;\n  }\n}\n\n.error {\n  color: red;\n  text-align: center;\n}\n\n.poruka {\n  color:green;\n  text-align: center;\n}\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "html{\n\n    height: 100%;\n}\nbody{\n  position: absolute;\n  width:100%;\n  height:auto;\n  margin: 0;\n  padding: 0;\n  background-image:url('../../assets/images/galerijapozadina.png');background-repeat:repeat;\n}\nh5{\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  color: #fff;\n  font-size: 18px;\n}\n#albums{\n  margin: 0 auto;\n  display: table;\n  width: 70%;\n  padding-top: 100px;\n}\n#albums li {\n\t\t\tpadding: 50px;\n      margin: 0 auto;\n      display: table;\n\n      float: left;\n\t\t\t}\n\n\t\t#albums a, #albums a:visited {\n\t\t\twidth: 300px;\n\t\t\theight: 265px;\n\t\t\tdisplay: block;\n\t\t\tposition: relative;\n\t\t\t}\n\n\t\t#albums img {\n      min-height: 250px;\n      min-width: 300px;\n      width: 100%;\n\t\t\theight: auto;\n\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tz-index: 6;\n\t\tbox-sizing: border-box;\n\t\ttransition: all .1s linear;\n\t\t\t}\n\n\n\n    #albums img:nth-child(1) { left:10px; padding: 0 3px; top: -5px; opacity: 0.95; z-index: 5; }\n\t\t#albums img:nth-child(2) {  left:20px; padding: 0 6px; top: -10px; opacity: 0.85; z-index: 4; }\n\t\t#albums img:nth-child(3) {  left:30px; padding: 0 9px; top: -15px; opacity: 0.75; z-index: 3; }\n\t\t#albums img:nth-child(4) {   left:40px; padding: 0 12px; top: -20px; opacity: 0.65; z-index: 2; }\n\n\n\n\t\t#albums a:hover img{\n\t\t\ttop: -9px;\n\t\t\tpadding: 0 0px;\n\n\t\t\t}\n      #albums a:hover p{\n  \t\t\topacity: 1;\n\n  \t\t\t}\n\n\t\t#albums a:hover img:nth-child(1) {\n\t\t\ttop: -8px;\n\t\t\tpadding: 0 6px;\n\t\ttransition-delay: .1s;\n          opacity: 0.95;\n\n        }\n\n\t\t#albums a:hover img:nth-child(2) {\n\t\t\ttop: -16px;\n\t\t\tpadding: 0 10px;\n\t\ttransition-delay: .15s;\n\t\t\t}\n\n\t\t#albums a:hover img:nth-child(3) {\n\t\t\ttop: -24px;\n\t\t\tpadding: 0 14px;\n\t\ttransition-delay: .2s;\n\t\t\t}\n\n\t\t#albums a:hover img:nth-child(4) {\n\t\t\ttop: -32px;\n\t\t\tpadding: 0 18px;\n\t\ttransition-delay: .25s;\n\t\t\t}\n\np{\n\n  z-index: 1000;\nfont-size: 30px;\n  font-weight: 700;\n  width: 100px;\n  height: 100px;\n  color: #ffff;\n  position: absolute;\n  top:45%;\n  left: 45%;\n  opacity: 0;\n}\n\n\n\t\t#albums h5 {\n\t\t\tmargin: 0;\n\t\t\tpadding:  0;\n\t\t\ttext-align: center;\n\t\t\tfont-weight: 700;\n      color: white;\n\t\t\t}\n      @media only screen and (max-width: 1920px) {\n        #albums li {\n\n              width: 33%;\n\n        \t\t\t}\n}\n@media only screen and (max-width: 1400px) {\n  #albums li {\n\n        width: 33%;\n      }\n      #albums{\n\n        width: 100%;\n\n      }\n\n\n}\n\n@media screen and (min-width: 1600px) {\n  body{\n    height:100%;\n  }\n}\n@media only screen and (max-width: 1024px) and (max-width: 1366px)\n  and (-webkit-min-device-pixel-ratio: 1.5) {\n    body{\n      height: 100%;\n    }\n  }\n@media only screen and (max-width: 768px){\n  body{\n    height: auto;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  #albums li {\n\n        width: 100%;\n          max-width: 300px;\n          padding: 0;\n          padding-bottom: 50px;\n          margin: 0;\n      }\n      #albums{\n        max-width: 250px;\n        width: 100%;\n        margin: 0;\n        padding: 5px;\n        padding-top: 50px;\n      }\n      #albums img {\n        min-height: 240px;\n        min-width: 280px;\n        width: 100%;\n\n  \t\t\t}\n\n\n}\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = ".eventpicture{\n  min-height: 660px;\n  background-image:url('../../assets/images/elektrijada.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n  opacity: 0.9;\n}\n.info-overflow::before{\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 30%, #002f40 100%);\n}\n.info-inner{\n  z-index: 2;\n}\n.info-inner::after{\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\nh1{\n  margin-top: 40px;\nposition: center;\nfont-family: 'Roboto', sans-serif;\nfont-weight: 600;\nfont-size: 30px;\ntext-align: center;\n\n}\nhr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #06d7d9;\n  margin-bottom: 50px;\n}\n\n.text3 {\n  color: auto;\n  margin-left: 40px;\n  margin-top: 40px;\n  letter-spacing: 1px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  padding-bottom: 80px;\n  text-align: justify;\n}\n.medalje{\n  padding-bottom: 100px;\n}\n.text1 {\n  color: #fff;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 19px;\n  line-height: 1.3em;\n  font-weight:lighter;\n  letter-spacing: 0px;\n  text-transform:none;\n}\n.name{\n    font-size: 40px;\n    color: #fff;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 700;\n    letter-spacing: -1px;\n    line-height: 45px;\n    padding-bottom: 30px;\n}\n.name span{\n    font-size: 40px;\n    color: #fff;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 700;\n    letter-spacing: -1px;\n    line-height: 40px;\n    padding-bottom: 30px;\n    padding-left: 100px;\n}\n\n\n.info-overflow{\n  transform: translateZ(0);\n    height: 672px;\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    z-index: 4;\n}\n\n.info-dash{\n    background-size: 100% auto;\n    bottom:  0px;\n    height: 492px;\n    top: auto;\n    width: 510px !important;\n    background:url('https://image.ibb.co/bKYS2b/gradient.png')right top no-repeat;\n    transform: translateX(0);\n    left: 0;\n    padding:30px;\n    position: absolute;\n    z-index: 4;\n}\n.info-dash:after{\n  content: \"\";\n  display: block;\n  height: 150px;\n  width: 100%;\n}\n\ndiv{\n  display: block;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;;\n  margin: 0;\n  padding: 0;\n}\n*{\n  text-rendering: geometricPrecision;\n  box-sizing: border-box;\n  outline: 0;\n}\n\n.prvi{\n  width: 14%;\n  float: left;\n  height: 100%;\n}\n.drugi_dio{\n  margin-left: 25px;\n  width: 80%;\n  float: left;\n  margin-top: 15px;\n  padding: 20px;\n  padding-right: 0px;\n}\n\n.medalje{\n  float: none;\n  width: 100%;\n}\n\nul.tab {\n    list-style-type: none;\n    overflow: hidden;\n    border: \t#182627;\n    background-color: #2D3B3C;  /* ili ova boja? #2A3C41 \t*/\n    font-family: \"Roboto\", sans-serif;\n    width:100%;\n    padding: 0px;\n    margin-top:12px;\n    height: 100%;\n}\n/* poravnanje u listi */\nul.tab li {\n\n}\n\n/* stil za elemente liste */\nul.tab li div {\n    display: block;\n    color: #fff;\n    text-align: center;\n    padding: 14px 20px;\n    text-decoration: none;\n    transition: 0.3s;\n    font-size: 21px;\n    width: 100%;\n    height: 100%;\n    font-family: 'Roboto',sans-serif;\n    font-style: 500;\n    line-height: 1.9em;\n    letter-spacing: 0px;\n}\n\n/* hover */\nul.tab li div:hover {\n    background-color: #b3b3b3; /*#999999;*/\n    cursor: pointer;\n}\n\n/* hover za trenutni na koji kliknemo */\nul.tab li div:focus, .active {\n    background-color: #80bfff;\n}\n\n/* sadrzaj izabrane godine */\n.tabcontent {\n    display: none;\n    padding: 20px 12px;\n    float:center;\n    font-family: 'Roboto',sans-serif;\n}\n\n.okvir {\n  list-style-type: none;\n  overflow: hidden;\n  border: \t#182627;\n  background-color: #303A3C;\n  width:150px;\n  padding: 0px;\n  margin-top:12px;\n  height:100%;\n}\n\nh1{\n  text-align: center;\n  margin: 5px;\n}\n\ndiv.PrikazPlasmana{\n  width: 60%;\n  height: auto;\n  display:table;\n  margin: 0 auto;\n}\n\n figure.prikaz {\n   color: #fff;\n   position: relative;\n   float: left;\n   overflow: hidden;\n   margin: 2%;\n   max-width: 320px;\n   width: 100%;\n   height: 180px;\n   background-color: #ffffff;\n   color: #000000;\n   text-align: left;\n   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n }\n\n #prikazPrvog{\n   float: none;\n   display: table;\n   margin: 0 auto;\n\n }\n #prikazDrugog{\n   float: left;\n }\n #prikazTreceg{\n   float: left;\n   margin-top: 35px;\n }\n div.text{\n   float: left;\n   width: 75%;\n   margin:0;\n   height: auto;\n   padding-bottom:20px;\n }\n div.media{\n   float: right;\n   width: 25%;\n   margin:0;\n }\ndiv.takmicari{\n  margin: 6px;\n  font-size: 20px;\n  font-weight: 400;\n  font-family: 'Roboto',sans-serif;\n}\n h2.NaslovTeme{\n   margin: 10px;\n   text-align: left;\n   font-weight: 500;\n   font-family: 'Roboto',sans-serif;\n }\n img{\n   -ms-flex:0 auto;\n       flex:0 auto;\n   float: right;\n   height: 100px;\n   margin: 10px 0 25px 0px;\n   width: 80px;\n }\n @media screen and (min-width: 1500px) {\n   .eventpicture{\n     min-height: 790px;\n   }\n   .info-overflow{\n     height: 802px;\n   }\n   .PrikazPlasmana{\n     width: 40%;\n   }\n   #prikazPrvog{\n     margin-left:250px;\n   }\n\n\n }\n @media screen and (max-width: 680px) {\n   .text1{\n     width: 70%;\n     font-size: 21px;\n   }\n   .name,.name span{\n       font-size: 35px;\n     }\n\n   .info-dash{\n     height: 500px;\n   }\n\n\n\n }\n @media screen and (max-width: 720px) {\n\n   figure{\n     float: left;\n     width:90%;\n   }\n   #prikazPrvog{\n     padding-left: 0;\n     margin-left: 10px;\n     margin-bottom: 10px;\n     float: left;\n   }\n   #prikazDrugog{\n     padding-left: 0;\n     margin-left: 10px;\n     margin-bottom: 10px;\n     float: left;\n   }\n   #prikazTreceg{\n     padding-left: 0;\n     margin-left: 10px;\n     margin-top: 0;\n     padding-top: 0;\n     float: left;\n   }\n   .prikaz{\n     padding-left: 0;\n     margin-left: 10px;\n\n     float: left;\n   }\n   .PrikazPlasmana{\n     width:80%;\n\n   }\n\n   .text{\n     padding-right: 80px;\n   }\n\n\n\n }\n @media screen and (max-width: 680px){\n\n figure{\n   float: left;\n   width:90%;\n }\n #prikazPrvog{\n   padding-left: 0;\n   margin-left: 10px;\n   margin-bottom: 10px;\n   float: left;\n }\n #prikazDrugog{\n   padding-left: 0;\n   margin-left: 10px;\n   margin-bottom: 10px;\n   float: left;\n }\n #prikazTreceg{\n   padding-left: 0;\n   margin-left: 10px;\n   margin-top: 0;\n   padding-top: 0;\n   float: left;\n }\n .prikaz{\n   padding-left: 0;\n   margin-left: 10px;\n\n   float: left;\n }\n .PrikazPlasmana{\n   width:80%;\n\n }\n\n .text{\n   padding-right: 60px;\n\n }\n\n\n}\n@media screen and (max-width: 920px){\n\nfigure{\n  float: left;\n  width:90%;\n}\n#prikazPrvog{\n  padding-left: 20;\n  margin-left: 20px;\n  margin-bottom: 10px;\n  float: left;\n}\n#prikazDrugog{\n  padding-left: 20;\n  margin-left: 20px;\n  margin-bottom: 15px;\n  float: left;\n}\n#prikazTreceg{\n  padding-left: 20;\n  margin-left: 20px;\n  margin-top: 0;\n  padding-top: 0;\n  float: left;\n}\n.prikaz{\n  padding-left: 20;\n  margin-left: 20px;\n\n  float: left;\n}\n.PrikazPlasmana{\n  width:80%;\n\n}\n\n.text{\n  padding-right: 60px;\n\n}\n.text2{\n  padding-left: 30px;\n\n}\n}\n\n@media only screen and (min-width: 1024px) and (max-width: 1366px)\n  and (-webkit-min-device-pixel-ratio: 1.5) {\n    figure{\n      float: left;\n      width:90%;\n\n    }\n    #prikazPrvog{\n      padding-left: 20;\n      margin-left: 20px;\n      margin-bottom: 10px;\n      float: left;\n    }\n    #prikazDrugog{\n      padding-left: 20;\n      margin-left: 20px;\n      margin-bottom: 15px;\n      float: left;\n    }\n    #prikazTreceg{\n      padding-left: 20;\n      margin-left: 20px;\n      margin-top: 0;\n      padding-top: 0;\n      float: left;\n    }\n    .prikaz{\n      padding-left: 20;\n      margin-left: 20px;\n\n      float: left;\n    }\n    .PrikazPlasmana{\n      width:80%;\n\n    }\n\n    .text{\n      padding-right: 60px;\n\n    }\n    .text2{\n      padding-left: 30px;\n\n    }\n}\n\n@media only screen and (max-width: 1030px) {\n  .drugi_dio{\n    margin-right: 1px;\n    width: 70%;\n    float: left;\n    margin-top: 15px;\n    padding: 0px;\n  }\n  h1{\n    margin-top: 40px;\n  font-size: 25px;\n\n  }\n  hr {\n    max-width: 40px;\n    border-width: 3px;\n    margin-bottom: 50px;\n  }\n  .text3{\n    margin-left: 0px;\n    margin-top: 40px;\n    letter-spacing: 0px;\n    font-size: 15px;\n    padding-bottom: 80px;\n  }\n  .prvi {\n    width:15%;\n  }\n  ul.tab {\n      list-style-type: none;\n      overflow: hidden;\n      border: \t#182627;\n      background-color: #2D3B3C;  /* ili ova boja? #2A3C41 \t*/\n      font-family: \"Roboto\", sans-serif;\n      width:100%;\n      padding: 0px;\n      margin-top:12px;\n      height: 100%;\n  }\n\n  /* stil za elemente liste */\n  ul.tab li div {\n      display: block;\n      color: #fff;\n      text-align: center;\n      padding: 14px 20px;\n      text-decoration: none;\n      transition: 0.3s;\n      font-size: 14px;\n      width: 100%;\n      height: 100%;\n      font-family: 'Roboto',sans-serif;\n      font-style: 500;\n      line-height: 1.3em;\n      letter-spacing: 1px;\n  }\n}\n\n@media only screen and (max-width: 720px) {\n  .drugi_dio{\n    margin-right: 1px;\n    width: 60%;\n    float: left;\n    margin-top: 15px;\n    padding: 0px;\n  }\n  h1{\n    margin-top: 40px;\n  font-size: 25px;\n\n  }\n  hr {\n    max-width: 40px;\n    border-width: 3px;\n    margin-bottom: 50px;\n  }\n  .text3{\n    margin-left: 0px;\n    margin-top: 40px;\n    letter-spacing: 0px;\n    font-size: 15px;\n    padding-bottom: 80px;\n  }\n  .prvi {\n    width:20%;\n  }\n  ul.tab {\n      list-style-type: none;\n      overflow: hidden;\n      border: \t#182627;\n      background-color: #2D3B3C;  /* ili ova boja? #2A3C41 \t*/\n      font-family: \"Roboto\", sans-serif;\n      width:100%;\n      padding: 0px;\n      margin-top:12px;\n      height: 100%;\n  }\n\n  /* stil za elemente liste */\n  ul.tab li div {\n      display: block;\n      color: #fff;\n      text-align: center;\n      padding: 14px 20px;\n      text-decoration: none;\n      transition: 0.3s;\n      font-size: 14px;\n      width: 100%;\n      height: 100%;\n      font-family: 'Roboto',sans-serif;\n      font-style: 500;\n      line-height: 1.3em;\n      letter-spacing: 1px;\n  }\n}\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = ".eventpicture{\n  width: 100%;\n  height: 662px;\n  min-height: 650px;\n  background-image:url('https://image.ibb.co/kMz9WR/final.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n}\n.info-overflow::before{\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 30%, #002f40 100%);\n}\n.info-inner{\n  z-index: 2;\n}\n.info-inner::after{\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.event-info{\n    color: #fff;\n    font-family: 'Roboto Condensed';\n    font-style: normal;\n    font-size: 46px;\n    line-height: 1em;\n    font-weight: bold;\n    letter-spacing: -1px;\n    text-transform: uppercase;\n\n}\n.name{\n    font-size: 45px;\n    letter-spacing: -1px;\n    line-height: 40px;\n}\n\n.place,.date{\ncolor: #fff;\nfont-size: 26px;\nline-height: 1.2em;\nfont-family: 'Roboto Condensed';\nfont-weight: 400;\nletter-spacing: -1px;\nmargin-bottom: 10px;\nmargin-top: 10px;\ntext-transform: uppercase;\n}\n*:before,*:after{\n  box-sizing: border-box;\n}\n.info-overflow{\n  transform: translateZ(0);\n    height: 662px;\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    z-index: 4;\n}\n\n.info-dash{\n    background-size: 100% auto;\n    bottom:  0px;\n    height: 392px;\n    top: auto;\n    width: 510px !important;\n    background:url('https://image.ibb.co/bKYS2b/gradient.png')right top no-repeat;\n    transform: translateX(0);\n    left: 0;\n    padding:30px;\n    position: absolute;\n    z-index: 4;\n}\n.info-dash:after{\n  content: \"\";\n  display: block;\n  height: 150px;\n  width: 100%;\n}\n\ndiv{\n  display: block;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;;\n  margin: 0;\n  padding: 0;\n}\n*{\n  text-rendering: geometricPrecision;\n  box-sizing: border-box;\n  outline: 0;\n}\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "  .eventpicture{\n    width: 100%;\n    height: 400px;\n\n    min-height: 650px;\n    background-image:url('https://image.ibb.co/dFnbXn/face_1520081338168_9543.jpg');\n    background-size: cover;\n    background-attachment:fixed;\n    background-position:center center;\n    opacity: 0.9;\n  }\n  .info-overflow::before{\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    z-index: 3;\n    width: 100%;\n    height: 100%;\n    display: block;\n    content: \"\";\n    background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 30%, #002f40 100%);\n  }\n  .info-inner{\n    z-index: 2;\n  }\n  .info-inner::after{\n      content: \"\";\n      display: table;\n      clear: both;\n  }\n  .event-info{\n      color: #fff;\n      font-family: 'Roboto Condensed';\n      font-style: normal;\n      font-size: 46px;\n      line-height: 1em;\n      font-weight: bold;\n      letter-spacing: -1px;\n      text-transform: uppercase;\n  }\n\n  .text1 {\n    color: #fff;\n    font-family: 'Roboto Condensed';\n    font-style:normal;\n    font-size: 15px;\n    line-height: 1.3em;\n    font-weight:lighter;\n    letter-spacing: 0px;\n    text-transform:none;\n  }\n  .name{\n      font-size: 45px;\n      letter-spacing: -1px;\n      line-height: 40px;\n      padding-bottom: 30px;\n  }\n\n  .info-overflow{\n    transform: translateZ(0);\n      height: 662px;\n      overflow: hidden;\n      position: absolute;\n      width: 100%;\n      z-index: 4;\n  }\n\n  .info-dash{\n      background-size: 100% auto;\n      bottom:  0px;\n      height: 492px;\n      top: auto;\n      width: 510px !important;\n      background:url('https://image.ibb.co/bKYS2b/gradient.png')right top no-repeat;\n      transform: translateX(0);\n      left: 0;\n      padding:30px;\n      position: absolute;\n      z-index: 4;\n  }\n  .info-dash:after{\n    content: \"\";\n    display: block;\n    height: 150px;\n    width: 100%;\n  }\n\n  div{\n    display: block;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;;\n    margin: 0;\n    padding: 0;\n  }\n  *{\n    text-rendering: geometricPrecision;\n    box-sizing: border-box;\n    outline: 0;\n  }\n\n  @media screen and (max-width: 1130px) {\n  }\n\n  @media screen and (max-width: 920px) {\n  }\n\n  @media screen and (max-width: 720px) {\n  }\n\n  @media screen and (max-width: 680px) {\n    .info-dash{\n        background-size: 100% auto;\n        bottom:  0px;\n        height: 492px;\n        top: auto;\n        width: 350px !important;\n        transform: translateX(0);\n        left: 0;\n        padding:30px;\n        position: absolute;\n        z-index: 4;\n    }\n    .info-dash:after{\n      content: \"\";\n      display: block;\n      height: 150px;\n      width: 100%;\n    }\n    .eventpicture{\n      margin: 2px;\n    }\n\n  }\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "  .eventpicture{\n    width: 100%;\n    height: 400px;\n\n    min-height: 650px;\n      background-image:url('http://www.zastavki.com/pictures/originals/2014/World___Italy_Summer_vacation_at_the_beach_in_the_resort_of_Rimini__Italy_063110_.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment:fixed;\n    background-position:center center;\n    opacity: 0.9;\n  }\n  .info-overflow::before{\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    z-index: 3;\n    width: 100%;\n    height: 100%;\n    display: block;\n    content: \"\";\n    background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 30%, #002f40 100%);\n  }\n  .info-inner{\n    z-index: 2;\n  }\n  .info-inner::after{\n      content: \"\";\n      display: table;\n      clear: both;\n  }\n  .event-info{\n      color: #fff;\n      font-family: 'Roboto Condensed';\n      font-style: normal;\n      font-size: 46px;\n      line-height: 1em;\n      font-weight: bold;\n      letter-spacing: -1px;\n      text-transform: uppercase;\n  }\n\n  .text1 {\n    color: #fff;\n    font-family: 'Roboto Condensed';\n    font-style:normal;\n    font-size: 15px;\n    line-height: 1.3em;\n    font-weight:lighter;\n    letter-spacing: 0px;\n    text-transform:none;\n  }\n  .name{\n      font-size: 45px;\n      letter-spacing: -1px;\n      line-height: 40px;\n      padding-bottom: 30px;\n  }\n\n  .info-overflow{\n    transform: translateZ(0);\n      height: 662px;\n      overflow: hidden;\n      position: absolute;\n      width: 100%;\n      z-index: 4;\n  }\n\n  .info-dash{\n      background-size: 100% auto;\n      bottom:  0px;\n      height: 492px;\n      top: auto;\n      width: 510px !important;\n      background:url('https://image.ibb.co/bKYS2b/gradient.png')right top no-repeat;\n      transform: translateX(0);\n      left: 0;\n      padding:30px;\n      position: absolute;\n      z-index: 4;\n  }\n  .info-dash:after{\n    content: \"\";\n    display: block;\n    height: 150px;\n    width: 100%;\n  }\n\n  div{\n    display: block;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;;\n    margin: 0;\n    padding: 0;\n  }\n  *{\n    text-rendering: geometricPrecision;\n    box-sizing: border-box;\n    outline: 0;\n  }\n\n  @media screen and (max-width: 1130px) {\n  }\n\n  @media screen and (max-width: 920px) {\n  }\n\n  @media screen and (max-width: 720px) {\n  }\n\n  @media screen and (max-width: 680px) {\n    .info-dash{\n        background-size: 100% auto;\n        bottom:  0px;\n        height: 492px;\n        top: auto;\n        width: 350px !important;\n        transform: translateX(0);\n        left: 0;\n        padding:30px;\n        position: absolute;\n        z-index: 4;\n    }\n    .info-dash:after{\n      content: \"\";\n      display: block;\n      height: 150px;\n      width: 100%;\n    }\n    .eventpicture{\n      margin: 2px;\n    }\n\n  }\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "\n.eventpicture{\n  width: 100%;\n  height: 400px;\n  min-height: 650px;\n  background-image:url('http://treca-gimnazija.edu.ba/wp-content/uploads/2017/04/17777048_10212005603352038_1477071201_o.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n  opacity: 0.9;\n}\n.info-overflow::before{\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 30%, #002f40 100%);\n}\n.info-inner{\n  z-index: 2;\n}\n.info-inner::after{\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.event-info{\n    color: #fff;\n    font-family: 'Roboto Condensed';\n    font-style: normal;\n    font-size: 46px;\n    line-height: 1em;\n    font-weight: bold;\n    letter-spacing: -1px;\n    text-transform: uppercase;\n}\n\n.text1 {\n  color: #fff;\n  font-family: 'Roboto Condensed';\n  font-style:normal;\n  font-size: 15px;\n  line-height: 1.3em;\n  font-weight:lighter;\n  letter-spacing: 0px;\n  text-transform:none;\n}\n.name{\n    font-size: 45px;\n    letter-spacing: -1px;\n    line-height: 40px;\n    padding-bottom: 30px;\n}\n\n.info-overflow{\n  transform: translateZ(0);\n    height: 662px;\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    z-index: 4;\n}\n\n.info-dash{\n    background-size: 100% auto;\n    bottom:  0px;\n    height: 492px;\n    top: auto;\n    width: 510px !important;\n    background:url('https://image.ibb.co/bKYS2b/gradient.png')right top no-repeat;\n    transform: translateX(0);\n    left: 0;\n    padding:30px;\n    position: absolute;\n    z-index: 4;\n}\n.info-dash:after{\n  content: \"\";\n  display: block;\n  height: 150px;\n  width: 100%;\n}\n\ndiv{\n  display: block;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;;\n  margin: 0;\n  padding: 0;\n}\n*{\n  text-rendering: geometricPrecision;\n  box-sizing: border-box;\n  outline: 0;\n}\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = ".eventpicture{\n  width: 100%;\n  height: 400px;\n\n  min-height: 650px;\n  background-image:url('http://steleks.ba/wp-content/gallery/osmomartovski-steleks-kviz/ed2f2602641466cfe2b3cfa4f55a4d7d9868bae1b7bec51d4372f7883aa6d283.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n  opacity: 0.9;\n}\n.info-overflow::before{\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 30%, #002f40 100%);\n}\n.info-inner{\n  z-index: 2;\n}\n.info-inner::after{\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.event-info{\n    color: #fff;\n    font-family: 'Roboto Condensed';\n    font-style: normal;\n    font-size: 46px;\n    line-height: 1em;\n    font-weight: bold;\n    letter-spacing: -1px;\n    text-transform: uppercase;\n}\n\n.text1 {\n  color: #fff;\n  font-family: 'Roboto Condensed';\n  font-style:normal;\n  font-size: 15px;\n  line-height: 1.3em;\n  font-weight:lighter;\n  letter-spacing: 0px;\n  text-transform:none;\n}\n.name{\n    font-size: 45px;\n    letter-spacing: -1px;\n    line-height: 40px;\n    padding-bottom: 30px;\n}\n\n.info-overflow{\n  transform: translateZ(0);\n    height: 662px;\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    z-index: 4;\n}\n\n.info-dash{\n    background-size: 100% auto;\n    bottom:  0px;\n    height: 492px;\n    top: auto;\n    width: 510px !important;\n    background:url('https://image.ibb.co/bKYS2b/gradient.png')right top no-repeat;\n    transform: translateX(0);\n    left: 0;\n    padding:30px;\n    position: absolute;\n    z-index: 4;\n}\n.info-dash:after{\n  content: \"\";\n  display: block;\n  height: 150px;\n  width: 100%;\n}\n\ndiv{\n  display: block;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;;\n  margin: 0;\n  padding: 0;\n}\n*{\n  text-rendering: geometricPrecision;\n  box-sizing: border-box;\n  outline: 0;\n}\n\n@media screen and (max-width: 1130px) {\n}\n\n@media screen and (max-width: 920px) {\n}\n\n@media screen and (max-width: 720px) {\n}\n\n@media screen and (max-width: 680px) {\n  .info-dash{\n      background-size: 100% auto;\n      bottom:  0px;\n      height: 492px;\n      top: auto;\n      width: 350px !important;\n      background:url('https://image.ibb.co/bKYS2b/gradient.png')right top no-repeat;\n      transform: translateX(0);\n      left: 0;\n      padding:30px;\n      position: absolute;\n      z-index: 4;\n  }\n  .info-dash:after{\n    content: \"\";\n    display: block;\n    height: 150px;\n    width: 100%;\n  }\n  .eventpicture{\n    margin: 2px;\n  }\n\n}\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #414141;\n  width: 100%;\n  text-align: left;\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  padding: 20px;\n  margin-top: 50px;\n  padding-left: 50px;\n}\nimg{\n  height: 60px;\n}\n.footer .footer-left,\n.footer .footer-center,\n.footer .footer-right2,\n.footer .footer-right {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 10px;\n  margin-left:15px;\n}\n\n.footer .footer-left {\n  width: 22%;\n  padding-right: 15px;\n}\n\n.footer .footer-center {\n  width: 25%;\n  padding-top: 20px;\n}\n\n.footer .footer-right2 {\n  width: 22%;\n  padding-top: 20px;\n  padding-left:25px;\n}\n\n.footer .footer-right {\n  width: 25%;\n  padding-top: 15px;\n}\n\n\n.footer .icons {\n  margin-top: 25px;\n}\n\n.footer .icons a {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  background-color: #33383b;\n  border-radius: 2px;\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 35px;\n  margin-right: 3px;\n  margin-bottom: 5px;\n}\n\n\n.footer .footer-center i {\n  background-color: #33383b;\n  color: #ffffff;\n  font-size: 25px;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 42px;\n  margin: 10px 15px;\n  vertical-align: middle;\n}\n\n.fa-envelope a{\n  font-size: 18px;\n  line-height: 38px;\n  font-weight: 700;\n}\n\n.footer .footer-center p {\n  display: inline-block;\n  color: #ffffff;\n  vertical-align: middle;\n  margin: 0;\n}\n\n.footer .footer-center p span {\n  display: block;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 2;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n}\n\n.footer .footer-center p a {\n  color: #6492b4;\n  text-decoration: none;\n}\n\n\n/* footer right*/\n\n.footer .footer-right {\n  width: 35%;\n}\n\n.footer h2 {\n  color: #ffffff;\n  font-size: 36px;\n  font-weight: normal;\n  margin: 0;\n}\n\n.footer h2 span {\n  color: #6492b4;\n}\n\n.footer .name {\n  color: #6492b4;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n}\n\n.lokacija {\n  width:100%;\n  margin:10px;\n  position:block;\n}\n\n.left {\n  float:left;\n  padding-left: 20px;\n}\n\n.friends {\n  margin:0px auto;\n  display: block;\n  color: white;\n  text-decoration: underline;\n  text-align: left;\n  padding-left: 20px;\n}\n\n.friends2 {\n  margin-bottom: 60px;\n}\n.friends2 a{\n  color: #6492b4;\n  font-weight: 700;\n}\n\n\n\n\n@media (max-width: 767px) {\n  .footer {\n    font-size: 14px;\n  }\n  .footer .footer-left,\n  .footer .footer-center,\n  .footer .footer-right {\n    display: block;\n    width: 100%;\n    margin-bottom: 40px;\n    text-align: center;\n  }\n  .footer .footer-center i {\n    margin-left: 0;\n  }\n}\n@media screen and (max-width: 1130px) {\n  .footer .footer-left {\n    width: 38%;\n  }\n  .footer .footer-right2 {\n    width: 40%;\n    margin-right: 40px;\n    padding-left: 40px;\n  }\n  .footer .footer-center {\n    margin-top: 0px;\n    float: left;\n    width: 45%;\n  }\n  .friends {\n    padding-left: 50px;\n    text-align: left;\n  }\n  .friends2 {\n    margin-bottom: 30px;\n  }\n  .footer .footer-left,\n  .footer .footer-center,\n  .footer .footer-right2,\n  .footer .footer-right {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 10px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .footer .footer-left {\n    width: 38%;\n  }\n  .footer .footer-right2 {\n    width: 40%;\n    margin-right: 62px;\n    padding-left: 40px;\n  }\n  .footer .footer-center {\n    margin-top: 0px;\n    float: left;\n    width: 50%;\n  }\n  .friends {\n    padding-left: 50px;\n    text-align: left;\n  }\n  .friends2 {\n    margin-bottom: 30px;\n  }\n  .footer .footer-left,\n  .footer .footer-center,\n  .footer .footer-right2,\n  .footer .footer-right {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 10px;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .footer .footer-left {\n    width: 38%;\n    margin-bottom: 0px;\n  }\n  .footer .footer-right2 {\n    width: 40%;\n    margin-right: 52px;\n    padding-left: 39px;\n  }\n  .footer .footer-center {\n    margin-top: 0px;\n    margin-bottom: 0px;\n    float: left;\n    width: 50%;\n  }\n  .friends {\n    padding-left: 50px;\n    text-align: left;\n  }\n  .friends2 {\n    margin-bottom: 30px;\n  }\n  .footer {\n    padding-left: 20px;\n  }\n  .footer .footer-left,\n  .footer .footer-center,\n  .footer .footer-right2,\n  .footer .footer-right {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 10px;\n  }\n}\n\n\n@media screen and (max-width: 720px) {\n  .footer .footer-left {\n    width: 90%;\n  }\n  .footer .footer-right2 {\n    width: 90%;\n  }\n  .footer .footer-center {\n    margin-top: 0px;\n    float: left;\n    width: 90%;\n  }\n  .friends {\n    padding-left: 40px;\n    text-align: left;\n  }\n  .friends2 {\n    margin-bottom: 30px;\n  }\n  .footer {\n    padding-left: 20px;\n  }\n  .footer .footer-left,\n  .footer .footer-center,\n  .footer .footer-right2,\n  .footer .footer-right {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 10px;\n    margin-left:0px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .footer-left {\n    width: 90%;\n  }\n  .footer-right {\n    width: 90%;\n  }\n  .footer-center {\n    width: 90%;\n  }\n}\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "html {\n    height: 100%;\n}\n\nbody{\n\n  position: absolute;\n  width:100%;\n  height:auto;\n  margin: 0;\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  opacity: 1;\n}\n.elektrijada\n{\n\n  width:100%;\n  height: auto;\n  padding-top: 125px;\n  padding-bottom: 50px;\n}\nh2{\n  background: #4D4D4D;\n  text-align: center;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\ntextarea{\n  resize:vertical;\n  max-height:100px;\n  min-height:40px;\n  width: 100%;\n  height: 100px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n}\ntextarea:focus{\n  border: 1px solid #4D4D4D;\n  outline: none;\n}\ntextarea::-webkit-input-placeholder{\n  color: #aaa;\n}\ntextarea:-ms-input-placeholder{\n  color: #aaa;\n}\ntextarea::placeholder{\n  color: #aaa;\n}\n\n\ninput[type=\"text\"]{\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  float: left;\n  font-family: 'Roboto',sans-serif;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"file\"]{\n    float: left;\n    padding: 5px;\n    font-size: 14px;\n    font-weight: 400;\n    background-color: white;\n    color: #3B3B3D;\n    font-family: 'Roboto', sans-serif;\n  }\n\n  input[type=\"text1\"]\n  {\n    float: left;\n    padding: 5px;\n    font-size: 14px;\n    font-weight: 400;\n    background-color: white;\n    color: #3B3B3D;\n    border: 1px solid #cccccc;\n    border-radius: 4px;\n    font-family: 'Roboto',sans-serif;\n  }\n  input[type=\"text1\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text1\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text1\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text1\"]::placeholder {\n    color: #aaa;\n  }\n  label{\n    float: left;\n    font-size: 14px;\n    font-weight: 400;\n    font-family: 'Roboto',sans-serif;\n    padding-right: 15px;\n  }\n\n.groupBox {\n  float: left;\n  width: 26.5%;\n  margin:26px;\n  padding: 10px;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.groupBox1 {\n  width: 90%;\n  margin:26px;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.groupBox2 {\n  width: 90%;\n  margin-top:26px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-bottom:26px;\n}\n.groupBox3{\n  margin-top: 50px;\n  padding-bottom: 20px;\n  float: right;\n  padding-right: 40px;\n\n}\n.form-content input[type=\"button\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto-Condensed';\n    font-size: 14px;\n    margin: 35px;\n    margin-right: 50px;\n    margin-top: 15px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"button\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n\n.form-content{\n  position: relative;\n  height: auto;\n  width: 70%;\n  display: table;\n  margin:0px auto;\n  background-color: #fff;\n}\n\n.form-content input[type=\"button\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto', sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    margin: 35px;\n    margin-right: 50px;\n    margin-top: 15px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"button\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n\n\n\n@media screen and (max-width: 1130px) {\n  .form-content{\n    width: 70%;\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n  .form-content input[type=\"button\"]{\n    margin-right: 75px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .groupBox{\n    width: 80%;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .groupBox{\n    width: 80%;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n}\n@media screen and (width: 412px) {\n  .groupBox{\n    width: 80%;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n\n}\n\n\n@media screen and (max-width: 680px) {\n  .groupBox{\n    width: 80%;\n\n  }\n  .groupBox1{\n    width: 80%;\n\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  body{\n    height:auto;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1366px)\n  and (-webkit-min-device-pixel-ratio: 1.5) {\n    body{\n      height: auto;\n    }\n}\n@media only screen and (max-width: 768px){\n  body{\n    height: auto;\n  }\n}\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "html {\n    height: 100%;\n}\n\nbody{\n\n  position: absolute;\n  width:100%;\n  height:auto;\n  margin: 0;\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  opacity: 1;\n}\n.elektrijada\n{\n\n  width:100%;\n  height: auto;\n  padding-top: 125px;\n  padding-bottom: 50px;\n}\nh2{\n  background: #4D4D4D;\n  text-align: center;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\ntextarea{\n  resize:vertical;\n  max-height:100px;\n  min-height:40px;\n  width: 100%;\n  height: 100px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n}\ntextarea:focus{\n  border: 1px solid #4D4D4D;\n  outline: none;\n}\ntextarea::-webkit-input-placeholder{\n  color: #aaa;\n}\ntextarea:-ms-input-placeholder{\n  color: #aaa;\n}\ntextarea::placeholder{\n  color: #aaa;\n}\n\n\ninput[type=\"text\"]{\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  float: left;\n  font-family: 'Roboto',sans-serif;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"file\"]{\n    float: left;\n    padding: 5px;\n    font-size: 14px;\n    font-weight: 400;\n    background-color: white;\n    color: #3B3B3D;\n    font-family: 'Roboto', sans-serif;\n  }\n\n  input[type=\"text1\"]\n  {\n    float: left;\n    padding: 5px;\n    font-size: 14px;\n    font-weight: 400;\n    background-color: white;\n    color: #3B3B3D;\n    border: 1px solid #cccccc;\n    border-radius: 4px;\n    font-family: 'Roboto',sans-serif;\n  }\n  input[type=\"text1\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text1\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text1\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text1\"]::placeholder {\n    color: #aaa;\n  }\n  label{\n    float: left;\n    font-size: 14px;\n    font-weight: 400;\n    font-family: 'Roboto',sans-serif;\n    padding-right: 15px;\n  }\n\n.groupBox {\n  float: left;\n  width: 26.5%;\n  margin:26px;\n  padding: 10px;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.groupBox1 {\n  width: 90%;\n  margin:26px;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.groupBox2 {\n  width: 90%;\n  margin-top:26px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-bottom:26px;\n}\n.groupBox3{\n  margin-top: 50px;\n  padding-bottom: 20px;\n  float: right;\n  padding-right: 40px;\n\n}\n.form-content input[type=\"button\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto-Condensed';\n    font-size: 14px;\n    margin: 35px;\n    margin-right: 50px;\n    margin-top: 15px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"button\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n\n.form-content{\n  position: relative;\n  height: auto;\n  width: 70%;\n  display: table;\n  margin:0px auto;\n  background-color: #fff;\n}\n\n.form-content input[type=\"button\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto', sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    margin: 35px;\n    margin-right: 50px;\n    margin-top: 15px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"button\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n\n\n\n@media screen and (max-width: 1130px) {\n  .form-content{\n    width: 70%;\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n  .form-content input[type=\"button\"]{\n    margin-right: 75px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .groupBox{\n    width: 80%;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .groupBox{\n    width: 80%;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n}\n@media screen and (width: 412px) {\n  .groupBox{\n    width: 80%;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n\n}\n\n\n@media screen and (max-width: 680px) {\n  .groupBox{\n    width: 80%;\n\n  }\n  .groupBox1{\n    width: 80%;\n\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  body{\n    height:auto;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1366px)\n  and (-webkit-min-device-pixel-ratio: 1.5) {\n    body{\n      height: auto;\n    }\n}\n@media only screen and (max-width: 768px){\n  body{\n    height: auto;\n  }\n}\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "html {\n    height: 100%;\n}\n\nbody{\n\n  position: absolute;\n  width:100%;\n  height:auto;\n  margin: 0;\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  opacity: 1;\n}\n.elektrijada\n{\n\n  width:100%;\n  height: auto;\n  padding-top: 125px;\n  padding-bottom: 50px;\n}\ntextarea{\n  resize:vertical;\n  max-height:100px;\n  min-height:40px;\n  width: 100%;\n  height: 100px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n}\ntextarea:focus{\n  border: 1px solid #4D4D4D;\n  outline: none;\n}\ntextarea::-webkit-input-placeholder{\n  color: #aaa;\n}\ntextarea:-ms-input-placeholder{\n  color: #aaa;\n}\ntextarea::placeholder{\n  color: #aaa;\n}\n\n\ninput[type=\"text\"]{\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  float: left;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n  legend{\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 16px;\n    color: #ffffff;\n    font-family: 'Roboto-Condensed';\n    font: bold;\n  background-color:#4D4D4D;\n  }\n.groupBox {\n  float: left;\n  width: 26.5%;\n  margin:26px;\n  padding: 10px;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.groupBox1 {\n  width: 90%;\n  margin:26px;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.groupBox2 {\n  padding-top: 50px;\n  padding-bottom: 20px;\n  float: right;\n  padding-right: 40px;\n}\n\n.form-content{\n  position: relative;\n  height: auto;\n  width: 70%;\n  display: table;\n  margin:0px auto;\n  background-color: #fff;\n}\nh2{background: #4D4D4D;\n  text-align: center;\n    text-transform: uppercase;\n    font-family: 'Roboto-Condensed';\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\n.form-content input[type=\"button\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto-Condensed';\n    font-size: 14px;\n    margin: 35px;\n    margin-right: 50px;\n    margin-top: 15px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"button\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n\n\n\n@media screen and (max-width: 1130px) {\n  .form-content{\n    width: 70%;\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n  .form-content input[type=\"button\"]{\n    margin-right: 75px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .groupBox{\n    width: 80%;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .groupBox{\n    width: 80%;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n}\n@media screen and (width: 412px) {\n  .groupBox{\n    width: 80%;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n\n}\n\n\n@media screen and (max-width: 680px) {\n  .groupBox{\n    width: 80%;\n\n  }\n  .groupBox1{\n    width: 80%;\n\n  }\n  .elektrijada{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  body{\n    height:100%;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1366px)\n  and (-webkit-min-device-pixel-ratio: 1.5) {\n    body{\n      height: 100%;\n    }\n}\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "html {\n    height: 100%;\n}\n\nbody{\n\n  position: absolute;\n  width:100%;\n  height:100%;\n  margin: 0;\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  opacity: 1;\n}\n.prijava\n{\n  width: 100%;\n  height: auto;\n  padding-top: 125px;\n  padding-bottom: 50px;\n}\n\ninput[type=\"text\"]{\n  width: 87%;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  font-family: 'Roboto', sans-serif;\n}\ninput[type=\"file\"]{\n  width: 87%;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  font-family: 'Roboto', sans-serif;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n\n\n.groupBox {\n\n  width: 100%;\n  margin-right: 10px;\n  margin-left: 10px;\n    border-color: black;\n    border-style: double;\n    z-index: 32;\n    background-color: #fff;\n}\n\n.form-content{\n  position: relative;\n  height: auto;\n  width: 40%;\n  display: table;\n  margin:0px auto;\n\tborder-radius: 5px;\n\tpadding:20px;\n}\n\nh2{background: #4D4D4D;\n  text-align: center;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\n.form-content input[type=\"button\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto', sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    margin: 39px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"button\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n@media screen and (max-width: 1130px) {\n  .form-content{\n    width: 50%;\n    padding:20px;\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 40px;\n    margin-left: 40px;\n  }\n  .form-content input[type=\"button\"] {\n    margin-right: 50px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .form-content{\n    width: 50%;\n    padding:20px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 30px;\n    margin-left: 30px;\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  .form-content input[type=\"button\"] {\n    margin-right: 40px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n  .groupBox{\n    width: 95%;\n    margin-right: 10px;\n    margin-left: 10px;\n  }\n\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  .form-content input[type=\"button\"] {\n    margin-right: 35px;\n  }\n\n}\n\n@media screen and (max-width: 600px) {\n  .form-content{\n    width: 100%;\n    padding:20px;\n\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 30px;\n    margin-left: 30px;\n  }\n  .form-content input[type=\"button\"] {\n    margin-right: 35px;\n  }\n}\n@media only screen and (max-width: 1367px){\n  div.prijava{\n    min-width: 0;\n  }\n  div.form-content{\n    min-width: 0;\n  }\n}\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "html {\n    height: 100%;\n}\n\nbody{\n\n  position: absolute;\n  width:100%;\n  height:auto;\n  margin: 0;\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  opacity: 1;\n}\n.sifi\n{\n\n  width:100%;\n  height: auto;\n  padding-top: 125px;\n  padding-bottom: 50px;\n}\n.form-control{\n  margin-right: 50px;\n}\n.form-content{\n  position: relative;\n  height: auto;\n  width: 70%;\n  display: table;\n  margin:0px auto;\n  background-color: #fff;\n}\n.groupBox1 {\n  width: 90%;\n  margin:26px;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.groupBox2 {\n  margin-top: 50px;\n  padding-bottom: 20px;\n  float: right;\n  padding-right: 40px;\n}\n.groupBox {\n  float: left;\n  width: 26.5%;\n  margin:26px;\n  padding: 10px;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\nh2{background: #4D4D4D;\n  text-align: center;\n    text-transform: uppercase;\n    font-family: 'Roboto-Condensed';\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\ninput[type=\"text\"]{\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  float: left;\n}\n\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n  .fileContainer{\n    width: 69%;\n\n    position: relative;\n  }\n  .rad{\n    width:100%;\n\n  }\n\n  input[type=\"file\"] {\n    width: 100%;\n    margin-left: 0px;\n    margin-right: 0px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 5px;\n    font-size: 14px;\n    font-weight: 400;\n    background-color: white;\n    color: #3B3B3D;\n    border: 1px solid white;\n    border-radius: 4px;\n    float: left;\n  }\n  .button2 {\n    width: 69%;\n    margin-left: 0px;\n    margin-right: 0px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 3px;\n    font-size: 14px;\n    font-weight: 400;\n    background-color:#DDDDDD;\n    color: black;\n    border: 1px solid #cccccc;\n    border-radius: 4px;\n    float: left;\n    cursor: pointer;\n    transition: background-color 0.16s ease-out;\n    }\n\n  .button2:hover {\n      background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n      background-color:#666666;\n  }\ntextarea{\n  resize:vertical;\n  max-height:100px;\n  min-height:40px;\n  width: 100%;\n  height: 100px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n}\ntextarea:focus{\n  border: 1px solid #4D4D4D;\n  outline: none;\n}\ntextarea::-webkit-input-placeholder{\n  color: #aaa;\n}\ntextarea:-ms-input-placeholder{\n  color: #aaa;\n}\ntextarea::placeholder{\n  color: #aaa;\n}\n\nlegend{\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 16px;\n  color: #ffffff;\n  font-family: 'Roboto-Condensed';\n  font: bold;\nbackground-color:#4D4D4D;\n}\n.form-content input[type=\"button\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto-Condensed';\n    font-size: 14px;\n    margin: 35px;\n    margin-right: 50px;\n    margin-top: 15px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"button\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n.table{\n  margin-top: 10px;\n  width:90%;\n  display: inline-table;\n\n}\n\n.btn{\n  font-size: 10px;\n  padding: 4px;\n\n}\ntd{\n  padding-right: 20px;\n}\n\n\n\n\n@media screen and (max-width: 1130px) {\n  .form-content{\n    width: 70%;\n  }\n  .sifi{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n  .form-content input[type=\"button\"]{\n    margin-right: 75px;\n  }\n  .form-control{\n    width: 60%;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .groupBox{\n    width: 80%;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n  .sifi{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n\n}\n\n@media screen and (max-width: 720px) {\n  .groupBox{\n    width: 80%;\n  }\n  .sifi{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n  .groupBox1{\n    width: 80%;\n  }\n\n}\n\n\n@media screen and (max-width: 680px) {\n  .groupBox{\n    width: 80%;\n\n  }\n  .groupBox1{\n    width: 80%;\n\n  }\n\n  .sifi{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 60px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  body{\n    height:100%;\n  }\n}\n@media only screen and (max-width: 1024px) and (max-width: 1366px)\n  and (-webkit-min-device-pixel-ratio: 1.5) {\n    body{\n      height: 100%;\n    }\n}\n@media only screen and (max-width: 768px){\n  body{\n    height: auto;\n  }\n}\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "html {\n    height: 100%;\n}\n\nbody{\n\n  position: absolute;\n  width:100%;\n  height:100%;\n  margin: 0;\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  opacity: 1;\n}\n.prijava\n{\n  width: 100%;\n  height: auto;\n  padding-top: 125px;\n  padding-bottom: 50px;\n}\n\ninput[type=\"text\"]{\n  width: 87%;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  font-family: 'Roboto', sans-serif;\n}\ninput[type=\"file\"]{\n  width: 87%;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  font-family: 'Roboto', sans-serif;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n\n\n.groupBox {\n\n  width: 100%;\n  margin-right: 10px;\n  margin-left: 10px;\n    border-color: black;\n    border-style: double;\n    z-index: 32;\n    background-color: #fff;\n}\n\n.form-content{\n  position: relative;\n  height: auto;\n  width: 40%;\n  display: table;\n  margin:0px auto;\n\tborder-radius: 5px;\n\tpadding:20px;\n}\n\nh2{background: #4D4D4D;\n  text-align: center;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\n.form-content input[type=\"button\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto', sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    margin: 39px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"button\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n@media screen and (max-width: 1130px) {\n  .form-content{\n    width: 50%;\n    padding:20px;\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 40px;\n    margin-left: 40px;\n  }\n  .form-content input[type=\"button\"] {\n    margin-right: 50px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .form-content{\n    width: 50%;\n    padding:20px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 30px;\n    margin-left: 30px;\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  .form-content input[type=\"button\"] {\n    margin-right: 40px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n  .groupBox{\n    width: 95%;\n    margin-right: 10px;\n    margin-left: 10px;\n  }\n\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  .form-content input[type=\"button\"] {\n    margin-right: 35px;\n  }\n\n}\n\n@media screen and (max-width: 600px) {\n  .form-content{\n    width: 100%;\n    padding:20px;\n\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 30px;\n    margin-left: 30px;\n  }\n  .form-content input[type=\"button\"] {\n    margin-right: 35px;\n  }\n}\n@media only screen and (max-width: 1367px){\n  div.prijava{\n    min-width: 0;\n  }\n  div.form-content{\n    min-width: 0;\n  }\n}\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "ul.tab {\n    list-style-type: none;\n    overflow: hidden;\n    border: 1px solid #ccc;\n    background-color: #add8e6;\n    font-family: \"Lato\", sans-serif;\n    margin-top:65px;\n}\n/* poravnanje u listi */\nul.tab li {\n  float: left;\n}\n\n/* stil za elemente liste */\nul.tab li div {\n    display: inline-block;\n    color: black;\n    text-align: center;\n    padding: 14px 20px;\n    text-decoration: none;\n    transition: 0.3s;\n    font-size: 16px;\n    font-family: \"Lato\", sans-serif;\n}\n\n/* hover */\nul.tab li div:hover {\n    background-color: #e6e6fa;\n\n}\n\n/* hover za trenutni na koji kliknemo */\nul.tab li div:focus, .active {\n    background-color: #80bfff;\n}\n\n\n/*za submenu css*/\n.dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n}\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n\n/* Links inside the dropdown */\n.dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n\n/* Show the dropdown menu on hover */\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n\n/* Change the background color of the dropdown button when the dropdown content is shown */\n.dropdown:hover .dropbtn {\n    background-color: #3e8e41;\n}\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "html{\n\nheight: 100%;\n\n}\nbody{\n  position: absolute;\n  width:100%;\n  height:auto;\n  margin: 0;\n  background-image:url('../../assets/images/galerijapozadina.png');background-repeat:repeat;\n\n}\n#overlay {\n  background: rgba(0,0,0, .8);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n  text-align: center;\n}\nh1{\n  font-family: 'Roboto', sans-serif;\n  font-weight: 700;\n  color: #213545;\n  font-size: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\nul {\n\n  width:780px;\n   margin:20px auto;\n    padding-top: 100px;\n  }\n  .gallery {\n  width: 640px;\n  margin: 0 auto;\n  padding: 5px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(0,0,0,.3);\n}\nli {\n  display:inline;\n}\n.tn{\nmargin: 2px;\n box-shadow:#999 1px 1px 3px 1px;\n cursor: pointer;\n width:24%;\n opacity: .88;\n\t}\n\nh1{\n  text-align: center;\n  font-size: 30px;\n}\ndiv#selectedImageModal.modal.fade.in\n{\n\tmargin: 0px;\n\tborder:0px;\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n}\n\n\n.seq-prev,\n.seq-next{\n  position: relative;\n  top: -55%;\n\n  width: 35px;\n  height: 66px;\n  border: none;\n  cursor: pointer;\n  pointer-events: auto;\n  transition-duration: .5s;\n  transform: translate3d(0, 0, 0);\n  opacity: 0.3;\n  /* Image replacement */\n  border: 0;\n  font: 0/0 a;\n  text-shadow: none;\n  color: transparent;\n}\n.seq-next{\n  right: -45%;\n  background: url(\"https://raw.githubusercontent.com/SequenceJS/modern-slide-in/ef79a3005818c71087c6abca2cda48f91ff3eb01/images/bt-next.png\");\n}\n.seq-prev {\nright:45%;\n  background: url(\"https://raw.githubusercontent.com/SequenceJS/modern-slide-in/ef79a3005818c71087c6abca2cda48f91ff3eb01/images/bt-prev.png\");\n}\n\n.seq-next:hover {\n  transform: translate3d(4px, 0, 0);\n  opacity: 0.6;\n}\n\n.seq-prev:hover {\n  transform: translate3d(-4px, 0, 0);\n  opacity: 0.6;\n}\n.modal{\n\n\npadding-left: 10%;\npadding-right: 10%;\n  text-align: center;\n\n\n  display: table;\n\n  left: 50%;\ntransform: translateX(-50%);\n}\n.selectedImage{\n  height: 100%;\n  max-height: 550px;\n  min-height: 500px;\n  max-width: 1000px;\n  transition: 0.5s;\n\t}\n\n.selectedImage img{\n  float: left;\n  width: 100%;\nbackground-size: contain;\n  margin: 5px auto;\n  padding-left: 5px;\n  padding-right:5px;\n  height: 100%;\n  max-height: 540px;\n}\n.modal-all{\nbackground-color: white;\nheight: 100%;\nwidth:100%;\nmax-height: 600px;\n\n\n}\n\n.caption{\n\n}\np {\n   -webkit-margin-before: 5px !important;\n   -webkit-margin-after: 5px !important;\n   width: 100%;\n}\n\n\n@media screen and (min-width: 1600px) {\n  body{\n    height:100%;\n  }\n  .modal{\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 1024px) and (max-width: 1366px)\n  and (-webkit-min-device-pixel-ratio: 1.5) {\n    body{\n      height: 100%;\n    }\n  }\n@media only screen and (max-width: 768px){\n  body{\n    height: auto;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  ul {\n\n        width: 100%;\n        min-width: 300px;\n        padding: 10px;\n\n\n      }\n      .gallery{\n        width: 100%;\n        min-width: 300px;\n      }\n      .tn{\n\n       box-shadow:#999 1px 1px 3px 1px;\n       cursor: pointer;\n       width:48%;\n       opacity: .88;\n      \t}\n\n      .modal{\n        max-height: 250px;\n        padding-left: 1px;\n        padding-right:1px;\n\n      }\n      .selectedImage{\n        min-height: 0px;\n        height: 250px;\n\n        width: 300px;\n\n\n      }\n      .modal-all{\n        height: 280px;\n      }\n      .selectedImage img{\n        max-height: 300px;\n      }\n      .seq-next{\n        right: -35%;\n\n\n      }\n      .seq-prev {\n      right:35%;\n\n      }\n      .seq-prev,\n      .seq-next{\n\n        top: -60%;\n\n\n      }\n\n\n\n}\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = ".backgroundimg{\n\nbackground-size: cover;\nbackground-position: top center;\nbackground-attachment: fixed;\nbackground-repeat: no-repeat;\n\nwidth:100%;\nheight: 662px;\nopacity: 1;\nmin-height: 450px;\n}\n\n.slogan{\nfont-family: 'Roboto', sans-serif;\nfont-size: 64px;\ntext-align: left;\ncolor: #fff;\nfont-weight: 900;\nline-height: 80px;\nletter-spacing: .18em;\npadding-top: 160px;\npadding-left: 15px;\n\n}\n.content-table{\ndisplay: table;\ntext-align: center;\n\nwidth: 100%;\nheight:100%;\n}\n.home-bottom{\n  padding-top: 100px;\n}\n.about{\n  text-align: left;\n  margin-right: 400px;\n  padding-left: 15px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  color: #fff;\n  font-size: 20px;\n  width: 50%;\n  padding-top: 30px;\n  letter-spacing: -1px;\n  line-height: 30px;\n}\n/*img.arrow{\n\n}*/\n.button{\ndisplay: inline-bloc;\nbackground: transparent;\nborder-radius: 0;\nletter-spacing: .2em;\nfont-size: 12px;\nfont-family: sans-serif;\nfont-weight: 100;\npadding-top: 8px;\npadding-bottom: 8px;\nz-index: inherit;\npointer-events:none;\ncolor: #fff;\nborder: 2px solid #fff;\nmargin: 90px;\ntext-decoration: none;\ntransition-duration: 0.9s;\n\n\n}\n.button:hover {\n  background: #fff;\n  color: grey;\n}\n.eventpicture{\n\n\n  min-height: 662px;\nbackground-image: url('../../assets/images/pozadina.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n}\n.info-overflow::before{\n  position: absolute;\n  top: 0;\n  left: 0;\npadding-top: 80px;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 50%, #002f40 100%);\n}\n.info-inner{\n  z-index: 2;\n}\n.info-inner::after{\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.event-info{\n    color: #fff;\n    font-family: 'Roboto Condensed';\n    font-style: normal;\n    font-size: 46px;\n    line-height: 1em;\n    font-weight: bold;\n    letter-spacing: -1px;\n    height: 100%;\n\n\n}\n\n\n*:before,*:after{\n  box-sizing: border-box;\n}\n.info-overflow{\n  transform: translateZ(0);\n    height: 662px;\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    z-index: 4;\n}\n\n\ndiv{\n  display: block;\n  border: 0;\n\n  font: inherit;\n\n  margin: 0;\n  padding: 0;\n}\n*{\n  text-rendering: geometricPrecision;\n  box-sizing: border-box;\n  outline: 0;\n}\n@media screen and (min-width: 1500px) {\n  .eventpicture{\n    min-height: 790px;\n  }\n  .info-overflow{\n    height: 790px;\n  }\n  .slogan{\n    padding-top: 300px;\n  }\n}\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "html {\n    height: 100%;\n}\n\nbody{\n\n  position: absolute;\n  width:100%;\n  height:100%;\n  margin: 0;\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  opacity: 1;\n}\n.prijava\n{\n  width: 100%;\n  height: auto;\n  padding-top: 125px;\n  padding-bottom: 50px;\n}\n\ninput[type=\"text\"]{\n  width: 87%;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  font-family: 'Roboto', sans-serif;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"password\"]{\n    width: 87%;\n    margin-left: 35px;\n    margin-right: 35px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 5px;\n    font-size: 14px;\n    font-weight: 400;\n    background-color: white;\n    color: #3B3B3D;\n    border: 1px solid #cccccc;\n    border-radius: 4px;\n    font-family: 'Roboto', sans-serif;\n  }\n\n    input[type=\"password\"]:focus {\n      border: 1px solid #4D4D4D;\n      outline: none;\n    }\n\n    input[type=\"password\"]::-webkit-input-placeholder {\n      color: #aaa;\n    }\n\n    input[type=\"password\"]:-ms-input-placeholder {\n      color: #aaa;\n    }\n\n    input[type=\"password\"]::placeholder {\n      color: #aaa;\n    }\n\n.groupBox {\n\n  width: 100%;\n  margin-right: 10px;\n  margin-left: 10px;\n    border-color: black;\n    border-style: double;\n    z-index: 32;\n    background-color: #fff;\n}\n\n.form-content{\n  position: relative;\n  height: auto;\n  width: 40%;\n  display: table;\n  margin:0px auto;\n\tborder-radius: 5px;\n\tpadding:20px;\n}\n\nh2{background: #4D4D4D;\n  text-align: center;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\n.form-content input[type=\"submit\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto', sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    margin: 39px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"submit\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n@media screen and (max-width: 1130px) {\n  .form-content{\n    width: 50%;\n    padding:20px;\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 40px;\n    margin-left: 40px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 50px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .form-content{\n    width: 50%;\n    padding:20px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 30px;\n    margin-left: 30px;\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 40px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n  .groupBox{\n    width: 95%;\n    margin-right: 10px;\n    margin-left: 10px;\n  }\n\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 35px;\n  }\n\n}\n\n@media screen and (max-width: 600px) {\n  .form-content{\n    width: 100%;\n    padding:20px;\n\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 30px;\n    margin-left: 30px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 35px;\n  }\n}\n@media only screen and (max-width: 1367px){\n  div.prijava{\n    min-width: 0;\n  }\n  div.form-content{\n    min-width: 0;\n  }\n}\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "th, td {\n    border: 2px solid white;\n    border-collapse: collapse;\n}\nth, td {\n    padding: 5px;\n    text-align: left;\n}\ntable {\n  background: #d9d9d9;\n  border: 2px solid white;\n  border-collapse: collapse;\n  width: 70%;\n  margin:0 auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n}\ntr:nth-child(even) {\n  background: #ececec;\n}\n\ntr:first-child {\n  border-bottom: 2px solid #333;\n}\n\n.elektrijada\n{\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  background-size: cover;\n  background-position: center center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  width:100%;\n  height: 1300px;\n  opacity: 1;\n  padding-top: 100px;\n}\n.form-content{\n  position: relative;\n  height: auto;\n  width: 50%;\n  display: table;\n  margin:0px auto;\n background-color: #fff;\n}\n@media only screen and (max-width: 1367px){\n  div.elektrijada{\n    min-width: 0;\n  }\n  div.form-content{\n    min-width: 0;\n  }\n}\nh2{background: #4D4D4D;\n  text-align: center;\n    text-transform: uppercase;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\n\n.button1 {\n  box-shadow: inset 0px 1px 0px 0px #595959;\n  background-color: #595959;\n  border: 1px solid #595959;\n  display: inline-block;\n  cursor: pointer;\n  color: gray;\n  font-size: 11px;\n  margin: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  float:right;\n  padding: 5px 18px;\n  text-decoration: none;\n  border-radius: 4px;\n  color: white;\n}\n.button1:hover {\n  background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n  background-color:#666666;\n}\n\n@media screen and (max-width: 1300px) {\n  .form-content{\n    width: 40%;\n  }\n  .elektrijada{\n    height: 1300px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n  button {\n    margin-left: 85px;\n    margin-right: 85px;\n    margin-bottom: 40px;\n  }\n  .groupBox {\n    padding: 7px;\n    margin-bottom: 30px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .form-content{\n    width: 50%;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .form-content{\n    width: 100%;\n    padding:10px;\n  }\n  .button2 {\n    margin:0 auto;\n    margin-bottom: 40px;\n    width: 100%;\n  }\n  .groupBox {\n    padding: 7px;\n    margin-bottom: 30px;\n  }\n  input[type=\"text\"] {\n    margin: 15px;\n    margin-bottom: 5px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .form-content{\n    width: 50%;\n  }\n}\n\n.error {\n  color: red;\n  text-align: center;\n}\n\n.poruka {\n  color:green;\n  text-align: center;\n}\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\n\n.page-scroll-header {\n    background-color: #ccc !important;\n\n}\n.my-header {\n    transition: background-color 2s ease-out;\n}\n\n.logo{\n  display: inline-block;\n  font-size: 30px;\n}\n\nimg{\n  max-height: 50px;\n  max-width: 50px;\n}\n\nnav {\n    top: 10px;\n    z-index: 150;\n  display: table;\n  position: fixed;\npadding: 3px;\n  margin: 0 auto;\nbackground: rgba(255, 255, 255, 0.95);\nwidth: 100%;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n    opacity: 0.9;\n-webkit-mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 25%, #ffffff 75%, rgba(255, 255, 255, 0) 100%);\n        mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 25%, #ffffff 75%, rgba(255, 255, 255, 0) 100%);\n}\n\nnav ul {\n  padding-top: 5px;\n  padding-left: 0px;\nmargin:0;\n  text-align: center;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%);\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);\n}\n\nnav ul li {\n  display: inline-block;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\nnav ul li a {\n\n  margin-right: 15px;\n  margin-left: 15px;\n  font-family: 'Roboto', sans-serif;\n  text-transform:uppercase;\n  color: #4b799b;\n  font-weight: 700;\n  font-size: 18px;\n  text-decoration: none;\n  display: block;\n}\n\nnav ul li a:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);\n  background: rgba(255, 255, 255, 0.1);\n  color: #4b799b;\n}\n.drugi{\n  display: none;\n}\n#mob1{\n  display: none;\n}\n@media only screen and (max-width: 500px) {\n\nnav{\n  position: static;\n  padding: 0;\n  margin: 2px;\n  opacity: 1;\n  -webkit-mask-image: none;\n          mask-image: none;\n  height: 55px;\n}\n\n  ul{\n    display: none;\n  }\n\n  .mob {\n    padding-left: 0;\n\n    list-style: none;\n    margin: 0;\n    display: block;\n    opacity: 1;\n    border: solid 1px #C9C9C9;\n    border-top: none;\n    border-left: none;\n    transition: all 0.3s ease;\n  }\n\n\n    li {\n      display: block;\n      width: 95%;\n      z-index: 100000;\n      margin: 0 auto;\n      padding: 0 auto;\n    }\n      a {\n        display: block;\n        padding: 0.5em;\n        text-decoration: none;\n        font-size: 0.85em;\n        transition: all 0.3s ease;\n      }\n\n  .logo{\n    margin-left: 10px;\n    padding: 0;\n  }\n\n  .menu{\n    padding: 0;\n    margin-right: 10px;\n    padding-top: 3px;\n  }\n  .lijevo{\n    float: left;\n    width: 25%;\n    padding-left: 15px;\n  }\n  .desno{\n    float: right;\n    width: 25%;\n    padding-right: 15px;\n  }\n  .drugi{\n    display: block;\n  }\n  .li{\n    padding-right: 10px;\n    display: block;\n  }\n  -webkit-mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 0%, #ffffff 0%, rgba(255, 255, 255, 0) 0%);\n          mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 0%, #ffffff 0%, rgba(255, 255, 255, 0) 0%);\n  }\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Raleway:400,600,700,800);\n@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);\ndiv.vijesti-screen {\n  display: table;\n  margin: 0 auto;\n  width: 74%;\n  margin-top: 5px;\n  padding: 0px;\n  padding-top: 40px;\n}\n\n\nfigure.vijest {\n  font-family: 'Roboto', sans-serif;\n  color: #fff;\n  position: relative;\n  float: left;\n  overflow: hidden;\n  margin: 2%;\n  min-width: 220px;\n  max-width: 260px;\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  color: #000000;\n  text-align: left;\n  font-size: 16px;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n}\nfigure.vijest * {\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n}\nfigure.vijest img {\n  max-width: 100%;\n  vertical-align: top;\n  width: 100%;\n  height: 100%;\n  margin:0;\n  transition: all 0.5s ease;\n}\nfigure.vijest figcaption {\n  padding-top: 25px;\n  position: relative;\n}\nfigure.vijest .datum {\n  font-family: 'Roboto', sans-serif;\n  background-color: #5385ac;\n  top: 16px;\n  color: #fff;\n  left: 16px;\n  min-height: 60px;\n  min-width: 60px;\n  position: absolute;\n  text-align: center;\n}\nfigure.vijest .datum {\n  transition-delay: 0.2s;\n  font-size: 22px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\nfigure.vijest .datum span {\n  display: block;\n  line-height: 30px;\n}\nfigure.vijest .datum .mjesec {\n  font-size: 16px;\n  background-color: rgba(0, 0, 0, 0.1);\n}\nfigure.vijest h3,\nfigure.vijest p {\n  margin: 3px;\n  padding: 0;\n  width: 100%;\n  min-height:60px;\n}\nfigure.vijest h3 {\n  margin-bottom: 5px;\n  margin-left: 8px;\n  display: inline-block;\n  font-weight: 600;\n  color: #333333;\n  text-transform: uppercase;\n  font-size: 23px;\n}\nfigure.vijest p {\n  font-family: 'Roboto', sans-serif;\n  font-size: 0.8em;\n  margin-bottom: 12px;\n  margin-right: 10px;\n  margin-left: 8px;\n  margin-top: 5px;\n  line-height: 1.7em;\n  font-weight:500;\n  height: 70px;\n}\nfigure.vijest button {\n  border: medium none;\n\tbox-shadow: inset 0px 1px 0px 0px #4D4D4D;\n\tbackground-color: #4D4D4D;\n\tborder: 1px solid #4D4D4D;\n\tdisplay: inline-block;\n\tcursor: pointer;\n\tcolor: #FFFFFF;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 12px;\n\tfont-weight: 400;\n\tmargin-left:8px;\n  margin-bottom: 8px;\n\tpadding: 8px 8px;\n\ttext-decoration: none;\n\ttext-transform: uppercase;\n\tborder-radius: 4px;\n}\nfigure.vijest:hover img {\n  transform: scale(1.1);\n}\nfigure.vijest:hover button {\n  background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n\tbackground-color:#666666;\n}\n\n\n.picture{\n\nbackground-image: url('../../assets/images/vijesti.png');\n  min-height: 495px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position:center center;\n\n}\n.info-overflow{\n  transform: translateZ(0);\n  height: 495px;\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    z-index: 4;\n\n}\n.info-overflow::before{\n  position: absolute;\n  top: 0;\n  left: 0;\npadding-top: 80px;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 50%, #002f40 100%);\n}\n\nh1{\n  margin-top: 40px;\nposition: center;\nfont-family: 'Roboto', sans-serif;\nfont-weight: 700;\nfont-size: 50px;\ntext-align: center;\n\n}\nhr {\n  max-width: 70px;\n  border-width: 3px;\n  border-color: #06d7d9;\n}\n\nfigcaption{\n  width:90%;\n}\n\n@media only screen and (max-width: 1400px){\n  div.vijesti-screen{\n    min-width: 0;\n    margin-top: 0px;\n    padding-bottom: 20px;\n    min-width: 50%;\n  }\n  figure.vijest{\n    margin-left: 20px;\n    margin-bottom: 40px;\n    display: inline-block;\n  }\n}\n\n@media only screen and (max-width: 1030px){\n  div.vijesti-screen{\n    width:60%;\n    padding: 0px;\n    margin:0px auto;\n    display: table;\n    margin-top: 40px;\n  }\n  figure.vijest{\n    margin-bottom: 40px;\n    margin-left: 20px;\n    margin-right: 20px;\n    padding: 0px;\n    display: inline-block;\n  }\n}\n\n@media only screen and (max-width: 920px){\n  div.vijesti-screen{\n    width:80%;\n    padding: 0px;\n    margin:0px auto;\n    display: table;\n    margin-top: 40px;\n  }\n  figure.vijest{\n    margin-bottom: 40px;\n    margin-left: 20px;\n    margin-right: 20px;\n    padding: 0px;\n    display: inline-block;\n  }\n}\n\n@media only screen and (max-width: 800px){\n  div.vijesti-screen{\n    width:80%;\n    padding: 0px;\n    margin:0px auto;\n    display: table;\n    margin-top: 40px;\n  }\n  figure.vijest{\n    margin-bottom: 40px;\n    margin-left: 20px;\n    margin-right: 20px;\n    padding: 0px;\n    display: inline-block;\n  }\n}\n\n@media only screen and (max-width: 420px){\n  div.vijesti-screen{\n    width:65%;\n    padding: 0px;\n    margin:0px auto;\n    display: table;\n    margin-top: 40px;\n  }\n  figure.vijest{\n    margin-bottom: 40px;\n    margin-left: 0px;\n    margin-right: 0px;\n    padding: 0px;\n    display: inline-block;\n  }\n}\n\n@media only screen and (max-width: 390px){\n  div.vijesti-screen{\n    width:65%;\n    padding: 0px;\n    margin:0px auto;\n    display: table;\n    margin-top: 40px;\n  }\n  figure.vijest{\n    margin-bottom: 40px;\n    margin-left: 0px;\n    margin-right: 0px;\n    padding: 0px;\n    display: inline-block;\n  }\n}\n\n@media only screen and (max-width: 370px){\n  div.vijesti-screen{\n    width:65%;\n    padding: 0px;\n    margin:0px auto;\n    display: table;\n    margin-top: 40px;\n  }\n  figure.vijest{\n    margin-bottom: 40px;\n    margin-left: 0px;\n    margin-right: 0px;\n    padding: 0px;\n    display: inline-block;\n  }\n}\n@media only screen and (min-width: 1700px){\n  .picture{\n  min-height: 720px;\n  }\n  .info-overflow{\n    height: 720px;\n  }\n\n}\n@media only screen and (max-width: 1367px ){\n  div.vijesti-screen{\n    min-width: 0;\n  }\n  .picture{\n  min-height: 495px;\n  }\n  .info-overflow{\n    min-height: 495px;\n  }\n}\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = ".elektrijada\n{\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  background-size: cover;\n  background-position: center center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  width:100%;\n  height: 800px;\n  opacity: 1;\n  padding-top: 125px;\n}\n\n.combobox {\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n}\n\nselect:required:invalid {\n  color: #aaa;\n}\noption[value=\"\"][disabled] {\n  display: none;\n}\noption {\n  color: black;\n}\ninput[type=\"file\"] {\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid white;\n  border-radius: 4px;\n  float: left;\n}\n\ninput[type=\"text\"]{\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  float: left;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n\n.button2 {\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 15px;\n  font-weight: 400;\n  background-color: gray;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  float: left;\n  cursor: pointer;\n  transition: background-color 0.16s ease-out;\n  }\n\n.button2:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n.groupBox {\n  float: left;\n  width: 40%;\n  margin:26px;\n  padding: 10px;\n  /*border: 1px solid #eaedf2;*/\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.form-content{\n  position: relative;\n  height: auto;\n  width: 40%;\n  display: table;\n  margin:0px auto;\n  background-color: #fff;\n}\nh2{background: #4D4D4D;\n  text-align: center;\n    text-transform: uppercase;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\nbutton{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto', sans-serif;\n    font-size: 12px;\n    margin: 35px;\n    margin-right: 50px;\n    margin-top: 8px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\nbutton:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n\n.error {\n  color: red;\n  text-align: center;\n  font-size: 13px;\n  font-family: 'Roboto', sans-serif;\n}\n\n.poruka {\n  color:green;\n  text-align: center;\n  font-size: 13px;\n  font-family: 'Roboto', sans-serif;\n}\n\n\n/*@media only screen and (max-width: 1367px){\n  div.elektrijada{\n    min-width: 0;\n  }\n  div.form-content{\n    min-width: 0;\n  }\n}*/\n\n@media screen and (max-width: 1130px) {\n  .form-content{\n    width: 70%;\n  }\n  .elektrijada{\n    height: 1300px;\n    padding-top: 160px;\n  }\n  button{\n    margin-right: 75px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .groupBox{\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .groupBox{\n    width: 80%;\n  }\n  .elektrijada{\n    padding-top: 180px;\n  }\n}\n\n@media screen and (max-width: 680px) {\n  .groupBox{\n    width: 80%;\n    margin-bottom: 0px;\n  }\n}\n"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = ".eventpicture{\n  min-height: 660px;\n  background-image:url('../../assets/images/sifi.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n  opacity: 0.9;\n  height: auto;\n}\n.info-overflow::before{\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 30%, #002f40 100%);\n}\n.info-inner{\n  z-index: 2;\n}\n.info-inner::after{\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\nh1{\n  margin-top: 40px;\nposition: center;\nfont-family: 'Roboto', sans-serif;\nfont-weight: 600;\nfont-size: 30px;\ntext-align: center;\n\n}\nhr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #06d7d9;\n  margin-bottom: 50px;\n}\n\n.text3 {\n  color: auto;\n  margin-left: 40px;\n  margin-top: 40px;\n  letter-spacing: 1px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  padding-bottom: 80px;\n  text-align: justify;\n}\n.medalje{\n  padding-bottom: 100px;\n}\n.text1 {\n  color: #fff;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 19px;\n  line-height: 1.3em;\n  font-weight:lighter;\n  letter-spacing: 0px;\n  text-transform:none;\n}\n.name{\n    font-size: 40px;\n    color: #fff;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 700;\n    letter-spacing: -1px;\n    line-height: 45px;\n    padding-bottom: 30px;\n}\n.name span{\n    font-size: 40px;\n    color: #fff;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 700;\n    letter-spacing: -1px;\n    line-height: 40px;\n    padding-bottom: 30px;\n    padding-left: 100px;\n}\n\n\n.info-overflow{\n  transform: translateZ(0);\n    height: 672px;\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    z-index: 4;\n}\n\n.info-dash{\n    background-size: 100% auto;\n    bottom:  0px;\n    height: 492px;\n    top: auto;\n    width: 510px !important;\n    background:url('https://image.ibb.co/bKYS2b/gradient.png')right top no-repeat;\n    transform: translateX(0);\n    left: 0;\n    padding:30px;\n    position: absolute;\n    z-index: 4;\n}\n.info-dash:after{\n  content: \"\";\n  display: block;\n  height: 150px;\n  width: 100%;\n}\n\ndiv{\n  display: block;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;;\n  margin: 0;\n  padding: 0;\n}\n*{\n  text-rendering: geometricPrecision;\n  box-sizing: border-box;\n  outline: 0;\n}\n\n.prvi{\n  width: 14%;\n  float: left;\n  height: 100%;\n}\n.drugi_dio{\n  margin-left: 25px;\n  width: 80%;\n  float: left;\n  margin-top: 15px;\n  padding: 20px;\n  padding-right: 0px;\n}\n\n.medalje{\n  float: none;\n  width: 100%;\n}\n\nul.tab {\n    list-style-type: none;\n    overflow: hidden;\n    border: \t#182627;\n    background-color: #2D3B3C;  /* ili ova boja? #2A3C41 \t*/\n    font-family: \"Roboto\", sans-serif;\n    width:100%;\n    padding: 0px;\n    margin-top:12px;\n    height: 100%;\n}\n/* poravnanje u listi */\nul.tab li {\n\n}\n\n/* stil za elemente liste */\nul.tab li div {\n    display: block;\n    color: #fff;\n    text-align: center;\n    padding: 14px 20px;\n    text-decoration: none;\n    transition: 0.3s;\n    font-size: 21px;\n    width: 100%;\n    height: 100%;\n    font-family: 'Roboto',sans-serif;\n    font-style: 500;\n    line-height: 1.9em;\n    letter-spacing: 0px;\n}\n\n/* hover */\nul.tab li div:hover {\n  background-color: #b3b3b3; /*#999999;*/\n  cursor: pointer;\n}\n\n/* hover za trenutni na koji kliknemo */\nul.tab li div:focus, .active {\n    background-color: #80bfff;\n}\n\n/* sadrzaj izabrane godine */\n.tabcontent {\n    display: none;\n    padding: 20px 12px;\n    float:center;\n    font-family: 'Roboto',sans-serif;\n}\n\n.okvir {\n  list-style-type: none;\n  overflow: hidden;\n  border: \t#182627;\n  background-color: #303A3C;\n  width:150px;\n  padding: 0px;\n  margin-top:12px;\n  height:100%;\n}\n\nh1{\n  text-align: center;\n  margin: 5px;\n}\n\ndiv.PrikazPlasmana{\n  width: 60%;\n  height: auto;\n  display:table;\n  margin: 0 auto;\n}\n\n figure.prikaz {\n   color: #fff;\n   position: relative;\n   float: left;\n   overflow: hidden;\n   margin: 2%;\n   max-width: 320px;\n   width: 100%;\n   height: 180px;\n   background-color: #ffffff;\n   color: #000000;\n   text-align: left;\n   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n }\n\n #prikazPrvog{\n   float: none;\n   display: table;\n   margin: 0 auto;\n\n }\n #prikazDrugog{\n   float: left;\n }\n #prikazTreceg{\n   float: left;\n   margin-top: 35px;\n }\n div.text{\n   float: left;\n   width: 75%;\n   margin:0;\n   height: auto;\n   padding-bottom:20px;\n }\n div.media{\n   float: right;\n   width: 25%;\n   margin:0;\n }\ndiv.takmicari{\n  margin: 6px;\n  font-size: 20px;\n  font-weight: 400;\n  font-family: 'Roboto',sans-serif;\n}\n h2.NaslovTeme{\n   margin: 10px;\n   text-align: left;\n   font-weight: 500;\n   font-family: 'Roboto',sans-serif;\n }\n img{\n   -ms-flex:0 auto;\n       flex:0 auto;\n   float: right;\n   height: 100px;\n   margin: 10px 0 25px 0px;\n   width: 80px;\n }\n @media screen and (min-width: 1500px) {\n   .eventpicture{\n     min-height: 790px;\n   }\n   .info-overflow{\n     height: 802px;\n   }\n   .PrikazPlasmana{\n     width: 40%;\n   }\n   #prikazPrvog{\n     margin-left:250px;\n   }\n\n\n }\n @media screen and (max-width: 680px) {\n   .text1{\n     width: 70%;\n     font-size: 21px;\n   }\n   .name,.name span{\n       font-size: 35px;\n     }\n\n   .info-dash{\n     height: 500px;\n   }\n\n\n\n }\n @media screen and (max-width: 720px) {\n\n   figure{\n     float: left;\n     width:90%;\n   }\n   #prikazPrvog{\n     padding-left: 0;\n     margin-left: 10px;\n     margin-bottom: 10px;\n     float: left;\n   }\n   #prikazDrugog{\n     padding-left: 0;\n     margin-left: 10px;\n     margin-bottom: 10px;\n     float: left;\n   }\n   #prikazTreceg{\n     padding-left: 0;\n     margin-left: 10px;\n     margin-top: 0;\n     padding-top: 0;\n     float: left;\n   }\n   .prikaz{\n     padding-left: 0;\n     margin-left: 10px;\n\n     float: left;\n   }\n   .PrikazPlasmana{\n     width:80%;\n\n   }\n\n   .text{\n     padding-right: 80px;\n   }\n\n\n\n }\n @media screen and (max-width: 680px){\n\n figure{\n   float: left;\n   width:90%;\n }\n #prikazPrvog{\n   padding-left: 0;\n   margin-left: 10px;\n   margin-bottom: 10px;\n   float: left;\n }\n #prikazDrugog{\n   padding-left: 0;\n   margin-left: 10px;\n   margin-bottom: 10px;\n   float: left;\n }\n #prikazTreceg{\n   padding-left: 0;\n   margin-left: 10px;\n   margin-top: 0;\n   padding-top: 0;\n   float: left;\n }\n .prikaz{\n   padding-left: 0;\n   margin-left: 10px;\n\n   float: left;\n }\n .PrikazPlasmana{\n   width:80%;\n\n }\n\n .text{\n   padding-right: 60px;\n\n }\n\n\n}\n@media screen and (max-width: 920px){\n\nfigure{\n  float: left;\n  width:90%;\n}\n#prikazPrvog{\n  padding-left: 20;\n  margin-left: 20px;\n  margin-bottom: 10px;\n  float: left;\n}\n#prikazDrugog{\n  padding-left: 20;\n  margin-left: 20px;\n  margin-bottom: 15px;\n  float: left;\n}\n#prikazTreceg{\n  padding-left: 20;\n  margin-left: 20px;\n  margin-top: 0;\n  padding-top: 0;\n  float: left;\n}\n.prikaz{\n  padding-left: 20;\n  margin-left: 20px;\n\n  float: left;\n}\n.PrikazPlasmana{\n  width:80%;\n\n}\n\n.text{\n  padding-right: 60px;\n\n}\n.text2{\n  padding-left: 30px;\n\n}\n}\n\n@media only screen and (min-width: 1024px) and (max-width: 1366px)\n  and (-webkit-min-device-pixel-ratio: 1.5) {\n    figure{\n      float: left;\n      width:90%;\n\n    }\n    #prikazPrvog{\n      padding-left: 20;\n      margin-left: 20px;\n      margin-bottom: 10px;\n      float: left;\n    }\n    #prikazDrugog{\n      padding-left: 20;\n      margin-left: 20px;\n      margin-bottom: 15px;\n      float: left;\n    }\n    #prikazTreceg{\n      padding-left: 20;\n      margin-left: 20px;\n      margin-top: 0;\n      padding-top: 0;\n      float: left;\n    }\n    .prikaz{\n      padding-left: 20;\n      margin-left: 20px;\n\n      float: left;\n    }\n    .PrikazPlasmana{\n      width:80%;\n\n    }\n\n    .text{\n      padding-right: 60px;\n\n    }\n    .text2{\n      padding-left: 30px;\n\n    }\n}\n\n@media only screen and (max-width: 1030px) {\n  .drugi_dio{\n    margin-right: 1px;\n    width: 70%;\n    float: left;\n    margin-top: 15px;\n    padding: 0px;\n  }\n  h1{\n    margin-top: 40px;\n  font-size: 25px;\n\n  }\n  hr {\n    max-width: 40px;\n    border-width: 3px;\n    margin-bottom: 50px;\n  }\n  .text3{\n    margin-left: 0px;\n    margin-top: 40px;\n    letter-spacing: 0px;\n    font-size: 15px;\n    padding-bottom: 80px;\n  }\n  .prvi {\n    width:15%;\n  }\n  ul.tab {\n      list-style-type: none;\n      overflow: hidden;\n      border: \t#182627;\n      background-color: #2D3B3C;  /* ili ova boja? #2A3C41 \t*/\n      font-family: \"Roboto\", sans-serif;\n      width:100%;\n      padding: 0px;\n      margin-top:12px;\n      height: 100%;\n  }\n\n  /* stil za elemente liste */\n  ul.tab li div {\n      display: block;\n      color: #fff;\n      text-align: center;\n      padding: 14px 20px;\n      text-decoration: none;\n      transition: 0.3s;\n      font-size: 14px;\n      width: 100%;\n      height: 100%;\n      font-family: 'Roboto',sans-serif;\n      font-style: 500;\n      line-height: 1.3em;\n      letter-spacing: 1px;\n  }\n}\n\n@media only screen and (max-width: 720px) {\n  .drugi_dio{\n    margin-right: 1px;\n    width: 60%;\n    float: left;\n    margin-top: 15px;\n    padding: 0px;\n  }\n  h1{\n    margin-top: 40px;\n  font-size: 25px;\n\n  }\n  hr {\n    max-width: 40px;\n    border-width: 3px;\n    margin-bottom: 50px;\n  }\n  .text3{\n    margin-left: 0px;\n    margin-top: 40px;\n    letter-spacing: 0px;\n    font-size: 15px;\n    padding-bottom: 80px;\n  }\n  .prvi {\n    width:20%;\n  }\n  ul.tab {\n      list-style-type: none;\n      overflow: hidden;\n      border: \t#182627;\n      background-color: #2D3B3C;  /* ili ova boja? #2A3C41 \t*/\n      font-family: \"Roboto\", sans-serif;\n      width:100%;\n      padding: 0px;\n      margin-top:12px;\n      height: 100%;\n  }\n\n  /* stil za elemente liste */\n  ul.tab li div {\n      display: block;\n      color: #fff;\n      text-align: center;\n      padding: 14px 20px;\n      text-decoration: none;\n      transition: 0.3s;\n      font-size: 14px;\n      width: 100%;\n      height: 100%;\n      font-family: 'Roboto',sans-serif;\n      font-style: 500;\n      line-height: 1.3em;\n      letter-spacing: 1px;\n  }\n}\n"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = ".tab {\n    margin: 40px;\n    margin-right: 60px;\n    margin-left: 60px;\n    border-color: #e6e6e6;\n    border-style: solid;\n    border-radius: 2px;\n    padding: 25px;\n    display: block;\n    background-color: #e6e6e6;\n}\n\n.tab1 {\n  background-color:  #e6e6e6;\n  width: auto;\n  height:100px;\n}\n\n.text1 {\n  font: Arial;\n  font-size: 15px;\n  font-padding: 5px;\n}\n\nh1 {\n  position:left;\n  color: \t#1380E6\n}\n\nbutton {\n    background-color:#99c2ff;\n    color: black;\n    font: Arial;\n    border-radius: 5px;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    font-size: 16px;\n    font-style: italic;\n    outline: none;\n}\n\n.button span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button:hover span {\n  padding-right: 25px;\n}\n\n.button:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n.experience-wrapper {\n  margin:auto;\n  display: -ms-grid;\n  display: grid;\n  grid-column-gap: 10px;\n  -ms-grid-columns:0fr 0fr 0fr;\n      grid-template-columns:0fr 0fr 0fr;\n  margin-left: 290px;\n }\n\n.experience1{\n  padding-top: 0px;\n  border-color: #9fa9a3;\n  border-style: solid;\n  border-spacing: 10px;\n  border-radius: 0px;\n  position: relative;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color:\t#99c2ff;\n  opacity:0.8;\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  transition: .5s ease;\n}\n\n.scroll-up:hover .overlay {\n  height: 49%;\n  opacity: 0.9;\n}\n\n/*stil za imena pobjednika*/\n.text {\n  padding-top: 15px;\n  font: Arial;\n  font-weight: bold;\n  white-space: nowrap;\n  color: #1a1a1a;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  font-width:20px;\n  font-style: bold;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = "\n.eventpicture{\n\n  margin-top: 10px;\n  min-height: 20px;\n  background-image:url('https://image.ibb.co/kMz9WR/final.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n}\n.info-overflow::before{\n\n  position: relative;\n  \n\n  z-index: 3;\n  width: 100%;\n  height: 35%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 70%,rgba(0, 47, 64, 0) 50%, #002f40 100%);\n  background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 30%, #002f40 100%);\n}\n.image {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  filter: gray;\n  -webkit-filter: grayscale(1);\n\ttransition: .3s ease-in-out;\n  float: left;\n}\n.image:hover {\n  filter: none;\n      -webkit-filter: grayscale(0);\n      -webkit-transform: scale(1.01);\n}\n.images{\n\n  display: table;\n  margin: 0 auto;\n}\n.text{\n  color: white;\n  z-index: 7;\n  font-weight: bold;\n}\n.heading{\n  margin-top:10px;\n}\n.add{\n  display: inline-block;\n  background: transparent;\n  color: #06d7d9;\n  border: 2px solid #06d7d9;\n  display: table;\n  margin: 0 auto;\n  margin-bottom: 10px;\n}\n\nform {\n    border: 3px solid #f1f1f1;\n}\n\ninput[type=text], input[type=image] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\n/* Stil svih button-a */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    border-radius: 5px;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n/* Dodatni stil za cancel button */\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n\n.container {\n    padding: 2px;\n    z-index: 4;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n    padding-top: 60px;\n}\n\n/* Modal sadrzaj */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto;\n    border: 1px solid #888;\n    width: 60%;\n}\n\n/* x button */\n.close {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n\n.animate {\n    animation: animatezoom 0.6s\n}\n#skills{\n  padding: 5px;\n  margin-top: 10px;\n\n}\n#skills1{\n\n  color:white;\n  padding: 5px;\n  margin-top: 10px;\n  background-image: url(\"https://image.ibb.co/kMz9WR/final.jpg\");\n  background-size: cover;\n  background-position: center center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n\n  width:100%;\n  height: 300px;\n  opacity: 1;\n  min-height: 250px;\n}\n\n@keyframes animatezoom {\n    from {transform: scale(0)}\n    to {transform: scale(1)}\n}\n\n/* promjena stila za span i cancel button za extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n\n\n\n\n\n\n\n\n\n\nhr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #06d7d9;\n}\n\n\nh2{\n  font-family: 'Roboto', sans-serif;\n\tfont-size: 30px;\n\tfont-weight: 500;\n\tcolor: #fff;\n  position: center;\n}\nh3{\n  font-family: 'Roboto', sans-serif;\n\tfont-size: 28px;\n\tfont-weight: 500;\n\tcolor: #fff;\n}\n\np {\n  font-family: 'Roboto', sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\tcolor: #fff;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n\nsection {\n  padding: 100px 0;\n}\n\n.section-heading {\n  margin-top: 0;\n}\n\n::-moz-selection {\n  color: white;\n  background: #222222;\n  text-shadow: none;\n}\n\n::selection {\n  color: white;\n  background: #222222;\n  text-shadow: none;\n}\n\nimg::-moz-selection {\n  color: white;\n  background: transparent;\n}\n\nimg::selection {\n  color: white;\n  background: transparent;\n}\n\nimg::-moz-selection {\n  color: white;\n  background: transparent;\n}\n\n@keyframes blink {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\nheader.masthead {\n  position: relative;\n  width: 100%;\n  min-height: auto;\n  text-align: center;\n  color: white;\n  background-image: url(\"https://s3.us-east-2.amazonaws.com/portfolio96/iMac-min.jpg\");\n  background-position: center;\n  background-size: cover;\n}\nheader.masthead .header-content {\n  position: relative;\n  width: 100%;\n  padding: 150px 15px 100px;\n  text-align: center;\n}\nheader.masthead .header-content .header-content-inner h1 {\n  font-size: 30px;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-transform: uppercase;\n}\nheader.masthead .header-content .header-content-inner hr {\n  margin: 30px auto;\n}\nheader.masthead .header-content .header-content-inner p {\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: 50px;\n  color: rgba(255, 255, 255, 0.7);\n}\n@media (min-width: 768px) {\n  header.masthead {\n    height: 100%;\n    min-height: 600px;\n  }\n  header.masthead .header-content {\n    position: absolute;\n    top: 50%;\n    padding: 0 50px;\n    transform: translateY(-50%);\n  }\n  header.masthead .header-content .header-content-inner {\n    max-width: 1000px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  header.masthead .header-content .header-content-inner h1 {\n    font-size: 50px;\n  }\n  header.masthead .header-content .header-content-inner p {\n    font-size: 18px;\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n}\n\n.service-box {\n  max-width: 400px;\n  margin: 50px auto 0;\n}\n@media (min-width: 992px) {\n  .service-box {\n    margin: 20px auto 0;\n  }\n}\n.service-box p {\n  margin-bottom: 0;\n}\n\n@media (min-width: 768px) {\n  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {\n    font-size: 16px;\n  }\n  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {\n    font-size: 22px;\n  }\n}\n\n\n.devicons {\n  font-size: 5rem;\n}\n"

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = ".image {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  width:150px;\n  height:130px;\n\n  filter: gray;\n  -webkit-filter: grayscale(1);\n\ttransition: .3s ease-in-out;\n  float: left;\n}\n.image:hover {\n  filter: none;\n      -webkit-filter: grayscale(0);\n      -webkit-transform: scale(1.01);\n}\n\ntr {\n  float: left;\n  margin: 0px;\n  width:12.5%;\n}\n\ntable {\n  width: 80%;\n  margin:0 auto;\n  display: table;\n  font-family: 'Roboto', sans-serif;\n  margin-bottom:0px;\n}\n\n.container {\n    padding: 2px;\n    z-index: 4;\n}\n\n#skills{\n  padding: 5px;\n  margin-top: 10px;\n}\n\nhr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #06d7d9;\n}\n\nh2{\n  font-family: 'Roboto', sans-serif;\n\tfont-size: 30px;\n\tfont-weight: 500;\n  position: center;\n}\n\nsection {\n  padding: 100px 0;\n}\n\n.section-heading {\n  margin-top: 0;\n}\n\n@media screen and (max-width: 1130px) {\n  table{\n    margin:0px auto;\n    display: table;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    width: 90%;\n  }\n  tr {\n    display: table;\n    margin: 0px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  table{\n    margin:0px auto;\n    display: table;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    width: 79%;\n  }\n  tr {\n    display: table;\n    margin: 0px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  table{\n    margin:0px auto;\n    display: table;\n    margin-top: 0px;\n    width: 75%;\n  }\n  tr {\n    display: table;\n    margin: 0px;\n  }\n}\n\n@media screen and (max-width: 390px) {\n  table{\n    margin:0px auto;\n    display: table;\n    margin-top: 0px;\n    width: 85%;\n  }\n  tr {\n    display: table;\n    margin: 0px;\n  }\n}\n"

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = ".home{\n\twidth: 80%;\n\n\tdisplay: table;\n\tmargin: auto;\n\theight: 350px;;\n\tpadding: 35px;\n}\n.footer{\n\twidth: 80%;\n}\n.sadrzaj1{\n\tfloat:left;\n\twidth:59%;\n\theight: 100%;\n}\n.sadrzaj2{\n\tfloat:right;\n\twidth:41%;\n\theight: 100%;\n}\n.sve{\n\tfloat: left;\n\twidth: 50%;\n}\n.slika{\n\tfloat: left;\n\twidth: 50%;\n}\niframe{\n\tmargin-top: 15px;\n\twidth: 85%;\n\theight: 250px;\n\tpadding-left: 0px;\n}\nh1{\n\tmargin:5px;\n\tpadding-left: 0px;\n\tmargin-left: 0px;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 35px;\n\ttext-align: left;\n\tfont-weight: 500;\n\tpadding-bottom: 20px;\n\n}\nspan\n{\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 15px;\n\ttext-align: left;\n\tfont-weight: 400;\n}\np{\n\tmargin-top: 15px;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 15px;\n\ttext-align: left;\n\tfont-weight: 400;\n}\nh2{\n\tmargin-top: 15px;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 26px;\n\ttext-align: left;\n\tfont-weight: 500;\n\tcolor: #4b799b;\n}\n.button{\n\t/*border: medium none;\n\tpadding: 10px 20px;*/\n\tbox-shadow: inset 0px 1px 0px 0px #4D4D4D;\n\tbackground-color: #4D4D4D;\n\tborder: 1px solid #4D4D4D;\n\tdisplay: inline-block;\n\tcursor: pointer;\n\tcolor: #FFFFFF;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 12px;\n\tfont-weight: 400;\n\tmargin-left:5px;\n\tpadding: 5px 28px;\n\ttext-decoration: none;\n\ttext-transform: uppercase;\n\tborder-radius: 4px;\n}\n.button:hover {\n\tbackground:linear-gradient(to bottom, #666666 5%, #808080 100%);\n\tbackground-color:#666666;\n}\n@media screen and (max-width: 1130px) {\n\t.sadrzaj1{\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\theight:auto;\n\t\tmargin:0;\n\t\tpadding: 0;\n\t\tpadding-bottom: 55px;\n\t}\n\t.sadrzaj2{\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\theight:auto;\n\t\tmargin:0;\n\t\tpadding: 0;\n\t}\n\t.home{\n\t\twidth: 100%;\n\n\t\tdisplay: table;\n\t\tmargin:auto;\n\t\theight: auto;\n\t\tpadding: 20px;\n\n\t}\n\tiframe{\n\t\tdisplay: table;\n\t\tmargin:0 auto;\n\n\t}\n}\n\n@media screen and (max-width: 920px) {\n\t.sadrzaj1{\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\theight:auto;\n\t\tmargin:0;\n\t\tpadding: 0;\n\t\tpadding-bottom: 55px;\n\t}\n\n\tiframe{\n\t\tdisplay: table;\n\t\tmargin:0 auto;\n\n\t}\n\t.sadrzaj2{\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\theight:auto;\n\t\tmargin:0;\n\t\tpadding: 0;\n\t}\n\t.home{\n\t\twidth: 100%;\n\n\t\tdisplay: table;\n\t\tmargin:auto;\n\t\theight: auto;\n\t\tpadding: 20px;\n\n\t}\n\n}\n\n@media screen and (max-width: 720px) {\n\t.sadrzaj1{\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\theight:auto;\n\t\tmargin:0;\n\t\tpadding: 0;\n\t\tpadding-bottom: 55px;\n\t}\n\tiframe{\n\t\tdisplay: table;\n\t\tmargin:0 auto;\n\n\t}\n\t.sadrzaj2{\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\theight:auto;\n\t\tmargin:0;\n\t\tpadding: 0;\n\t}\n\t.home{\n\t\twidth: 100%;\n\n\t\tdisplay: table;\n\t\tmargin:auto;\n\t\theight: auto;\n\t\tpadding: 20px;\n\n\t}\n\n}\n\n\n@media screen and (max-width: 680px) {\n  .sadrzaj1{\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\theight:auto;\n\t\tmargin:0;\n\t\tpadding: 0;\n\t\tpadding-bottom: 55px;\n\t}\n\n\tiframe{\n\t\tdisplay: table;\n\t\tmargin:0 auto;\n\n\t}\n\t.sadrzaj2{\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\theight:auto;\n\t\tmargin:0;\n\t\tpadding: 0;\n\t}\n\t.home{\n\t\twidth: 100%;\n\n\t\tdisplay: table;\n\t\tmargin:auto;\n\t\theight: auto;\n\t\tpadding: 20px;\n\n\t}\n}\n<<<<<<< HEAD\n\n=======\n@media screen and (min-width: 1600px) {\n}\n>>>>>>> 47ad55169eccbeb66c86d8a13a07cb18cba1a6ca\n@media only screen and (max-width: 1024px) and (max-width: 1366px)\n  and (-webkit-min-device-pixel-ratio: 1.5) {\n\t\t.sadrzaj1{\n\t\t\twidth: 100%;\n\t\t\tfloat: left;\n\t\t\theight:auto;\n\t\t\tmargin:0;\n\t\t\tpadding: 0;\n\t\t\tpadding-bottom: 55px;\n\t\t}\n\t\t.sadrzaj2{\n\t\t\twidth: 100%;\n\t\t\tfloat: left;\n\t\t\theight:auto;\n\t\t\tmargin:0;\n\t\t\tpadding: 0;\n\t\t}\n\t\t.home{\n\t\t\twidth: 100%;\n\n\t\t\tdisplay: table;\n\t\t\tmargin:auto;\n\t\t\theight: auto;\n\t\t\tpadding: 20px;\n\n\t\t}\n}\n"

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "html {\n    height: 100%;\n}\n\nbody{\n\n  position: absolute;\n  width:100%;\n  height:100%;\n  margin: 0;\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  opacity: 1;\n}\n.prijava\n{\n  width: 100%;\n  height: auto;\n  padding-top: 125px;\n  padding-bottom: 50px;\n}\n\ninput[type=\"text\"]{\n  width: 87%;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  font-family: 'Roboto', sans-serif;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n\n\n.groupBox {\n\n  width: 100%;\n  margin-right: 10px;\n  margin-left: 10px;\n    border-color: black;\n    border-style: double;\n    z-index: 32;\n    background-color: #fff;\n}\n\n.form-content{\n  position: relative;\n  height: auto;\n  width: 40%;\n  display: table;\n  margin:0px auto;\n\tborder-radius: 5px;\n\tpadding:20px;\n}\n\nh2{background: #4D4D4D;\n  text-align: center;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\n.form-content input[type=\"submit\"]{\n    box-shadow: inset 0px 1px 0px 0px #4D4D4D;\n    background-color: #4D4D4D;\n    border: 1px solid #4D4D4D;\n    display: inline-block;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-family: 'Roboto', sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    margin: 39px;\n    float:right;\n    padding: 5px 28px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n}\n.form-content input[type=\"submit\"]:hover {\n    background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n    background-color:#666666;\n}\n@media screen and (max-width: 1130px) {\n  .form-content{\n    width: 50%;\n    padding:20px;\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 40px;\n    margin-left: 40px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 50px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .form-content{\n    width: 50%;\n    padding:20px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 30px;\n    margin-left: 30px;\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 40px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n  .groupBox{\n    width: 95%;\n    margin-right: 10px;\n    margin-left: 10px;\n  }\n\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 35px;\n  }\n\n}\n\n@media screen and (max-width: 600px) {\n  .form-content{\n    width: 100%;\n    padding:20px;\n\n  }\n  .prijava{\n    height: auto;\n    padding-top: 160px;\n    padding-bottom: 80px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 30px;\n    margin-left: 30px;\n  }\n  .form-content input[type=\"submit\"] {\n    margin-right: 35px;\n  }\n}\n@media only screen and (max-width: 1367px){\n  div.prijava{\n    min-width: 0;\n  }\n  div.form-content{\n    min-width: 0;\n  }\n}\n"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "th, td {\n    border: 2px solid white;\n    border-collapse: collapse;\n}\nth, td {\n    padding: 5px;\n    text-align: left;\n}\ntable {\n  background: #d9d9d9;\n  border: 2px solid white;\n  border-collapse: collapse;\n  width: 70%;\n  margin:0 auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n}\ntr:nth-child(even) {\n  background: #ececec;\n}\n\ntr:first-child {\n  border-bottom: 2px solid #333;\n}\n\n.elektrijada\n{\n  background: #16222A;\n  background: linear-gradient(to bottom, #3A6073, #16222A);\n  background-size: cover;\n  background-position: center center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  width:100%;\n  height: 1300px;\n  opacity: 1;\n  padding-top: 125px;\n}\n.form-content{\n  position: relative;\n  height: auto;\n  width: 50%;\n  display: table;\n  margin:0px auto;\n background-color: #fff;\n font-family: 'Roboto', sans-serif;\n}\n@media only screen and (max-width: 1367px){\n  div.elektrijada{\n    min-width: 0;\n  }\n  div.form-content{\n    min-width: 0;\n  }\n}\nh2{background: #4D4D4D;\n  text-align: center;\n    text-transform: uppercase;\n    font-family: 'Roboto', sans-serif;\n    color: #ffffff;\n    font-size: 22px;\n    font-weight: 100;\n    padding: 30px;\n}\n\ninput[type=\"text\"]{\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  background-color: white;\n  color: #3B3B3D;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  float: left;\n}\n\n  input[type=\"text\"]:focus {\n    border: 1px solid #4D4D4D;\n    outline: none;\n  }\n\n  input[type=\"text\"]::-webkit-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]:-ms-input-placeholder {\n    color: #aaa;\n  }\n\n  input[type=\"text\"]::placeholder {\n    color: #aaa;\n  }\n\n  .groupBox {\n    width: 70%;\n    margin:0 auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    padding: 40px;\n    padding-top: 50px;\n    padding-bottom: 20px;\n    border: 1px solid  #b3b3b3;\n    border-radius: 0px;\n    background-color: #e6e6e6;\n  }\n\n/* button za brisanje */\n.button1 {\n  box-shadow: inset 0px 1px 0px 0px #595959;\n  background-color: #595959;\n  border: 1px solid #595959;\n  display: inline-block;\n  cursor: pointer;\n  color: gray;\n  font-size: 12px;\n  margin: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  float:right;\n  padding: 5px 18px;\n  text-decoration: none;\n  border-radius: 4px;\n  color: white;\n}\n.button2 {\n  box-shadow: inset 0px 1px 0px 0px #595959;\n  background-color: #595959;\n  border: 1px solid #595959;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: 'Roboto', sans-serif;\n  font-size: 12px;\n  margin:0 auto;\n  margin-top: 40px;\n  float:left;\n  padding: 5px 18px;\n  text-decoration: none;\n  border-radius: 4px;\n}\n\nbutton{\n  box-shadow: inset 0px 1px 0px 0px #595959;\n  background-color: #595959;\n  border: 1px solid #595959;\n  display: inline-block;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-family: 'Roboto', sans-serif;\n  font-size: 15px;\n  margin: 35px;\n  margin-right: 110px;\n  margin-top: 15px;\n  float:right;\n  padding: 5px 28px;\n  text-decoration: none;\n  border-radius: 4px;\n}\nbutton:hover, .button1:hover {\n  background:linear-gradient(to bottom, #666666 5%, #808080 100%);\n  background-color:#666666;\n}\n\n@media screen and (max-width: 1920px) and (max-height: 1024px) {\n  .form-content{\n    width: 50%;\n  }\n  button {\n    margin-left: 85px;\n    margin-right: 145px;\n    margin-bottom: 40px;\n  }\n}\n\n@media screen and (max-width: 1920px) and (max-height: 900px) {\n  .form-content{\n    width: 50%;\n  }\n  button {\n    margin-left: 85px;\n    margin-right: 105px;\n    margin-bottom: 40px;\n  }\n}\n\n.error {\n  color: red;\n  text-align: center;\n  font-size: 12px;\n}\n\n.poruka {\n  color:green;\n  text-align: center;\n  font-size: 12px;\n}\n\n@media screen and (max-width: 1300px) {\n  .form-content{\n    width: 40%;\n  }\n  .elektrijada{\n    height: 1300px;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n  button {\n    margin-left: 85px;\n    margin-right: 85px;\n    margin-bottom: 40px;\n  }\n  .groupBox {\n    padding: 7px;\n    margin-bottom: 30px;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .form-content{\n    width: 50%;\n  }\n  input[type=\"text\"]{\n    width: 80%;\n    margin-left: 20px;\n    margin-left: 20px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .form-content{\n    width: 100%;\n    padding: 20px;\n  }\n  button {\n    margin:0 auto;\n    margin-bottom: 40px;\n  }\n  .groupBox {\n    padding: 7px;\n    margin-bottom: 30px;\n  }\n  input[type=\"text\"] {\n    margin: 15px;\n    margin-bottom: 5px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .form-content{\n    width: 50%;\n  }\n}\n\n.error {\n  color: red;\n  text-align: center;\n}\n\n.poruka {\n  color:green;\n  text-align: center;\n}\n\n@media screen and (max-width: 3900px) {\n  .form-content{\n    width: 50%;\n    margin-top: 50px;\n  }\n}\n\n.error {\n  color: red;\n  text-align: center;\n}\n\n.poruka {\n  color:green;\n  text-align: center;\n}\n"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "body {\n  background: #febbbb;\n  background: linear-gradient(135deg, #febbbb 0%, #fe9090 45%, #ff5c5c 100%);\n  font-size: 10px;\n  padding: 5em;\n}\n\n.eventpicture{\n\n  margin-top: 10px;\n  min-height: 20px;\n  background-image:url('https://image.ibb.co/dFnbXn/face_1520081338168_9543.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n  opacity: 0.85;\n\n}\n.info-overflow::before{\n\n  position: relative;\n\n  z-index: 3;\n  width: 100%;\n  height: 35%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 30%,rgba(0, 47, 64, 0) 50%, #002f40 100%);\n}\n\narticle{\n  z-index: 100;\n  opacity: 1;\n  float: left;\n  width: 30%;\n  margin: 15px;\n}\n\n.container1{\n  display: table;\n  margin: 0 auto;\n}\n.row{\n  padding-top: 50px;\n  padding-bottom: 50px;\n  display: table;\n  margin: 0 auto;\n}\n\n.text2{\n  color: auto;\n  margin:0px auto;\n  display: block;\n  letter-spacing: 1px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  padding-bottom: 80px;\n  text-align: justify;\n}\n\np {\n  height: auto;\n}\n\n\nh1{\n  margin-top: 40px;\nposition: center;\nfont-family: 'Roboto', sans-serif;\nfont-weight: 600;\nfont-size: 40px;\ntext-align: center;\n}\n.linija {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #06d7d9;\n  margin-bottom: 50px;\n}\n.info{\n  height: auto;\n}\n.divider {\n  border-bottom: 1px solid #06d7d9;\n}\n\n.slova{\n  text-align: justify;\n  margin-top: 20px;\n  padding: 10px;\n  font-size: 16px;\n  font-family: 'Roboto', sans-serif;\n}\n#1{\n  float: left;\n\n\n}\n#3{\n  float: right;\n\n}\n#2{\n  float: left;\n\n}\n\n.cards {\nmargin: 6px;\n  width: 363px;\n  font-family: 'Roboto', sans-serif;\n  background: #f2f2f2;\n  border-radius: 3px;\n  cursor: pointer;\n  height: 13em;\n  padding: 1.5em;\n  position: relative;\n  transition: height 0.4s, box-shadow 0.5s;\n}\n.cards:hover {\n  box-shadow: 0 0 2em #999;\n  height: auto;\n  transition: height 0.3s ease, box-shadow 0.5s ease;\n}\n.cards:hover .divider {\n  opacity: 0.5;\n}\n.cards:hover .info {\n  transition: top 0.5s ease, opacity 1s ease;\n  visibility: visible;\n  top: 1%;\n  opacity: 1;\n  height:auto;\n}\n.cards:hover .icon {\n  font-size: 2em;\n  transition: font-size 0.3s, left 0.3s;\n}\n.cards .info {\n\n  visibility: hidden;\n  top: -50%;\n  opacity: 0;\n\n}\n\n.cards .title {\n  color: #999;\n  text-align: center;\n  font-weight: 300;\n  font-size: 20px;\n}\n.cards .lead {\n  color: #999;\n  font-weight: 100;\n  font-size: 2em;\n  text-align: center;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n.cards .btn {\n  color: #00c5a7;\n  border: 1px solid #00c5a7;\n  border-radius: 3px;\n  transition: color 0.3s, background 0.3s;\n}\n.cards .btn:hover {\n  background: #00c5a7;\n  color: #fff;\n  transition: background 0.5s ease;\n}\n\n@media screen and (max-width: 1130px) {\n  .row{\n    display: inline-block;\n    margin: 0px auto;\n    width:100%;\n  }\n  article {\n    width:30%;\n  }\n  .cards {\n  margin: 6px;\n    width: 300px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .row{\n    display: table;\n    margin: 0px auto;\n    padding: 0px;\n  }\n  article {\n    width:28%;\n  }\n  .cards {\n  margin: 6px;\n    width: 200px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n  .cards:hover {\n    box-shadow: 0 0 2em #999;\n    height: auto;\n    transition: height 0.3s ease, box-shadow 0.5s ease;\n  }\n}\n\n\n@media screen and (max-width: 680px) {\n  .row{\n    display: table;\n    margin: 0 auto;\n    width:300px;\n  }\n  article {\n    width:80%;\n  }\n  .cards {\n  margin: 6px;\n    width: 250px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n  .cards:hover {\n    box-shadow: 0 0 2em #999;\n    height: auto;\n    transition: height 0.3s ease, box-shadow 0.5s ease;\n  }\n  .eventpicture{\n    margin: 2px;\n  }\n  .info-overflow{\n    margin: 2px;\n  }\n}\n"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "body {\n  background: #febbbb;\n  background: linear-gradient(135deg, #febbbb 0%, #fe9090 45%, #ff5c5c 100%);\n  font-size: 10px;\n  padding: 5em;\n}\n\n.eventpicture{\n\n  margin-top: 10px;\n  min-height: 20px;\n  background-image:url('http://www.zastavki.com/pictures/originals/2014/World___Italy_Summer_vacation_at_the_beach_in_the_resort_of_Rimini__Italy_063110_.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n  opacity: 0.85;\n\n}\n.info-overflow::before{\n\n  position: relative;\n\n  z-index: 3;\n  width: 100%;\n  height: 35%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 30%,rgba(0, 47, 64, 0) 50%, #002f40 100%);\n}\n\narticle{\n  z-index: 100;\n  opacity: 1;\n  float: left;\n  width: 30%;\n  margin: 15px;\n}\n\n.container1{\n  display: table;\n  margin: 0 auto;\n}\n.row{\n  padding-top: 50px;\n  padding-bottom: 50px;\n  display: table;\n  margin: 0 auto;\n}\n\n.text2{\n  color: auto;\n  margin:0px auto;\n  display: block;\n  letter-spacing: 1px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  padding-bottom: 80px;\n  text-align: justify;\n}\n\np {\n  height: 100%;\n}\n\n\nh1{\n  margin-top: 40px;\nposition: center;\nfont-family: 'Roboto', sans-serif;\nfont-weight: 600;\nfont-size: 40px;\ntext-align: center;\n}\n.linija {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #06d7d9;\n  margin-bottom: 50px;\n}\n\n.divider {\n  border-bottom: 1px solid #06d7d9;\n}\n\n.slova{\n  text-align: justify;\n  margin-top: 20px;\n  padding: 10px;\n  font-size: 16px;\n  font-family: 'Roboto', sans-serif;\n}\n#1{\n  float: left;\n\n\n}\n#3{\n  float: right;\n\n}\n#2{\n  float: left;\n\n}\n\n.cards {\nmargin: 6px;\n  width: 363px;\n  font-family: 'Roboto', sans-serif;\n  background: #f2f2f2;\n  border-radius: 3px;\n  cursor: pointer;\n  height: 13em;\n  padding: 1.5em;\n  position: relative;\n  transition: height 0.4s, box-shadow 0.5s;\n}\n.cards:hover {\n  box-shadow: 0 0 2em #999;\n  height: auto;\n  transition: height 0.3s ease, box-shadow 0.5s ease;\n}\n.cards:hover .divider {\n  opacity: 0.5;\n}\n.cards:hover .info {\n  transition: top 0.5s ease, opacity 1s ease;\n  visibility: visible;\n  top: 1%;\n  opacity: 1;\n  height: auto;\n}\n.cards:hover .icon {\n  font-size: 2em;\n  transition: font-size 0.3s, left 0.3s;\n}\n.cards .info {\n\n  visibility: hidden;\n  top: -50%;\n  opacity: 0;\n\n}\n\n.cards .title {\n  color: #999;\n  text-align: center;\n  font-weight: 300;\n  font-size: 20px;\n}\n.cards .lead {\n  color: #999;\n  font-weight: 100;\n  font-size: 2em;\n  text-align: center;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n.cards .btn {\n  color: #00c5a7;\n  border: 1px solid #00c5a7;\n  border-radius: 3px;\n  transition: color 0.3s, background 0.3s;\n}\n.cards .btn:hover {\n  background: #00c5a7;\n  color: #fff;\n  transition: background 0.5s ease;\n}\n\n@media screen and (max-width: 1130px) {\n  .row{\n    display: inline-block;\n    margin: 0px auto;\n    width:100%;\n  }\n  article {\n    width:30%;\n  }\n  .cards {\n  margin: 6px;\n    width: 300px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .row{\n    display: table;\n    margin: 0px auto;\n    padding: 0px;\n  }\n  article {\n    width:28%;\n  }\n  .cards {\n  margin: 6px;\n    width: 200px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n  .cards:hover {\n    box-shadow: 0 0 2em #999;\n    height: auto;\n    transition: height 0.3s ease, box-shadow 0.5s ease;\n  }\n}\n\n\n@media screen and (max-width: 680px) {\n  .row{\n    display: table;\n    margin: 0 auto;\n    width:300px;\n  }\n  article {\n    width:80%;\n  }\n  .cards {\n  margin: 6px;\n    width: 250px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n  .cards:hover {\n    box-shadow: 0 0 2em #999;\n    height: auto;\n    transition: height 0.3s ease, box-shadow 0.5s ease;\n  }\n  .eventpicture{\n    margin: 2px;\n  }\n  .info-overflow{\n    margin: 2px;\n  }\n}\n"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "body {\n  background: #febbbb;\n  background: linear-gradient(135deg, #febbbb 0%, #fe9090 45%, #ff5c5c 100%);\n  font-size: 10px;\n  padding: 5em;\n}\n.eventpicture{\n\n  margin-top: 10px;\n  min-height: 250px;\n\nbackground-image:url('http://treca-gimnazija.edu.ba/wp-content/uploads/2017/04/17777048_10212005603352038_1477071201_o.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n  opacity: 0.85;\n\n}\n.info-overflow::before{\n\n  position: relative;\n\n  z-index: 3;\n  width: 100%;\n  height: 35%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 30%,rgba(0, 47, 64, 0) 50%, #002f40 100%);\n}\n\narticle{\n  z-index: 100;\n  opacity: 1;\n  float: left;\n  width: 30%;\n  margin: 15px;\n\n}\n\n.container1{\n  display: table;\n  margin: 0 auto;\n}\n.row{\n  padding-top: 50px;\n  padding-bottom: 50px;\n  display: table;\n  margin: 0 auto;\n}\n\n.text2{\n  color: auto;\n  margin:0px auto;\n  display: block;\n  letter-spacing: 1px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  padding-bottom: 80px;\n  text-align: justify;\n}\n\np {\n  height: 100%;\n}\n\n\nh1{\n  margin-top: 40px;\nposition: center;\nfont-family: 'Roboto', sans-serif;\nfont-weight: 600;\nfont-size: 40px;\ntext-align: center;\n}\n.linija {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #06d7d9;\n  margin-bottom: 50px;\n}\n\n.divider {\n  border-bottom: 1px solid #06d7d9;\n}\n\n.slova{\n  text-align: justify;\n  margin-top: 20px;\n  padding: 10px;\n  font-size: 16px;\n  font-family: 'Roboto', sans-serif;\n}\n#1{\n  float: left;\n\n\n}\n#3{\n  float: right;\n\n}\n#2{\n  float: left;\n\n}\n\n.cards {\nmargin: 6px;\n  width: 363px;\n  font-family: 'Roboto', sans-serif;\n  background: #f2f2f2;\n  border-radius: 3px;\n  cursor: pointer;\n  height: 13em;\n  padding: 1.5em;\n  position: relative;\n  transition: height 0.4s, box-shadow 0.5s;\n}\n.cards:hover {\n  box-shadow: 0 0 2em #999;\n  height: auto;\n  transition: height 0.3s ease, box-shadow 0.5s ease;\n}\n.cards:hover .divider {\n  opacity: 0.5;\n}\n.cards:hover .info {\n  transition: top 0.5s ease, opacity 1s ease;\n  visibility: visible;\n  top: 1%;\n  opacity: 1;\n  height: auto;\n}\n.cards:hover .icon {\n  font-size: 2em;\n  transition: font-size 0.3s, left 0.3s;\n}\n.cards .info {\n\n  visibility: hidden;\n  top: -50%;\n  opacity: 0;\n\n}\n\n.cards .title {\n  color: #999;\n  text-align: center;\n  font-weight: 300;\n  font-size: 20px;\n}\n.cards .lead {\n  color: #999;\n  font-weight: 100;\n  font-size: 2em;\n  text-align: center;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n.cards .btn {\n  color: #00c5a7;\n  border: 1px solid #00c5a7;\n  border-radius: 3px;\n  transition: color 0.3s, background 0.3s;\n}\n.cards .btn:hover {\n  background: #00c5a7;\n  color: #fff;\n  transition: background 0.5s ease;\n}\n\n\n@media screen and (max-width: 1130px) {\n  .row{\n    display: inline-block;\n    margin: 0px auto;\n    width:100%;\n  }\n  article {\n    width:30%;\n  }\n  .cards {\n  margin: 6px;\n    width: 300px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .row{\n    display: table;\n    margin: 0px auto;\n    padding: 0px;\n  }\n  article {\n    width:28%;\n  }\n  .cards {\n  margin: 6px;\n    width: 200px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n  .cards:hover {\n    box-shadow: 0 0 2em #999;\n    height: 38em;\n    transition: height 0.3s ease, box-shadow 0.5s ease;\n  }\n}\n\n\n@media screen and (max-width: 680px) {\n  .row{\n    display: table;\n    margin: 0 auto;\n    width:300px;\n  }\n  article {\n    width:80%;\n  }\n  .cards {\n  margin: 6px;\n    width: 250px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n  .cards:hover {\n    box-shadow: 0 0 2em #999;\n    height: 38em;\n    transition: height 0.3s ease, box-shadow 0.5s ease;\n  }\n  .eventpicture{\n    margin: 2px;\n  }\n  .info-overflow{\n    margin: 2px;\n  }\n}\n"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "body {\n  background: #febbbb;\n  background: linear-gradient(135deg, #febbbb 0%, #fe9090 45%, #ff5c5c 100%);\n  font-size: 10px;\n  padding: 5em;\n}\n.eventpicture{\n\n  margin-top: 10px;\n  min-height: 20px;\nbackground-image:url('http://steleks.ba/wp-content/gallery/osmomartovski-steleks-kviz/ed2f2602641466cfe2b3cfa4f55a4d7d9868bae1b7bec51d4372f7883aa6d283.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment:fixed;\n  background-position:center center;\n  opacity: 0.85;\n\n}\n.info-overflow::before{\n\n  position: relative;\n\n  z-index: 3;\n  width: 100%;\n  height: 35%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 30%,rgba(0, 47, 64, 0) 50%, #002f40 100%);\n}\n\narticle{\n  z-index: 100;\n  opacity: 1;\n  float: left;\n  width: 30%;\n  margin: 15px;\n}\n\n.container1{\n  display: table;\n  margin: 0 auto;\n}\n.row{\n  padding-top: 50px;\n  padding-bottom: 50px;\n  display: table;\n  margin: 0 auto;\n}\n\n.text2{\n  color: auto;\n  margin:0px auto;\n  display: block;\n  letter-spacing: 1px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  padding-bottom: 80px;\n  text-align: justify;\n}\n\np {\n  height: 100%;\n}\n\n\nh1{\n  margin-top: 40px;\nposition: center;\nfont-family: 'Roboto', sans-serif;\nfont-weight: 600;\nfont-size: 40px;\ntext-align: center;\n}\n.linija {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #06d7d9;\n  margin-bottom: 50px;\n}\n\n.divider {\n  border-bottom: 1px solid #06d7d9;\n}\n\n.slova{\n  text-align: justify;\n  margin-top: 20px;\n  padding: 10px;\n  font-size: 16px;\n  font-family: 'Roboto', sans-serif;\n}\n#1{\n  float: left;\n\n\n}\n#3{\n  float: right;\n\n}\n#2{\n  float: left;\n\n}\n\n.cards {\nmargin: 6px;\n  width: 363px;\n  font-family: 'Roboto', sans-serif;\n  background: #f2f2f2;\n  border-radius: 3px;\n  cursor: pointer;\n  height: 13em;\n  padding: 1.5em;\n  position: relative;\n  transition: height 0.4s, box-shadow 0.5s;\n}\n.cards:hover {\n  box-shadow: 0 0 2em #999;\n  height: auto;\n  transition: height 0.3s ease, box-shadow 0.5s ease;\n}\n.cards:hover .divider {\n  opacity: 0.5;\n}\n.cards:hover .info {\n  transition: top 0.5s ease, opacity 1s ease;\n  visibility: visible;\n  top: 1%;\n  opacity: 1;\n  height: auto;\n}\n.cards:hover .icon {\n  font-size: 2em;\n  transition: font-size 0.3s, left 0.3s;\n}\n.cards .info {\n\n  visibility: hidden;\n  top: -50%;\n  opacity: 0;\n\n}\n\n.cards .title {\n  color: #999;\n  text-align: center;\n  font-weight: 300;\n  font-size: 20px;\n}\n.cards .lead {\n  color: #999;\n  font-weight: 100;\n  font-size: 2em;\n  text-align: center;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n.cards .btn {\n  color: #00c5a7;\n  border: 1px solid #00c5a7;\n  border-radius: 3px;\n  transition: color 0.3s, background 0.3s;\n}\n.cards .btn:hover {\n  background: #00c5a7;\n  color: #fff;\n  transition: background 0.5s ease;\n}\n\n@media screen and (max-width: 1130px) {\n  .row{\n    display: inline-block;\n    margin: 0px auto;\n    width:100%;\n  }\n  article {\n    width:30%;\n  }\n  .cards {\n  margin: 6px;\n    width: 300px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .row{\n    display: table;\n    margin: 0px auto;\n    padding: 0px;\n  }\n  article {\n    width:28%;\n  }\n  .cards {\n  margin: 6px;\n    width: 200px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n  .cards:hover {\n    box-shadow: 0 0 2em #999;\n    height: auto;\n    transition: height 0.3s ease, box-shadow 0.5s ease;\n  }\n}\n\n\n@media screen and (max-width: 680px) {\n  .row{\n    display: table;\n    margin: 0 auto;\n    width:300px;\n  }\n  article {\n    width:80%;\n  }\n  .cards {\n  margin: 6px;\n    width: 250px;\n    font-family: 'Roboto', sans-serif;\n    background: #f2f2f2;\n    border-radius: 3px;\n    cursor: pointer;\n    height: 13em;\n    padding: 1.5em;\n    position: relative;\n    transition: height 0.4s, box-shadow 0.5s;\n  }\n  .cards:hover {\n    box-shadow: 0 0 2em #999;\n    height: auto;\n    transition: height 0.3s ease, box-shadow 0.5s ease;\n  }\n  .eventpicture{\n    margin: 2px;\n  }\n  .info-overflow{\n    margin: 2px;\n  }\n}\n"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "body {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n}\nh1{\n  margin-top: 40px;\nposition: center;\nfont-family: 'Roboto', sans-serif;\nfont-weight: 700;\nfont-size: 50px;\ntext-align: center;\n\n}\nhr {\n  max-width: 70px;\n  border-width: 3px;\n  border-color: #06d7d9;\n}\n\n.picture{\nmin-height: 495px;\nbackground-image: url('../../assets/images/citaona1.png');\n\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position:center center;\n\n}\n.info-overflow{\n  transform: translateZ(0);\n    height: 495px;\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    z-index: 4;\n\n}\n.info-overflow::before{\n  position: absolute;\n  top: 0;\n  left: 0;\npadding-top: 80px;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: \"\";\n  background: linear-gradient(rgba(0, 47, 64, 0) 0%,rgba(0, 47, 64, 0) 50%, #002f40 100%);\n}\n\ntd {\n    padding: 5px;\n    text-align: left;\n    border-collapse: collapse;\n}\n\ntr {\n  display: inline-block;\n  margin: 1px;\n  margin-top: 1px;\n  margin-bottom: 0px;\n}\n\ntable {\n  background: white;\n  width: 59%;\n  margin:0 auto;\n  margin-top: 60px;\n  display: block;\n  margin-bottom: 150px;\n  font-family: 'Roboto', sans-serif;\n}\n\n.divider {\n  border-bottom: 1px solid #d9d9d9;\n  opacity: 0.5;\n}\n\np {\n  margin-bottom: 40px;\n}\n\n.slova{\n  font-size: 18px;\n  margin:0px auto;\n  display: table;\n  font-style: normal;\n  font-family: Roboto, sans-serif;\n  font-weight: bold;\n  color: #404040;\n  text-align: center;\n  margin-bottom: 7px;\n}\n\n.slova2{\n  font-size: 17px;\n  margin:0px auto;\n  display: table;\n  font-style: normal;\n  font-family: Roboto, sans-serif;\n  color: #404040;\n  text-align: center;\n}\n\n  .cards:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    /* background: rgba(255, 140, 26, 0.5); */\n    transition: all .3s linear;\n  }\n\n  .cards:hover:before {\n    background: none;\n  }\n\n.cards {\n  width: 240px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  box-shadow: rgba(0,0,0,.2) 3px 5px 5px;\n  border-radius: 3px;\n  cursor: pointer;\n  height: 100%;\n  opacity: 0.6;\n  position: relative;\n  transition: height 0.4s, box-shadow 0.5s;\n}\n.cards:hover {\n  -webkit-filter:none;\n          filter:none;\n  opacity: 1;\n  box-shadow: 0 0 2.5em #999;\n  height: 100%;\n  transition: height 0.3s ease, box-shadow 0.5s ease;\n}\n.cards:hover .divider {\n  opacity: 0.5;\n}\n.cards:hover .info {\n  transition: top 0.5s ease, opacity 1s ease;\n  display: block;\n  top: 1%;\n  opacity: 1;\n}\n.cards:hover .icon {\n  font-size: 2em;\n  transition: font-size 0.3s, left 0.3s;\n}\n.cards .info {\n  display: none;\n  top: -50%;\n  opacity: 0;\n  padding: 20px;\n  padding-top: 10px;\n}\n.cards .icon {\n  color: #febbbb;\n  font-size: 4em;\n  text-align: center;\n  padding: 0em;\n  position: relative;\n  left: 43%;\n  top: 0em;\n  transition: font-size 0.3s ease, left 0.3s ease;\n}\n\n.cards .lead {\n  color: #999;\n  font-weight: 100;\n  font-size: 2em;\n  text-align: center;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n\nimg{\n  width: 100%;\n  height:245px;\n  margin:0px auto;\n  display: block;\n}\n\n\n\n@media screen and (max-width: 1130px) {\n  table{\n    margin-top: 50px;\n    width: 77%;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  table{\n    margin-top: 50px;\n    width: 69%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  table{\n    margin:0px auto;\n    display: table;\n    margin-top: 50px;\n    width: 59%;\n  }\n}\n"

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "\n<app-navigation> </app-navigation>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "<div class=\"okvir\">\n  <h1>Naslov</h1>\n<p class=\"text\">\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a hendrerit quam, et placerat elit. Donec sed aliquet ligula. In ultrices viverra diam. Pellentesque dignissim non ipsum sit amet commodo. Donec pellentesque, velit quis imperdiet facilisis, mauris neque placerat sapien, at congue eros purus eu sem. Maecenas ac est rhoncus, consectetur nibh in, molestie dui. Sed vel scelerisque nisl, eu aliquam nunc. Sed pharetra ut augue ut venenatis. Vestibulum lorem risus, malesuada at ullamcorper at, laoreet a diam. Morbi elementum pretium placerat. Vestibulum nulla libero, faucibus a erat vel, viverra suscipit lacus. Sed et gravida elit.\n\nProin mi quam, lobortis non accumsan sit amet, feugiat et mauris. Integer nec nulla rhoncus, facilisis felis rhoncus, vehicula tellus. Donec porttitor lacus egestas nisl vehicula fermentum. Phasellus sagittis, elit sit amet eleifend pharetra, ligula quam feugiat arcu, nec interdum magna mi ac neque. Quisque a metus ac mi commodo mollis. Curabitur porta tellus ac augue ullamcorper blandit. Vivamus blandit scelerisque libero ac varius. Morbi et enim eget erat dapibus feugiat. Sed in diam condimentum, mollis nibh at, tincidunt augue. Vivamus iaculis semper accumsan. Aliquam semper vitae neque eget suscipit. Nulla placerat magna accumsan, mollis mi aliquet, feugiat metus. Ut et aliquet nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel dictum nisl, nec scelerisque eros. Proin hendrerit tempor nisl at laoreet.\n\nEtiam at lectus augue. Integer nec laoreet enim. Duis neque ipsum, dignissim ac luctus non, placerat ut risus. Praesent in ex ex. Nullam ut neque eros. Nunc feugiat aliquam lacinia. Maecenas finibus sodales odio non aliquet. Donec lobortis id nulla in dictum. Cras sed libero sit amet ipsum blandit lobortis. Morbi fermentum lectus id maximus sagittis. Donec libero odio, luctus eu mi quis, iaculis venenatis libero. In ultrices, lorem egestas imperdiet pharetra, sapien enim rhoncus quam, non tempus ante lectus et sapien.\n</p>\n</div>\n\n\n<div class=\"images\">\n  <div class=\"image\">\n    <img src=\"assets/images/bh-telecom.jpg\"  style=\"width:126px;height:126px;\">\n  </div>\n\n  <div class=\"image\">\n        <img src=\"assets/images/BSTS_logo.png\" style=\"width:126px;height:126px;\" />\n  </div>\n\n  <div class=\"image\">\n        <img src=\"assets/images/disti.jpg\" style=\"width:126px;height:126px;\" />\n  </div>\n\n  <div class=\"image\">\n        <img src=\"assets/images/diveco-energo.png\" style=\"width:126px;height:126px;\" />\n  </div>\n\n  <div class=\"image\">\n        <img src=\"assets/images/infostudio.jpg\" style=\"width:126px;height:126px;\" />\n  </div>\n\n  <div class=\"image\">\n        <img src=\"assets/images/mistral.png\" style=\"width:126px;height:126px;\" />\n  </div>\n\n  <div class=\"image\">\n        <img src=\"assets/images/zira.jpg\" style=\"width:126px; height:126px;\" />\n  </div>\n\n  <div class=\"image\">\n        <img src=\"assets/images/images.jpg\" style=\"width:126px;height:126px;\" />\n  </div>\n</div>\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<div class=\"onama\">\n<div class=\"picture\">\n  <div class=\"info-overflow\">\n\n  </div>\n</div>\n<div class=\"content\">\n  <h1> O nama </h1>\n  <hr class=\"primary\">\n  <div class=\"historija\">\n    <p>\n  Steleks je matično udruženje studenata Elektrotehničkog fakulteta u Sarajevu.\n  Osnovan je 22.11. 1968 godine kao udruženje građana. Stvoren je da bi pomogao studentima pri ostvarivanju njihovih osnovnih prava tokom studija, što je ujedno i njegov primarni zadatak.\n  U okviru Steleksa organizovane su razne aktivnosti edukativnog, kulturnog i sportskog sadržaja.\n  Inicijatori cijele ideje, tj. osnivači Steleksa su Pavle Blum, Gojko Babić (prvi predsjednik Društva), Mašo Užičanin, Nikolina Milošević, Miro Vego, Zoran Dropulić, Andrija Batrolović, Dunja Uzunović, Mina Pilav, Mirsad Pirić, Pero Boro, Ibrahim Polimac, Emir Sefo i Mustafa Trklja (drugi predsjednik Društva).\n  Ime Steleks je predložio Miro Vego, kao skraćenicu za STudentski ELEktrotehnički Klub i Servis.\n  Steleks je svojim radom i zalaganjem članova 1976. godine od strane grada Sarajevo primio najveće priznanje, Šestoaprilsku nagradu Grada Sarajeva, sa čime se malo koja organizacija na ovom podneblju moze pohvaliti.\n  Stari Steleks je bio lociran na desnoj obali Miljacke, uzvodno od mosta Vrbanja, na adresi Gundulićeva 2. Poslije rata na tom mjestu je napravljen parking, te je Stleleks premješten u prostorije glavne zgrade Elektrotehničkog fakulteta u Sarajevu.</p>\n  </div>\n  <div class=\"projekti\">\n    <h2>Projekti</h2>\n    <div class=\"nazivi\">\n    <ul>\n    <li>Elektrijada</li>\n    <li>Sarajevo Innovations Festival</li>\n    <li>Steleksijada</li>\n    <li>League of Robots</li>\n    <li>Kvizovi</li>\n    </ul>\n    </div>\n    <div class=\"slike\">\n    <img src='../../assets/images/projektiE.jpg' >\n    <img src='../../assets/images/s1.png' >\n    <img src='../../assets/images/projektiS.jpg' >\n    </div>\n  </div>\n\n</div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"prijava\">\n<div class=\"form-content\">\n\n<form >\n    <fieldset class=\"groupBox\">\n      <h2>Prijava za admina</h2>\n\n        <input [(ngModel)]=\"Username\" type=\"text\" placeholder=\"Username...\" id=\"username\" name=\"username\" style=\"margin-top:50px\">\n      <input type=\"password\" placeholder=\"Password...\" [(ngModel)]=\"Password\" id=\"password\"  name=\"password\" style=\"margin-bottom:20px\">\n\n  <input type=\"submit\" value=\"Prijava\" (click)=\"print()\" />\n\n\n  </fieldset>\n</form>\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<div class=\"elektrijada\">\n  <div class=\"form-content\">\n    <h2>MODERATORI</h2>\n  <table>\n    <tr>\n      <th></th>\n      <th>Naziv moderatora</th>\n      <th style=\"text-align:center;\">Opcija</th>\n    </tr>\n    <tr *ngFor=\"let i of moderatori; let j=index\">\n      <td style=\"width:6%;\">{{redniBroj(i)}}.</td>\n      <td>{{i}}</td>\n      <td style=\"width:20%;\">\n        <button class=\"button1\" (click)=obrisiModeratora(j)>Delete</button>\n      </td>\n    </tr>\n  </table>\n  <div>\n    <button (click)=\"ShowButton()\">Registracija novog moderatora</button>\n    <div *ngIf=\"showSelected==true\">\n      <fieldset class=\"groupBox\">\n        <input type=\"text\" [(ngModel)]=\"ime\"  placeholder=\"Ime\" required>\n        <input type=\"text\" [(ngModel)]=\"prezime\" placeholder=\"Prezime\" required>\n        <input type=\"text\" placeholder=\"Tip\" required>\n        <div class=\"error\" *ngIf=\"errorMessageIme!=''\">{{errorMessageIme}}</div>\n        <div class=\"error\" *ngIf=\"errorMessagePrezime!=''\">{{errorMessagePrezime}}</div>\n        <div class=\"poruka\" *ngIf=\"messageUspjesno!=''\">{{messageUspjesno}}</div>\n        <button class=\"button2\" (click)=\"HideButton()\">Cancel</button>\n        <button class=\"button2\" (click)=\"dodajModeratora()\" style=\"float:right;\">Add</button>\n\n      </fieldset>\n    </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "\n\n<body>\n<ul id=\"albums\">\n    \t\t<li>\n    \t\t\t<a [routerLink]=\"['/galerija']\" title=\"\" >\n    \t\t\t\t<img src=\"{{albumi[0].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n            \t<img src=\"{{albumi[1].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n              \t<img src=\"{{albumi[2].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n                \t<img src=\"{{albumi[3].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n\n                  <p>+{{albumi[0].brojSlika}}</p>\n    \t\t\t</a>\n\n    \t\t\t<h5>{{albumi[0].naziv}}</h5>\n    \t\t</li>\n        <li>\n    \t\t\t<a [routerLink]=\"['/galerija']\" title=\"\" >\n    \t\t\t\t<img src=\"{{albumi[3].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n            \t<img src=\"{{albumi[1].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n              \t<img src=\"{{albumi[2].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n                \t<img src=\"{{albumi[3].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n\n<p>+{{albumi[01].brojSlika}}</p>\n    \t\t\t</a>\n    \t\t\t<h5>{{albumi[1].naziv}}</h5>\n    \t\t</li>\n        <li>\n          <a [routerLink]=\"['/galerija']\" title=\"\" >\n            <img src=\"{{albumi[2].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n              <img src=\"{{albumi[1].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n                <img src=\"{{albumi[2].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n                  <img src=\"{{albumi[3].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n\n  <p>+{{albumi[1].brojSlika}}</p>\n          </a>\n\n          <h5>{{albumi[3].naziv}}</h5>\n        </li>\n\n      <li>\n        <a [routerLink]=\"['/galerija']\" title=\"\" >\n          <img src=\"{{albumi[0].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n            <img src=\"{{albumi[1].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n              <img src=\"{{albumi[2].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n                <img src=\"{{albumi[3].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n\n<p>+{{albumi[2].brojSlika}}</p>\n        </a>\n\n        <h5>{{albumi[2].naziv}}</h5>\n      </li>\n\n    <li>\n      <a [routerLink]=\"['/galerija']\" title=\"\" >\n        <img src=\"{{albumi[1].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n          <img src=\"{{albumi[1].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n            <img src=\"{{albumi[2].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n              <img src=\"{{albumi[3].backgroundSlika}}\" width=\"\" height=\"\" alt=\"\" />\n\n  <p>+{{albumi[3].brojSlika}}</p>\n      </a>\n\n      <h5>{{albumi[2].naziv}}</h5>\n    </li>\n      </ul>\n    </body>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<div id=\"event\" class=\"eventpicture animation-on\">\n\n<div class=\"info-overflow\">\n<div class=\"info-dash\">\n    <div class=\"info-inner\">\n      <div class=\"event-info\">\n        <div class=\"name\">\n          Elektrijada\n          </div>\n          <p class=\"text1\">Međunarodni susreti studenata elektrotehnike, poznatiji kao Elektrijada, tradicionalno se održavaju skoro pola stoljeća na prostorima bivše Jugoslavije i predstavljaju najveći godišnji skup studenata elektrotehnike u jugoistočnoj Evropi, a i šire. Elektrijada kroz svoje programe širi i populariše sve sfere aktivnog studentskog života – naučni rad, takmičenja u znanju, sportska takmičenja, edukativne programe i zabavu.\n          </div>\n\n    </div>\n</div>\n</div>\n</div>\n<div>\n<div class=\"prvi\">\n<ul class=\"tab\">\n\n  <li *ngFor=\"let i of godineElektrijade;\">\n    <div (click)=\"f(i)\">{{i}}</div>\n  </li>\n</ul>\n</div>\n\n<div class=\"drugi_dio\">\n<div class=\"text3\" >\n  <h1> {{naslov}} </h1>\n  <hr class=\"primary\">\n  <div>{{sadrzaj}} </div>\n</div>\n</div>\n</div>\n<div class=\"medalje\">\n<div class=\"PrikazPlasmana\">\n  <figure class=\"prikaz\"id =\"prikazPrvog\">\n  <div class=\"text\">\n\n      <h2 class=\"NaslovTeme\">Slobodan pad</h2>\n      <div class=\"takmicari\">Slema Ahmetovic </div>\n        <div class=\"takmicari\">Selma Hanjalic </div>\n    </div>\n\n    <div class=\"media\">\n      <img src=\"assets/images/zlato.jpg\" >\n    </div>\n    <a href=\"#\"></a>\n  </figure>\n  <figure class=\"prikaz\" id =\"prikazDrugog\">\n  <div class=\"text\">\n\n      <h2 class=\"NaslovTeme\">Mehanika fluida</h2>\n      <div class=\"takmicari\">Amila Mujak </div>\n        <div class=\"takmicari\">Amina Aljicevic </div>\n    </div>\n\n    <div class=\"media\">\n      <img src=\"assets/images/srebro.jpg\" >\n    </div>\n    <a href=\"#\"></a>\n  </figure>\n  <figure class=\"prikaz\" id =\"prikazTreceg\">\n  <div class=\"text\">\n\n    <h2 class=\"NaslovTeme\">Termodinamika</h2>\n    <div class=\"takmicari\">Emir Avdisaphic</div>\n      <div class=\"takmicari\">Nur ... </div>\n    </div>\n\n    <div class=\"media\">\n      <img src=\"assets/images/bronza.jpg\" >\n    </div>\n    <a href=\"#\"></a>\n  </figure>\n</div>\n</div>\n\n<app-sponzori></app-sponzori>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<div id=\"event\" class=\"eventpicture animation-on\">\n\n<div class=\"info-overflow\">\n<div class=\"info-dash\">\n    <div class=\"info-inner\">\n      <div class=\"event-info\">\n        <div class=\"name\">\n          Steleksijada\n        </div>\n        <div class=\"place\">\n          Sarajevo, BiH\n        </div>\n        <div class=\"date\">\n          April   06 - 07  2018\n        </div>\n      </div>\n    </div>\n</div>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<div id=\"event\" class=\"eventpicture animation-on\">\n\n<div class=\"info-overflow\">\n<div class=\"info-dash\">\n    <div class=\"info-inner\">\n      <div class=\"event-info\">\n        <div class=\"name\">\n          League of Robots\n        </div>\n        <div class=\"place\">\n          Sarajevo, BiH\n        </div>\n        <div class=\"date\">\n          Novembar   01 - 07  2018\n        </div>\n      </div>\n    </div>\n</div>\n</div>\n\n</div>\n\n<app-tekst></app-tekst>\n\n\n<app-sponzori> </app-sponzori>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<div id=\"event\" class=\"eventpicture animation-on\">\n\n<div class=\"info-overflow\">\n<div class=\"info-dash\">\n    <div class=\"info-inner\">\n      <div class=\"event-info\">\n        <div class=\"name\">\n          Elektrijada\n        </div>\n        <div class=\"place\">\n          Rimini, Italija\n        </div>\n        <div class=\"date\">\n          Maj   19 - 26  2018\n        </div>\n      </div>\n    </div>\n</div>\n</div>\n\n</div>\n\n<app-tekst2></app-tekst2>\n\n\n<app-sponzori> </app-sponzori>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<div id=\"event\" class=\"eventpicture animation-on\">\n\n<div class=\"info-overflow\">\n<div class=\"info-dash\">\n    <div class=\"info-inner\">\n      <div class=\"event-info\">\n        <div class=\"name\">\n          Steleksijada\n        </div>\n        <div class=\"place\">\n          Sarajevo, BiH\n        </div>\n        <div class=\"date\">\n          April   06 - 07  2018\n        </div>\n      </div>\n    </div>\n</div>\n</div>\n\n</div>\n\n<app-tekst3></app-tekst3>\n\n\n<app-sponzori> </app-sponzori>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<div id=\"event\" class=\"eventpicture animation-on\">\n\n<div class=\"info-overflow\">\n<div class=\"info-dash\">\n    <div class=\"info-inner\">\n      <div class=\"event-info\">\n        <div class=\"name\">\n          Osmomartovski kviz\n        </div>\n        <div class=\"place\">\n          Sarajevo, BiH\n        </div>\n        <div class=\"date\">\n          Mart   08  2018\n        </div>\n      </div>\n    </div>\n</div>\n</div>\n\n</div>\n\n<app-tekst4></app-tekst4>\n\n\n<app-sponzori> </app-sponzori>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n<footer class=\"footer\">\n  <div class=\"footer-left\">\n    <div class=\"lokacija\"><iframe width=\"300\" height=\"180\" src=\"https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=Elektrotehnicki%20fakultet%20Sarajevo+(Steleks)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\n      <a href=\"https://www.maps.ie/create-google-map/\">Add map to website</a></iframe></div><br />\n  </div>\n\n  <div class=\"footer-center\">\n    <div class=\"left\">\n      <i class=\"fa fa-map-marker\"></i>\n      <p><span> Zmaja od Bosne bb</span> Sarajevo, Bosna i Hercegovina</p>\n    </div>\n    <div class=\"left\">\n      <i class=\"fa fa-phone\"></i>\n      <p> (+387) 33 250 749</p>\n    </div>\n    <div class=\"left\">\n      <i class=\"fa fa-envelope\"></i>\n      <p><a href=\"#\"> steleks.ba@gmail.com</a></p>\n    </div>\n  </div>\n  <div class=\"footer-right2\">\n    <div class=\"friends2\">\n      <p class=\"friends\"><a href=\"https://zamger.etf.unsa.ba/\"> zamger.etf.unsa.ba</a></p>\n      <p class=\"friends\"><a href=\"https://c2.etf.unsa.ba/\"> c2.etf.unsa.ba</a></p>\n      <p class=\"friends\"><a href=\"http://www.etf.unsa.ba/\"> etf.unsa.ba</a></p>\n    </div>\n      <div class=\"icons\">\n        <a href=\"https://www.facebook.com/STELEKS/\"><i class=\"fa fa-facebook\"></i></a>\n        <a href=\"https://twitter.com/steleks_etf_sa\"><i class=\"fa fa-twitter\"></i></a>\n        <a href=\"https://www.youtube.com/channel/UC-vcMTYwoNTY8XsskaG9YTQ\"><i class=\"fa fa-youtube\"></i></a>\n        <a href=\"http://www.thepictaram.club/instagram/etfsteleks/\"><i class=\"fa fa-instagram\"></i></a>\n      </div>\n  </div>\n  <div class=\"footer-right2\">\n    <h2 style=\"padding-bottom:40px;\"> <span> <img src=\"assets/images/steleks_logo.svg\"></span></h2>\n\n    <p class=\"name\"> Created by: &copy; Steleks IT team</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"elektrijada\">\n<div class=\"form-content\">\n<form>\n  <h2>Izvještaj događaja</h2>\n  <fieldset class=\"groupBox1\">\n    <input type=\"text\" name=\"year\" placeholder=\"Naziv događaja\"/>\n    <input type=\"text\" name=\"location\" placeholder=\"Lokacija\"/>\n    <fieldset class=\"groupBox2\">\n    <label for=\"datum\">Datum događaja: </label>\n    <input type=\"text1\" id=\"datum\" name=\"datum\" placeholder=\"dd.mm.yyyy.\"/>\n    </fieldset>\n    <fieldset class=\"groupBox2\">\n    <label for=\"pozadina\">Pozadina: </label>\n    <input type=\"file\" id=\"pozadina\" name=\"pozadina\" accept=\"image/*\">\n    </fieldset>\n    <textarea placeholder=\"About\" onkeyup=\"adjust_textarea(this)\"></textarea>\n    <textarea placeholder=\"Učesnici\" onkeyup=\"adjust_textarea(this)\"></textarea>\n    <textarea placeholder=\"Mjesto\" onkeyup=\"adjust_textarea(this)\"></textarea>\n    <textarea placeholder=\"Učešće\" onkeyup=\"adjust_textarea(this)\"></textarea>\n\n</fieldset>\n<fieldset class=\"groupBox3\">\n  <form>\n <input type=\"button\" value=\"Dodaj\" />\n</form>\n</fieldset>\n</form>\n\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"elektrijada\">\n<div class=\"form-content\">\n<form>\n  <h2>Najava događaja</h2>\n  <fieldset class=\"groupBox1\">\n    <input type=\"text\" name=\"year\" placeholder=\"Naziv događaja\"/>\n    <input type=\"text\" name=\"location\" placeholder=\"Lokacija\"/>\n    <fieldset class=\"groupBox2\">\n    <label for=\"datum\">Datum događaja: </label>\n    <input type=\"text1\" id=\"datum\" name=\"datum\" placeholder=\"dd.mm.yyyy.\"/>\n    </fieldset>\n    <fieldset class=\"groupBox2\">\n    <label for=\"pozadina\">Pozadina: </label>\n    <input type=\"file\" id=\"pozadina\" name=\"pozadina\" accept=\"image/*\">\n    </fieldset>\n    <textarea placeholder=\"About\" onkeyup=\"adjust_textarea(this)\"></textarea>\n    <textarea placeholder=\"Učesnici\" onkeyup=\"adjust_textarea(this)\"></textarea>\n    <textarea placeholder=\"Mjesto\" onkeyup=\"adjust_textarea(this)\"></textarea>\n    <textarea placeholder=\"Učešće\" onkeyup=\"adjust_textarea(this)\"></textarea>\n\n</fieldset>\n<fieldset class=\"groupBox3\">\n  <form>\n <input type=\"button\" value=\"Dodaj\" />\n</form>\n</fieldset>\n</form>\n\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"elektrijada\">\n<div class=\"form-content\">\n<form>\n  <h2>Elektrijada</h2>\n  <fieldset class=\"groupBox1\">\n    <input type=\"text\" [(ngModel)]=\"naziv\" name=\"naziv\" placeholder=\"Naziv\"/>\n    <input type=\"text\" [(ngModel)]=\"godina\" name=\"godina\" placeholder=\"Godina\"/>\n    <textarea [(ngModel)]=\"sadrzaj\" name=\"sadrzaj\" placeholder=\"About\" onkeyup=\"adjust_textarea(this)\"></textarea>\n</fieldset>\n<fieldset class=\"groupBox\">\n  <legend >Prvo mjesto</legend>\n <input type=\"text\" [(ngModel)]=\"faculty1\" name=\"faculty1\" placeholder=\"Fakultet\"/>\n</fieldset>\n\n<fieldset class=\"groupBox\">\n  <legend>Drugo mjesto</legend>\n  <input type=\"text\" [(ngModel)]=\"faculty2\" name=\"faculty2\" placeholder=\"Fakultet\"/>\n</fieldset>\n\n<fieldset class=\"groupBox\">\n  <legend>Trece mjesto</legend>\n  <input type=\"text\" [(ngModel)]=\"faculty3\" name=\"faculty3\" placeholder=\"Fakultet\"/>\n</fieldset>\n <fieldset class=\"groupBox2\">\n  <input type=\"button\" (click)=\"print()\"  value=\"Dodaj\" />\n</fieldset>\n</form>\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"prijava\">\n<div class=\"form-content\">\n\n<form>\n    <fieldset class=\"groupBox\">\n      <h2>Galerija</h2>\n      <input type=\"text\" name=\"year\" placeholder=\"Naziv albuma\"/>\n    <!--  <input type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" multiple/>-->\n    <!--  <button type=\"button\" (click)=\"upload()\">Upload</button> -->\n      <input type=\"button\" value=\"Dodaj\" />\n\n  </fieldset>\n</form>\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"sifi\">\n<div class=\"form-content\">\n  <h2>Sarajevo Innovations Festival</h2>\n  <fieldset class=\"groupBox1\">\n    <form>\n    <input type=\"text\" name=\"year\" placeholder=\"Godina\"/>\n    <textarea placeholder=\"About\" onkeyup=\"adjust_textarea(this)\"></textarea>\n  </form>\n</fieldset>\n<fieldset class=\"groupBox\">\n  <form>\n  <legend >Prvo mjesto</legend>\n <input type=\"text\" name=\"faculty1\" placeholder=\"Naziv rada\"/>\n <input type=\"file\" style=\"display: none\" #file>\n <button class=\"button2\" (click)=\"file.click()\"> Dodaj rad </button>\n\n</form>\n <table >\n     <tbody>\n         <tr *ngFor=\"let field1 of fieldArray1; let i = index\">\n             <td>\n                 <input [(ngModel)]=\"field1.name\" class=\"form-control\" type=\"text\" name=\"{{field1.name}}\" placeholder=\"Učesnik\"/>\n             </td>\n             <td>\n                 <button class=\"btn btn-default\"  type=\"button\" (click)=\"deleteFieldValue1(i)\">Delete</button>\n             </td>\n         </tr>\n         <tr>\n             <td>\n                 <input class=\"form-control\" type=\"text\" id=\"newAttributeName1\" [(ngModel)]=\"newAttribute1.name\" name=\"newAttributeName1\" placeholder=\"Učesnik\"/>\n             </td>\n             <td>\n                 <button class=\"btn btn-default\" type=\"button\" (click)=\"addFieldValue1()\">Add</button>\n             </td>\n         </tr>\n     </tbody>\n </table>\n</fieldset>\n\n<fieldset class=\"groupBox\">\n  <form>\n  <legend>Drugo mjesto</legend>\n  <input type=\"text\" name=\"faculty2\" placeholder=\"Naziv rada\"/>\n  <input type=\"file\" style=\"display: none\" #file>\n  <button class=\"button2\" (click)=\"file.click()\"> Dodaj rad </button>\n</form>\n<table >\n    <tbody>\n        <tr *ngFor=\"let field2 of fieldArray2; let j = index\">\n            <td>\n                <input [(ngModel)]=\"field2.name\" class=\"form-control\" type=\"text\" name=\"{{field2.name}}\" placeholder=\"Učesnik\"/>\n            </td>\n            <td>\n                <button class=\"btn btn-default\"  type=\"button\" (click)=\"deleteFieldValue2(j)\">Delete</button>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <input class=\"form-control\" type=\"text\" id=\"newAttributeName2\" [(ngModel)]=\"newAttribute2.name\" name=\"newAttributeName2\" placeholder=\"Učesnik\"/>\n            </td>\n            <td>\n                <button class=\"btn btn-default\" type=\"button\" (click)=\"addFieldValue2()\">Add</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n</fieldset>\n\n<fieldset class=\"groupBox\">\n  <form>\n  <legend>Trece mjesto</legend>\n  <input type=\"text\" name=\"faculty3\" placeholder=\"Naziv rada\"/>\n  <input type=\"file\" style=\"display: none\" #file>\n  <button class=\"button2\" (click)=\"file.click()\"> Dodaj rad </button>\n  </form>\n  <table>\n      <tbody>\n          <tr *ngFor=\"let field3 of fieldArray3; let k = index\">\n              <td>\n                  <input [(ngModel)]=\"field3.name\" class=\"form-control\" type=\"text\" name=\"{{field3.name}}\" placeholder=\"Učesnik\"/>\n              </td>\n              <td>\n                  <button class=\"btn btn-default\"  type=\"button\" (click)=\"deleteFieldValue3(k)\">Delete</button>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                  <input class=\"form-control\" type=\"text\" id=\"newAttributeName3\" [(ngModel)]=\"newAttribute3.name\" name=\"newAttributeName3\" placeholder=\"Učesnik\"/>\n              </td>\n              <td>\n                  <button class=\"btn btn-default\" type=\"button\" (click)=\"addFieldValue3()\">Add</button>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n\n</fieldset>\n <fieldset class=\"groupBox2\">\n   <form>\n  <input type=\"button\" value=\"Dodaj\" />\n</form>\n</fieldset>\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"prijava\">\n<div class=\"form-content\">\n\n<form>\n    <fieldset class=\"groupBox\">\n      <h2>Sponzori</h2>\n      <input type=\"text\" [(ngModel)]=\"sponzor.naziv\" name=\"naziv\" placeholder=\"Naziv sponzora\"/>\n      <input type=\"file\" [(ngModel)]=\"sponzor.slika\" name=\"slika\" accept=\"image/*\">\n      <input type=\"button\" (click)=\"print()\" value=\"Dodaj\" />\n\n  </fieldset>\n</form>\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<gallerypage [datasource]=images></gallerypage>"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<html>\n<body>\n  <ul id=\"thumbnailsList\">\n    <div class=\"gallery\">\n      <!--<h1>{{datasource[0].caption}}</h1>-->\n     <li *ngFor=\"let image of datasource\" >\n        <img src=\"{{image.url}}\" class=\"tn\"\n       height=\"auto\" width=\"100%\"\n      data-toggle=\"modal\" data-target=\"#selectedImageModal\"\n                (click)=setSelectedImage(image)>\n     </li>\n   </div>\n  </ul>\n\n\n\n  <div class=\"modal\" id=\"selectedImageModal\" >\n\n        <div class=\"modal-all\" >\n\n            <div class=\"selectedImage\" *ngIf=\"selectedImage\">\n\n                <img src=\"{{selectedImage.url}}\" >\n\n                 <button type=\"button\" class=\"seq-prev\" (click)=navigate(false) aria-label=\"Previous\">Previous</button>\n                 <button type=\"button\" class=\"seq-next\" (click)=navigate(true) aria-label=\"Next\">Next</button>\n\n</div>\n\n\n\n    </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<p>\n  learningpage works!\n</p>\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "\n<app-mainpicture> </app-mainpicture>\n<app-stelekstv> </app-stelekstv>\n<app-skills> </app-skills>\n<app-sponzori></app-sponzori>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<div class=\"eventpicture animation-on \" id=mnpicture>\n  <div class=\"info-overflow\">\n\n      <div class=event-info>\n  <div class=\"content-table\">\n  <h1 class=\"slogan\">BUDI DIO <br>NAŠE <br> PRIČE</h1>\n  <p class=\"about\">\nSteleks je matično udruženje studenata Elektrotehničkog fakulteta u Sarajevu.\nOsnovan je 22.11. 1968 godine kao udruženje građana.\nStvoren je da bi pomogao studentima pri ostvarivanju njihovih osnovnih prava tokom studija.\nU okviru Steleksa organizovane su razne aktivnosti edukativnog, kulturnog i sportskog sadržaja.\n  </p>\n\n  \n\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"prijava\">\n<div class=\"form-content\">\n\n<form>\n    <fieldset class=\"groupBox\">\n      <h2>Prijava za moderatora</h2>\n\n        <input [(ngModel)]=\"Username\" type=\"text\" placeholder=\"Username...\" id=\"username\" name=\"username\" style=\"margin-top:50px\">\n      <input type=\"password\" placeholder=\"Password...\" [(ngModel)]=\"Password\" id=\"password\"  name=\"password\" style=\"margin-bottom:20px\">\n      <a href=\"http://localhost:4200/moderator\">\n  <input type=\"submit\" value=\"Prijava\" (click)=\"print()\" />\n</a>\n  </fieldset>\n</form>\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "<div class=\"elektrijada\">\n  <div class=\"form-content\">\n    <h2>ULOGE MODERATORA</h2>\n  <table>\n    <tr>\n      <th></th>\n      <th>Opis zadatka</th>\n      <th style=\"text-align:center;\">Opcija</th>\n    </tr>\n    <tr>\n      <td style=\"width:6%;\">1.</td>\n      <td>Dodavanje novog sponzora</td>\n      <td style=\"width:20%;\">\n        <a href=\"#\" class=\"button1\">OK</a>\n      </td>\n    </tr>\n    <tr>\n      <td style=\"width:6%;\">2.</td>\n      <td>Dodavanje sadržaja za Elektrijadu</td>\n      <td style=\"width:20%;\">\n        <a href=\"http://localhost:4200/formaelektrijada\" class=\"button1\">OK</a>\n      </td>\n    </tr>\n    <tr>\n      <td style=\"width:6%;\">3.</td>\n      <td>Dodavanje sadržaja za Sifi</td>\n      <td style=\"width:20%;\">\n        <a href=\"http://localhost:4200/formasifi\" class=\"button1\">OK</a>\n      </td>\n    </tr>\n    <tr>\n      <td style=\"width:6%;\">4.</td>\n      <td>Dodavanje sadržaja za Galeriju</td>\n      <td style=\"width:20%;\">\n        <a href=\"#\" class=\"button1\">OK</a>\n      </td>\n    </tr>\n    <tr>\n      <td style=\"width:6%;\">5.</td>\n      <td>Dodavanje najave event-a</td>\n      <td style=\"width:20%;\">\n        <a href=\"#\" class=\"button1\">OK</a>\n      </td>\n    </tr>\n    <tr>\n      <td style=\"width:6%;\">6.</td>\n      <td>Dodavanje izvještaja event-a</td>\n      <td style=\"width:20%;\">\n        <a href=\"#\" class=\"button1\">OK</a>\n      </td>\n    </tr>\n  </table>\n</div>\n</div>\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "<header class=\"my-header\" [ngClass]= \"{'page-scroll-header': isScrolled}\">\n\n\n  <nav role=\"navigation\" id=\"nav-main\" class=\"okayNav clearfix\">\n\n    <ul>\n      <li><a class=\"logo\" href=\"#\">\n        <img [src]=\"steleks\" >     </a></li>\n\n      <li><a [routerLink]=\"['/#']\">Početna</a></li>\n      <li><a [routerLink]=\"['/about']\">O nama</a></li>\n      <li><a [routerLink]=\"['/news']\">Vijesti</a></li>\n      <li><a [routerLink]=\"['/upravniodbor']\">Upravni odbor</a></li>\n      <li><a [routerLink]=\"['/elektrijada']\">Elektrijada</a></li>\n      <li><a [routerLink]=\"['/sifi']\">Sifi</a></li>\n      <li><a [routerLink]=\"['/gallery']\">Galerija</a></li>\n\n    </ul>\n\n    <div class=\"drugi\">\n      <div class=\"lijevo\">\n      <a class=\"logo\" href=\"#\">\n        <img [src]=\"steleks\" >     </a>\n      </div>\n      <div class=\"desno\" (click)=klik()>\n      <a class=\"menu\"  >\n        <img [src]=\"meni\" >     </a>\n\n      </div>\n\n      <ul class=\"mob\" id=\"mob1\">\n\n        <li><a [routerLink]=\"['/#']\">Početna</a></li>\n        <li><a [routerLink]=\"['/about']\">O nama</a></li>\n        <li><a [routerLink]=\"['/news']\">Vijesti</a></li>\n        <li><a [routerLink]=\"['/upravniodbor']\">Upravni odbor</a></li>\n        <li><a [routerLink]=\"['/elektrijada']\">Elektrijada</a></li>\n        <li><a [routerLink]=\"['/sifi']\">Sifi</a></li>\n        <li><a [routerLink]=\"['/gallery']\">Galerija</a></li>\n\n      </ul>\n\n    </div>\n\n\n  </nav>\n</header>\n<!-- /header -->\n"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<div class=\"picture\">\n  <div class=\"info-overflow\">\n\n  </div>\n</div>\n\n<h1> Vijesti </h1>\n<hr class=\"primary\">\n<div class=\"vijesti-screen\">\n\n<figure class=\"vijest\" *ngFor=\"let i of events;\">\n  <img src={{i.slika}} class=\"imgs\" >\n  <div class=\"datum\"><span class=\"dan\">12</span><span class=\"mjesec\">Maj</span></div>\n  <figcaption>\n    <h3>{{i.naziv}}</h3>\n    <p>\n    {{i.kratkiTekst}}\n    </p>\n    <button [routerLink]=\"[i.link]\" class=\"button\">Pročitaj više</button>\n  </figcaption><a ></a>\n</figure>\n\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "<div class=\"elektrijada\">\n<div class=\"form-content\">\n<div>\n  <h2>REGISTRACIJA</h2>\n  <fieldset class=\"groupBox\">\n  <input type=\"text\" [(ngModel)]=\"ime\" name=\"ime\" placeholder=\"Ime\" required>\n  <input type=\"text\" [(ngModel)]=\"prezime\" name=\"prezime\" placeholder=\"Prezime\" required>\n  <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required>\n</fieldset>\n<fieldset class=\"groupBox\">\n  <input type=\"text\" [(ngModel)]=\"emailFakultet\" name=\"emailFakultet\" placeholder=\"Fakultetski mail\" required>\n  <input type=\"text\" [(ngModel)]=\"brojTelefona\" name=\"brojTelefona\" placeholder=\"Broj telefona\" required>\n  <input type=\"text\" [(ngModel)]=\"brojIndeksa\" name=\"brojIndeksa\" placeholder=\"Broj indeksa\" required>\n</fieldset>\n  <fieldset class=\"groupBox\" style=\"margin-top:5px;\">\n  <input type=\"text\" [(ngModel)]=\"korisnickoIme\" name=\"korisnickoIme\" placeholder=\"Korisničko ime\" required>\n  <input type=\"text\" [(ngModel)]=\"lozinka\" name=\"lozinka\" placeholder=\"Lozinka\" required>\n  <input type=\"text\" [(ngModel)]=\"lozinka2\" name=\"lozinka2\" placeholder=\"Potvrdi lozinku\" required>\n</fieldset>\n<fieldset class=\"groupBox\" style=\"margin-top:5px;\">\n  <select required class=\"combobox\">\n  <option value=\"\" disabled selected>Odsjek</option>\n  <option value=\"RI\">Računarstvo i informatika</option>\n  <option value=\"AE\">Automatika i elektronika</option>\n  <option value=\"EE\">Energetika</option>\n  <option value=\"TK\">Telekomunikacije</option>\n</select>\n  <select required class=\"combobox\">\n  <option value=\"\" disabled selected>Godina studija</option>\n  <option value=\"1\">1 BSc</option>\n  <option value=\"2\">2 BSc</option>\n  <option value=\"3\">3 BSc</option>\n  <option value=\"1M\">1 MSc</option>\n  <option value=\"2M\">2 MSc</option>\n</select>\n<input type=\"file\" name=\"pic\" accept=\"image/*\">\n</fieldset>\n  <div class=\"error\" *ngIf=\"errorMessage!=''\">{{errorMessage}}</div>\n  <div class=\"poruka\" *ngIf=\"messageUspjesno!=''\">{{messageUspjesno}}</div>\n  <button (click)=\"print()\">Registruj se</button>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = "<div id=\"event\" class=\"eventpicture animation-on\">\n\n<div class=\"info-overflow\">\n<div class=\"info-dash\">\n    <div class=\"info-inner\">\n      <div class=\"event-info\">\n        <div class=\"name\">\n          Sarajevo Innovations Festival\n          </div>\n          <p class=\"text1\">Udruženje studenata Elektrotehničkog fakulteta Sarajevo “STELEKS” svake godine organizuje smotru studentskih radova pod nazivom Sarajevo Innovations Festival (“SIFI”).“SIFI” je odlična prilika da prezentirate svoje radove, razmijenite ideje, upoznate se sa vrsnim stručnjacima iz različitih oblasti, njihovim radovima i iskustvima, ali i sa budućim poslodavcima. </div>\n    </div>\n</div>\n</div>\n</div>\n<div class=\"prvi\">\n<ul class=\"tab\">\n\n  <li *ngFor=\"let i of godineSifija;\">\n    <div (click)=\"f(i)\">{{i}}</div>\n  </li>\n</ul>\n\n</div>\n<div class=\"drugi_dio\">\n<div class=\"text3\" >\n  <h1> {{naslov}} </h1>\n  <hr class=\"primary\">\n  <div>{{sadrzaj}} </div>\n</div>\n</div>\n\n<div class=\"medalje\">\n<div class=\"PrikazPlasmana\">\n  <figure class=\"prikaz\"id =\"prikazPrvog\">\n  <div class=\"text\">\n\n      <h2 class=\"NaslovTeme\">Slobodan pad</h2>\n      <div class=\"takmicari\">Selma Ahmetovic </div>\n        <div class=\"takmicari\">Selma Hanjalic </div>\n    </div>\n\n    <div class=\"media\">\n      <img src=\"assets/images/zlato.jpg\" >\n    </div>\n    <a href=\"#\"></a>\n  </figure>\n  <figure class=\"prikaz\" id =\"prikazDrugog\">\n  <div class=\"text\">\n\n      <h2 class=\"NaslovTeme\">Mehanika fluida</h2>\n      <div class=\"takmicari\">Amila Mujak </div>\n        <div class=\"takmicari\">Amina Aljicevic </div>\n    </div>\n\n    <div class=\"media\">\n      <img src=\"assets/images/srebro.jpg\" >\n    </div>\n    <a href=\"#\"></a>\n  </figure>\n<figure class=\"prikaz\" id =\"prikazTreceg\">\n  <div class=\"text\">\n\n    <h2 class=\"NaslovTeme\">Termodinamika</h2>\n    <div class=\"takmicari\">Emir Avdisaphic</div>\n      <div class=\"takmicari\">Nur ... </div>\n    </div>\n\n    <div class=\"media\">\n      <img src=\"assets/images/bronza.jpg\" >\n    </div>\n    <a href=\"#\"></a>\n  </figure>\n</div>\n</div>\n\n<app-sponzori></app-sponzori>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\n  <h1> Sifi 2012</h1>\n<p class=\"text1\">\n  Lorem ipsum dolor sit amet, usu ne choro alterum graecis, choro malorum nam ut. Quo justo malis theophrastus ad. Vel ut mucius deterruisset, at solum nulla delenit duo. Vis ne simul scripta persius, cum utroque noluisse scaevola ut, ei per detracto eleifend electram. Id ius augue molestie. Cu simul appareat vivendum nec, reque persius sea ea, mea dicit tritani interesset et.\nUsu ne civibus argumentum. Ut quo oratio delectus mnesarchum, ad labitur accusam mea, rebum tation feugiat eum ad. Duo ei erat melius. Vix no iuvaret dolorem salutandi, ei mel oportere democritum.\nVis soleat blandit signiferumque in, ut mel aliquip denique. Ad tempor pertinax gloriatur vim, minim omnium te sea. Tota postea voluptaria cu est, eam quem mentitum recusabo ut. Solet quaestio vis ut. Cu nam atomorum expetendis temporibus. Veri meis vim an, ad affert cetero vix. In his sadipscing contentiones, assum possit consulatu nec in.\nHas te agam fugit praesent, magna exerci labores vis ea, noster inermis cu nec. Vel salutatus omittantur ei. Quo vitae primis principes no. Fugit primis vis ea, an equidem copiosae vis. Ut dicat latine vituperata vis. Ex vim soluta accusata.\nQuidam saperet civibus ea his, his ad latine invenire similique. Tantas sadipscing at vel, te ius regione similique. An vix habeo dolor atomorum, quot propriae verterem cu vel. Ut appetere maluisset nam, et commodo volutpat vel, his ad nonumy omnium commune. Ea homero ornatus vix. Appetere incorrupte nam at, eu soleat eripuit adipisci nec. Choro interesset no nam, eum enim falli nusquam cu.\nLorem ipsum dolor sit amet, usu ne choro alterum graecis, choro malorum nam ut. Quo justo malis theophrastus ad. Vel ut mucius deterruisset, at solum nulla delenit duo. Vis ne simul scripta persius, cum utroque noluisse scaevola ut, ei per detracto eleifend electram. Id ius augue molestie. Cu simul appareat vivendum nec, reque persius sea ea, mea dicit tritani interesset et.\nUsu ne civibus argumentum. Ut quo oratio delectus mnesarchum, ad labitur accusam mea, rebum tation feugiat eum ad. Duo ei erat melius. Vix no iuvaret dolorem salutandi, ei mel oportere democritum. Vis soleat blandit signiferumque in, ut mel aliquip denique. Ad tempor pertinax gloriatur vim, minim omnium te sea. Tota postea voluptaria cu est, eam quem mentitum recusabo ut. Solet quaestio vis ut. Cu nam atomorum expetendis temporibus. Veri meis vim an, ad affert cetero vix. In his sadipscing contentiones, assum possit consulatu nec in. Has te agam fugit praesent, magna exerci labores vis ea, noster inermis cu nec. Vel salutatus omittantur ei. Quo vitae primis principes no. Fugit primis vis ea, an equidem copiosae vis. Ut dicat latine vituperata vis. Ex vim soluta accusata.\n<br>Ovdje mozete pogledati rezultate SIFI-ja:\n</p>\n\n\n<div class=\"experience-wrapper\">\n\n  <div class=\"experience1 scroll-up\">\n    <img src=\"https://image.ibb.co/hOUqKm/zlatna.jpg\"  style=\"width:170px;height:200px;\">\n     <div class=\"overlay\">\n      <div class=\"text\">Mujak Amila<br>\n      <button class=\"button\"><span>Otvori rad</span></button>\n      </div>\n  </div>\n   </div>\n\n   <div class=\"experience1 scroll-up\">\n     <img src=\"https://image.ibb.co/fkXSzm/srebrena.jpg\"  style=\"width:170px;height:200px;\">\n      <div class=\"overlay\">\n     <div class=\"text\">Zeljko Juric<br>\n      <button class=\"button\"><span>Otvori rad</span></button>\n     </div>\n   </div>\n    </div>\n\n   <div class=\"experience1 scroll-up\">\n     <img src=\"https://preview.ibb.co/kw6FkR/bronzana.jpg\"  style=\"width:170px;height:200px;\">\n      <div class=\"overlay\">\n     <div class=\"text\">Huse Fatkic<br>\n      <button class=\"button\"><span>Otvori rad</span></button>\n     </div>\n   </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "<section id=\"skills1\" class=\"eventpicture animation-on\">\n<div class=\"info-overflow\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n      \n        <hr class=\"primary\">\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6 text-center\">\n        <div class=\"service-box\">\n          <i class=\"devicons devicon-css3-plain colored sr-icons\"></i>\n          <h3>300 članova</h3>\n          <p class=\"text\">Članovi Udruženja su studenti Elektrotehničkog fakulteta Univerziteta u Sarajevu.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 text-center\">\n        <div class=\"service-box\">\n          <i class=\"devicons devicon-bootstrap-plain colored sr-icons\"></i>\n          <h3>50 godina rada</h3>\n          <p class=\"text\">Steleks je najstarije studentsko udruženje na fakultetu.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 text-center\">\n        <div class=\"service-box\">\n          <i class=\"devicons devicon-javascript-plain colored sr-icons\"></i>\n          <h3>Preko 15 evenata</h3>\n          <p class=\"text\">Svake godine Steleks organizuje preko 15 evenata različitog sadržaja.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 text-center\">\n        <div class=\"service-box\">\n          <i class=\"devicons devicon-nodejs-plain colored sr-icons\"></i>\n          <h3>3 aktivna kluba</h3>\n          <p class=\"text\">SCC-Steleks Computing Club, <br>ESC-Embedded Systems club i Multimedijalni klub</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</section>\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<section id=\"skills\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"section-heading\">Sponzori</h2>\n        <hr class=\"primary\">\n      </div>\n    </div>\n  </div>\n</section>\n\n<table>\n  <tr *ngFor=\"let i of sponzori\">\n  <img class=\"image\" src=\"{{i.slika}}\">\n</tr>\n</table>\n"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = "<div id=\"body\" class=\"home\">\n\n\t\t<div class=\"sadrzaj1\">\n\n\n\t\t\t\t\t<h1>STELEKS TV</h1>\n\t\t\t\t\t\t<iframe src=\"https://www.youtube.com/embed/6Z8cdnZ63Uo\" frameborder=\"0\" gesture=\"media\" allow=\"encrypted-media\" allowfullscreen></iframe>\n\t\t\t</div>\n\t\t\t\t\t<div class=\"sadrzaj2\">\n\t\t\t\t\t\t\t<h1>AKTUELNO</h1>\n\t\t\t\t\t\t\t<div class=\"naslov\">\n\t\t\t\t\t\t\t\t<h2>LIGA ROBOTA</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"sve\">\n\t\t\t\t\t\t\t\t<span>15. JANUAR 2018.</span>\n\n\n\t\t\t\t\t\t\t\t<p>STELEKS po prvi put organizuje League of Robots i poziva sve zainteresirane da se prijave i odlično zabave! Prijave počinju od 31.10.2016. i traju do 11.12.2016.</p>\n\t\t\t\t\t\t\t\t\t<a href=\"/event\" class=\"button\">Pročitaj više</a>\n\t\t\t\t\t\t\t</div><div class=\"slika\">\n\t\t\t\t\t\t\t\t<img src=\"http://steleks.ba/wp-content/uploads/2016/10/%5E03BB5D90A758FCDF86DDE37616CB4A338B9557657E40A11357%5Epimgpsh_fullsize_distr-300x300.png\" width=\"150\" height=\"150\">\n\t\t\t\t\t\t\t</div>\n\n\n\t</div>\n</div>\n"

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"prijava\">\n<div class=\"form-content\">\n\n<form>\n    <fieldset class=\"groupBox\">\n      <h2>Prijava za superadmina</h2>\n\n        <input [(ngModel)]=\"Username\" type=\"text\" placeholder=\"Username...\" id=\"username\" name=\"username\" style=\"margin-top:50px\">\n      <input type=\"text\" placeholder=\"Password...\" [(ngModel)]=\"Password\" id=\"password\"  name=\"password\" style=\"margin-bottom:20px\">\n\n  <input type=\"submit\" value=\"Prijava\" (click)=\"print()\" />\n\n  </fieldset>\n</form>\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "<div class=\"elektrijada\">\n  <div class=\"form-content\">\n    <h2>ADMINI</h2>\n  <table>\n    <tr>\n      <th></th>\n      <th>Naziv admina</th>\n      <th style=\"text-align:center;\">Opcija</th>\n    </tr>\n    <tr *ngFor=\"let i of admini; let j=index\">\n      <td style=\"width:6%;\">{{redniBroj(i)}}.</td>\n      <td>{{i}}</td>\n      <td style=\"width:20%;\">\n        <button class=\"button1\" (click)=obrisiAdmina(j)>Delete</button>\n      </td>\n    </tr>\n  </table>\n  <div>\n    <button (click)=\"ShowButton()\">Registracija novog admina</button>\n    <div *ngIf=\"showSelected==true\">\n      <fieldset class=\"groupBox\">\n        <input type=\"text\" [(ngModel)]=\"ime\"  placeholder=\"Ime\" required>\n        <input type=\"text\" [(ngModel)]=\"prezime\" placeholder=\"Prezime\" required>\n        <input type=\"text\" placeholder=\"Tip\" required>\n        <div class=\"error\" *ngIf=\"errorMessageIme!=''\">{{errorMessageIme}}</div>\n        <div class=\"error\" *ngIf=\"errorMessagePrezime!=''\">{{errorMessagePrezime}}</div>\n        <div class=\"poruka\" *ngIf=\"messageUspjesno!=''\">{{messageUspjesno}}</div>\n        <button class=\"button2\" (click)=\"HideButton()\">Cancel</button>\n        <button class=\"button2\" (click)=\"dodajAdmina()\" style=\"float:right;\">Add</button>\n\n      </fieldset>\n    </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<section class=\"row\">\n  <h1> Liga robota </h1>\n  <hr class=\"linija\">\n\n  <div>\n    <p class=\"text2\">STELEKS po prvi put organizuje League of Robots i poziva sve zainteresirane da se prijave i odlično zabave! Prijave počinju od 31.10.2016. i traju do 11.12.2016. Moguće je učestvovati individualno ili u timu sa još jednom osobom. Nije dozvoljena kupovina gotovih robota, nego robota mora izraditi tim iz isključivo nabavljenih komponenti. Finansiranje komponenti i sastavljanje krajnjeg robota provodi tim, te je cilj da svaki tim napravi svog posebnog robota. Kako bi borba bila „fer“, svi roboti moraju koštati ispod 100 KM i biti sljedećih dimenzija i mase: 20cm x 20cm x 20cm i 1kg Za sve one koji imaju želju da učestvuju, ali nisu sigurni na koji način napraviti robota, biće održan kratki Arduino crash course. Kurs će biti održan besplatno samo za timove koji se prijave na League of Robots, a na kursu će biti objašnjeno programiranje Arduina. Prijave će se vršiti preko mail-a steleks@etf.unsa.ba, i uz prijavu je potrebno priložiti slike računa ili pdf svih kupljenih komponenti. Kotizacija je obavezna za sve prijavljene timove i košta 10 KM. Uplate će se vršiti neposredno prije borbe vašeg tima. Gdje i kada ?! Nakon isteka prijava, svake sedmice će se održati jedno ili više kola lige, dok se svaki robot ne bude borio sa svakim. U skladu sa brojem prijavljenih timova, termini mečeva će biti blagovremeno napisani na STELEKS-ovoj Facebook stranici. Borbe će se održavati u Čitaoni, u okruglom ringu i gubitnik je onaj robot koji prvi napusti ring. Sve mečeve će biti moguće uživo pratiti preko zvaničnog page-a Leauge of Robots! Pobjednike očekuju vrijedne nagrade! Pozivamo sve zainteresovane da se prijave i pokažu da oni zaista zaslužuju titulu šampiona League of Robots. Najkreativniji roboti će također biti nagrađeni. Za one koji se ne žele takmičiti pozivamo svakako da budu publika i osjete dobru atmosferu i zabavu! </p>\n\n  </div>\n</section>\n</div>\n<section  class=\"eventpicture animation-on\">\n<div class=\"info-overflow\">\n\n<div class=\"row\">\n    <article class=\"co\">\n      <div class=\"cards\"  id=\"1\">\n        <hr class=\"divider\"/>\n        <h2 class=\"title\">UČESNICI</h2>\n        <div class=\"info\">\n          <hr class=\"divider\"/>\n          <p class=\"slova\">Pozivamo sve zainteresovane da se prijave i pokažu da oni zaista zaslužuju titulu šampiona League of Robots. Najkreativniji roboti će također biti nagrađeni. Moguće je učestvovati individualno ili u timu sa još jednom osobom.  Za one koji se ne žele takmičiti pozivamo svakako da budu publika i osjete dobru atmosferu i zabavu! </p>\n        </div>\n      </div>\n    </article>\n    <article class=\"co\">\n      <div class=\"cards\" id=\"2\">\n        <hr class=\"divider\"/>\n        <h2 class=\"title\">MJESTO</h2>\n        <div class=\"info\">\n          <hr class=\"divider\"/>\n          <p class=\"slova\">Nakon isteka prijava, svake sedmice će se održati jedno ili više kola lige, dok se svaki robot ne bude borio sa svakim. U skladu sa brojem prijavljenih timova, termini mečeva će biti blagovremeno napisani na STELEKS-ovoj Facebook stranici. Borbe će se održavati u Čitaoni, u okruglom ringu i gubitnik je onaj robot koji prvi napusti ring. </p>\n        </div>\n      </div>\n    </article>\n    <article class=\"co\">\n      <div class=\"cards\"  id=\"3\">\n        <hr class=\"divider\"/>\n        <h2 class=\"title\">UČEŠĆE</h2>\n        <div class=\"info\">\n          <hr class=\"divider\"/>\n          <p class=\"slova\">Prijave će se vršiti preko mail-a steleks@etf.unsa.ba, i uz prijavu je potrebno priložiti slike računa ili pdf svih kupljenih komponenti. Kotizacija je obavezna za sve prijavljene timove i košta 10 KM. Uplate će se vršiti neposredno prije borbe vašeg tima.  Finansiranje komponenti i sastavljanje krajnjeg robota provodi tim. Kako bi borba bila „fer“.</p>\n        </div>\n      </div>\n    </article>\n  </div>\n\n\n</div>\n</section>\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<section class=\"row\">\n  <h1> Elektrijada Rimini </h1>\n  <hr class=\"linija\">\n\n  <div>\n    <p class=\"text2\">Međunarodni susreti studenata elektrotehnike, poznatiji kao Elektrijada, tradicionalno se održavaju skoro pola stoljeća na prostorima bivše Jugoslavije i predstavljaju najveći godišnji skup studenata elektrotehnike u jugoistočnoj Evropi, a i šire. Nakon perioda kriznih godina i ratnih dešavanja, Elektrijada kao simbol jedinstva globalne akademske zajednice i studentskog duha, ipak opstaje i svojim djelovanjem doprinosi cilju čvršćeg povezivanja, saradnje i razmjene studenata elektrotehnike. Elektrijada kroz svoje programe širi i populariše sve sfere aktivnog studentskog života – naučni rad, takmičenja u znanju, sportska takmičenja, edukativne programe, zabavu... Ali ono što je najbitnije napomenuti jeste činjenica da Elektrijada, kao veliki susret studenata ovog tipa, predstavlja multietnički i multinacionalni projekat vrijedan pažnje. Petodnevni program Elektrijade se održava na atraktivnim turističkim destinacijama, gdje se uz dobro organizovan program, lijepu prirodu i dobro poznatu energiju studenata, navedene aktivnosti sprovode u atmosferi zdrave konkurencije i toplog prijateljstva. Putem Elektrijade studenti stupaju u kontakt sa privredom i firmama iz struke, uz čiju pomoć dolaze do sredstava za organizaciju skupa i na taj način ostvaruju prve korake poslovne saradnje korisne za budućnost. Posljednjih godina Elektrijada broji preko 2000 učesnika sa 30 fakulteta iz čitave Evrope. Pored organizatora, studenata iz Srbije, redovni učesnici, suorganizatori i dragi gosti Elektrijade su i studenti iz Bosne i Hercegovine, Srbije, Crne Gore, Slovenije, Makedonije i Hrvatske, Bugarske, Italije, Švajcarske, Grčke, Njemačke, Rumunije, Holandije i drugih evropskih zemalja. Formalni dio ove manifestacije čine takmičenje u nauci i sportu, gdje se svi fakulteti bore za pojedinačne uspjehe, kao i za titulu generalnog pobjednika Elektrijade. Elektrijada 2016 „Elektrijada 2016“ je održana u Italiji, u gradu Rimini (12.05. – 17.05.), gdje se sastalo preko 2.000 studenata sa više od 20 elektrotehničkih fakulteta iz regiona. Naši studenti su osvojili odlično treće mjesto u generalnom plasmanu i treće mjesto u takmičenju u znanju, te tim rezultatom pokazali da je ETF Sarajevo najjači fakultet elektrotehnike u državi i pokazali da je to rezultat kvalitetnog i kontinuiranog rada i zalaganja svih studenata takmičara i njihovih mentora. Organizaciju odlaska ETF-a na Elektrijadu kao i svake godine organiziralo je Udruženje studenata Elektrotehničkog fakulteta „STELEKS“ Sarajevo, a podršku je pružio i bivši rektor Univerziteta u Sarajevu Muharem Avdispahić kao i uprava Elektrotehničkog fakulteta Univerziteta u Sarajevu. </p>\n\n  </div>\n</section>\n</div>\n<section  class=\"eventpicture animation-on\">\n<div class=\"info-overflow\">\n\n<div class=\"row\">\n    <article class=\"co\">\n      <div class=\"cards\"  id=\"1\">\n        <hr class=\"divider\"/>\n        <h2 class=\"title\">UČESNICI</h2>\n        <div class=\"info\">\n          <hr class=\"divider\"/>\n          <p class=\"slova\">Pozivamo sve studente koji su zainteresovani da se prijave za učešće na najvećem događaju koji okuplja studente elektrotehnike širom Evrope. Za one koji se ne žele takmičiti pozivamo svakako da budu podrška svojim kolegama i osjete dobru atmosferu i zabavu! </p>\n        </div>\n      </div>\n    </article>\n    <article class=\"co\">\n      <div class=\"cards\" id=\"2\">\n        <hr class=\"divider\"/>\n        <h2 class=\"title\">MJESTO</h2>\n        <div class=\"info\">\n          <hr class=\"divider\"/>\n          <p class=\"slova\">Mjesto održavanja ovogodišnje Elektrijade je Rimini, Italija od 19.-26. maja.Ukoliko do sada niste posjetili ovaj prelijepi grad obavezno se prijavite.  </p>\n        </div>\n      </div>\n    </article>\n    <article class=\"co\">\n      <div class=\"cards\"  id=\"3\">\n        <hr class=\"divider\"/>\n        <h2 class=\"title\">UČEŠĆE</h2>\n        <div class=\"info\">\n          <hr class=\"divider\"/>\n          <p class=\"slova\">Prijave će se vršiti na Elektrotehničkom fakultetu Sarajevo preko izabranih mentora,stoga sve zainteresovane pozivamo da se prijave što prije.</p>\n        </div>\n      </div>\n    </article>\n  </div>\n\n\n</div>\n</section>\n"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<section class=\"row\">\n  <h1> Steleksijada </h1>\n  <hr class=\"linija\">\n\n  <div>\n    <p class=\"text2\">U duši inženjera je da koristi svoja saznanja da bi našao prakticna rješenja“ je jedan od citata koji opisuju prirodu inženjera. U tom duhu su Clanovi udruženja studenata Elektrotehnickog fakulteta „Steleks“ odlucili spojiti ugodno s korisnim te organizovati jedno veliko druženje u vidu turnira u razlicitim disciplinama pod nazivom „Steleksijada“. Steleksijada je organizovana kako bi omogucili nezaboravan provod ucesnicima, a ujedno i odabrali najbolje takmicare za predstojece medunarodno natjecanje elektrotehnickih fakulteta sa prostora bivše Jugoslavije- „Elektrijada“. U potrazi za perfektnim mjestom ovog dogadaja koji smo željeli uciniti nezaboravnim odlucili smo se za terene Trece gimnazije gdje smo primljeni sa velikim gostoprimstvom i dobrodošlicom. Na Steleksijadi je ucestvovalo 250 takmicara koji su mogli pokazati svoje talente u cetiri razlicite discipline: mini fudbal, muški i ženski basket, stoni tenis te šah a takmicenja su se održala 1. I 2. Aprila. Na steleksijadi su ucestvovali studenti Elektrotehnickog fakulteta ali i mnogi drugi, te je spoj razlicitih karaktera, umova, ambicija i želja ucinio ovaj dogadaj zanimljivijim. Nisu same aktivnosti ucinile Steleksijadu posebnom koliko druženja i poznanstva stecena medu ucesnicima koji su se u velikom broju odazvali na naš poziv da nam se pridruže pod motom „Budi dio naše price“. Steleksijadi su prisustvovali i Igor Gavric-predsjedavajuci Gradskog vijeca Sarajeva te dekan Elektrotehnickog fakulteta – Samim Konjicija. Steleksijada se ne bi održala bez podrške i pomoci naših sponzora: Red Bull, Sarajevski kiseljak, nargilhana i picerija „Žar“, Gradska uprava i opcina Novo Sarajevo. Ovim putem se zahvaljujemo sponzorima, ucesnicima, Crkvi svetog Preobraženja i naravno Trecoj gimnaziji: Hvala vam što ste bili dio naše price.</p>\n  </div>\n</section>\n</div>\n<section  class=\"eventpicture animation-on\">\n<div class=\"info-overflow\">\n\n</div>\n</section>\n"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<section class=\"row\">\n  <h1> Osmomartovski kviz </h1>\n  <hr class=\"linija\">\n\n  <div>\n    <p class=\"text2\"> U cilju spajanja nauke, zabave i zanimljivih nagrada organizovani su STELEKS kvizovi. Pitanja na kvizu obuhvataju mnoga podrucja, poput znanosti, geografije, historije, muzike, sporta, filma. Uplate za ucestvovanje u kvizu su namijenjene za osiguravanje nagrada, pa su i drugo i trece mjesto dobili utješne nagrade, a za osmomarovski kviz, svaka djevojka koja je sudjelovala dobila je po ružu dok su timovi koji su zauzeli prva tri mjesta osvojili novcane nagrade. Pored dobrog provoda i lijepog druženja, ucesnici su imali priliku i da nauce nešto novo jer se na kraju kviza obznane odgovori na svako pitanje.  </p>\n\n  </div>\n</section>\n</div>\n<section  class=\"eventpicture animation-on\">\n<div class=\"info-overflow\">\n\n<div class=\"row\">\n    <article class=\"co\">\n      <div class=\"cards\"  id=\"1\">\n        <hr class=\"divider\"/>\n        <h2 class=\"title\">UČESNICI</h2>\n        <div class=\"info\">\n          <hr class=\"divider\"/>\n          <p class=\"slova\">Broj clanova po ekipi je tri, svaka ekipa treba imati bar jednog ženskog clana, dok je broj timova bio ogranicen. </p>\n        </div>\n      </div>\n    </article>\n    <article class=\"co\">\n      <div class=\"cards\" id=\"2\">\n        <hr class=\"divider\"/>\n        <h2 class=\"title\">MJESTO</h2>\n        <div class=\"info\">\n          <hr class=\"divider\"/>\n          <p class=\"slova\">Kviiz se održava u prostorijama našeg fakulteta. </p>\n        </div>\n      </div>\n    </article>\n    <article class=\"co\">\n      <div class=\"cards\"  id=\"3\">\n        <hr class=\"divider\"/>\n        <h2 class=\"title\">UČEŠĆE</h2>\n        <div class=\"info\">\n          <hr class=\"divider\"/>\n          <p class=\"slova\">Učešće u kvizu se naplacuje simbolicnim iznosom za svaku ekipu, po 10KM, te su uplatom i navodenjem imena tima i clanova tima timovi potvrduju svoje ucešce u kvizovima.</p>\n        </div>\n      </div>\n    </article>\n  </div>\n\n\n</div>\n</section>\n"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"picture\">\n    <div class=\"info-overflow\">\n\n    </div>\n  </div>\n  <h1> Upravni odbor </h1>\n  <hr class=\"primary\">\n<table>\n    <tr *ngFor=\"let i of clanovi; let j=index\">\n      <td>\n        <div class=\"cards\">\n          <!--<hr class=\"divider\"/>-->\n          <img class=\"image\" src={{i.slika}}>\n          <div class=\"info\">\n            <hr class=\"divider\"/>\n            <p class=\"slova\">{{dajNaziv(i)}}</p>\n            <p class=\"slova2\">{{i.uloga}}</p>\n          </div>\n        </div>\n    </td>\n    </tr>\n</table>\n<div>\n<app-footer><app-footer>\n"

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(424);


/***/ })

},[842]);
//# sourceMappingURL=main.bundle.map