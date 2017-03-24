import {Injectable, EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from "rxjs";
import {Aktuelno} from "../models/aktuelno-model/aktuelno";
import {Jobs} from "../models/jobs-model/jobs";
import {Stipendija} from "../models/stipendii-model/stipendii";
import {Obuki} from "../models/obuki-model/obuki";
import {Uchilishta} from "../models/uchilishta-model/uchilishta";
import {Biblioteka} from "../models/biblioteki-model/biblioteka";
import {Dom} from "../models/domovi-model/domovi";
import {Organisation} from "../models/organizacii-model/organizacija";

/*
  Generated class for the NewsData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsData {

  // testiraj dali so ova ke raboti namesto EventEmitter koristime Subject
  public updateEmitter: Subject<boolean> = new Subject<boolean>();

  aktuelnoAndProektiNews = 'http://mladi.ams.mk/eduservice.svc/GetArticles';

  jobsNews = 'http://mladi.ams.mk/eduservice.svc/GetInternships';
  stipendiiNews = 'http://mladi.ams.mk/eduservice.svc/GetListings';
  obukiNews = 'http://mladi.ams.mk/eduservice.svc/GetTrainings';

  uniAndUchiNews = 'http://mladi.ams.mk/eduservice.svc/GetUniversities';

  domoviNews = 'http://mladi.ams.mk/eduservice.svc/GetDorms';

  bibliotekiNews = 'http://mladi.ams.mk/eduservice.svc/GetLibraries';

  //organizaciiNews = 'http://mladi.ams.mk/eduservice.svc/GetOrganizations';

  // aktuelnoAndProektiNews = './assets/aktuelno';
  // jobsNews = './assets/jobs';
  // stipendiiNews = './assets/stipendii';
  // obukiNews = './assets/obuki';
  //
  // uniAndUchiNews = './assets/ucilishta';
  //
  // domoviNews = './assets/domovi';
  //
  // bibliotekiNews = './assets/biblioteki';
  //
  organizaciiNews = './assets/organizacii';



  aktuelnoNewsData : Aktuelno[];
  proektiNewsData : Aktuelno[];

  praksiOfferNewsData : Jobs[];
  vrabotuvanjaOfferNewsData : Jobs[];

  stipendiiNewsData : Stipendija[];

  seminari : Obuki[];
  konferencii : Obuki[];

  univerzitetiNewsData : Uchilishta[];
  uchilishtaNewsData : Uchilishta[];

  bibliotekiNewsData : Biblioteka[];

  domoviNewsData : Dom[];

  studentskiOrgNewsData : Organisation[];
  nevladiniOrgNewsData : Organisation[];

  constructor(public http: Http) {
    console.log('Hello NewsData Provider');

  }

  //load Organizacii news
  loadOrganizacii(): Observable<Organisation[]> {
    return this.http.get(`${this.organizaciiNews}`)
        .map(res => <Organisation[]>res.json());
  }

  // load Domovi news
  loadDomovi(): Observable<Dom[]> {
    return this.http.get(`${this.domoviNews}`)
        .map(res => <Dom[]>res.json());
  }


  //load Biblioteki news
  loadBiblioteki(): Observable<Biblioteka[]> {
    return this.http.get(`${this.bibliotekiNews}`)
        .map(res => <Biblioteka[]>res.json());
  }

  //Load Univerziteti and Uchilishta news
  loadUniAndUchi(): Observable<Uchilishta[]> {
    return this.http.get(`${this.uniAndUchiNews}`)
        .map(res => <Uchilishta[]>res.json());
  }

  // Load all Obuki news
  loadObuki(): Observable<Obuki[]> {
    return this.http.get(`${this.obukiNews}`)
        .map(res => <Obuki[]>res.json());
  }

  // Load all Aktuelno and Proekti news
  loadAktuelnoAndProekti(): Observable<Aktuelno[]> {
    return this.http.get(`${this.aktuelnoAndProektiNews}`)
        .map(res => <Aktuelno[]>res.json());
  }

  // Load all Jobs news
  loadJobs() : Observable<Jobs[]> {
    return this.http.get(`${this.jobsNews}`).
        map(res => <Jobs[]>res.json());
  }

  // Load all Stipendii news
  loadStipendii() : Observable<Stipendija[]> {
    return this.http.get(`${this.stipendiiNews}`).
        map(res => <Stipendija[]>res.json());
  }

  loadData() {

    this.loadOrganizacii().subscribe(organizacii => {
      this.studentskiOrgNewsData = [];
      this.nevladiniOrgNewsData = [];

      for(let entry of organizacii) {
        //TODO: check this
        entry.Telephone.replace("/","");
        entry.Telephone.replace("-","");

        if(entry.Student == "Организација") {
          this.nevladiniOrgNewsData.push(entry);
        } else {
          this.studentskiOrgNewsData.push(entry);
        }
      }

    });

    this.loadBiblioteki().subscribe(biblioteki => {
      this.bibliotekiNewsData = biblioteki;
    });

    this.loadDomovi().subscribe(domovi => {
      this.domoviNewsData = domovi;
    });

    this.loadUniAndUchi().subscribe(uniAndUchi => {
      this.univerzitetiNewsData = [];
      this.uchilishtaNewsData = [];

      for(let entry of uniAndUchi) {
        if(entry.TypeID == "Средни училишта") {
          this.uchilishtaNewsData.push(entry);
        } else {
          if(entry.Name != "Тест универзитет")
          this.univerzitetiNewsData.push(entry);
        }
      }

    });

    this.loadObuki().subscribe(obukiNews => {
      this.konferencii = [];
      this.seminari = [];

      for(let entry of obukiNews) {
        if(entry.Conference == "Seminar") {
          this.seminari.push(entry);
        } else {
          this.konferencii.push(entry);
        }
      }

    });

    this.loadAktuelnoAndProekti().subscribe(aktuelnoNews => {
      this.aktuelnoNewsData = [];
      this.proektiNewsData = [];

      for(let entry of aktuelnoNews) {
        if(entry.ArticleCategoryID == "Актуелно") {
          this.aktuelnoNewsData.push(entry);
        } else {
          this.proektiNewsData.push(entry);
        }
      }
    });



    this.loadJobs().subscribe(jobsNews => {
      //console.log("JOBS NEWS");

      this.praksiOfferNewsData = [];
      this.vrabotuvanjaOfferNewsData = [];

      console.log("Loading Jobs");
      console.log(jobsNews);

      for (let entry of jobsNews) {
        if(entry.Job == "Job") {
          this.vrabotuvanjaOfferNewsData.push(entry);
        } else {
          this.praksiOfferNewsData.push(entry);
        }
      }
      //console.log("--------");
      //console.log(this.internshipNewsData);
      this.updateEmitter.next(true);
    });

    this.loadStipendii().subscribe(stipendiiNews => {
      this.stipendiiNewsData = stipendiiNews;
    });

    // all others loads here



  }

}
