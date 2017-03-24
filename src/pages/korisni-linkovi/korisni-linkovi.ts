
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Component} from "@angular/core";
import {InAppBrowser} from "ionic-native";

/*
  Generated class for the KorisniLinkovi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


export interface KorisniLinkoviInterface {
  title: string;
  link : string;
}

@Component({
  selector: 'page-korisni-linkovi',
  templateUrl: 'korisni-linkovi.html'
})


export class KorisniLinkoviPage {

  korisniLinkovi : KorisniLinkoviInterface[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform : Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad KorisniLinkoviPage');
    this.korisniLinkovi = [
      {title: "Влада на Република Македонија", link: "http://www.vlada.mk/"},
      {title: "Агенција за млади и спорт", link: "http://www.ams.gov.mk/"},
      {title: "Министерство за образование и наука", link: "http://mon.gov.mk/"},
      {title: "Министерство за Информатичко Општество", link: "http://www.mio.gov.mk/"},
      {title: "Биро за развој на образованието", link: "http://bro.gov.mk/"},
      {title: "Државен испитен центар", link: "http://www.dic.edu.mk/"},
      {title: "Државна матура", link: "http://matura.gov.mk/"},
      {title: "Плагијати", link: "http://plagijati.mon.gov.mk/"},
      {title: "Конкурси", link: "http://konkursi.mon.gov.mk/"},
      {title: "Сместување во домови", link: "http://www.smestuvanje.mon.gov.mk/apliciraj/"},
    ];

  }

  openInAppBrowser(korisno : any) {
    this.platform.ready().then(() => {
      let browser = new InAppBrowser(korisno.link, "_blank", "location=true");
      browser.show();
    });
  }

}
