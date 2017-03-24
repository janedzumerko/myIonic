import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {InAppBrowser, SocialSharing} from "ionic-native";
import {DateFormatter} from "@angular/common/src/facade/intl";
import {Stipendija} from "../../../models/stipendii-model/stipendii";
import {NewsData} from "../../../providers/news-data";
import {GlobalVarAndFunc} from "../../../providers/globalVarAndFunc";

/*
  Generated class for the Stipendii page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stipendii',
  templateUrl: 'stipendii.html'
})
export class StipendiiPage {

  searchTerm: string = '';

  stipendii : Stipendija[];

  allStipendii: Stipendija[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews : NewsData, public platform : Platform) {
    this.stipendii    = dataNews.stipendiiNewsData;
    this.allStipendii = dataNews.stipendiiNewsData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StipendiiPage');

    // here we're setting publishedTime
    for (let entry of this.stipendii) {
      entry.publishedTime = GlobalVarAndFunc.calculateTimeDiference(entry.CrawlDate);
    }

  }

  openInAppBrowser(stipendija : any) {
    console.log(stipendija.Link);
    this.platform.ready().then(() => {
      let browser = new InAppBrowser(stipendija.Link, "_blank", "location=true");
      browser.show();
    });
  }

  setFilteredItems(){
    this.stipendii = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){

    let stipendiiSearch = this.allStipendii;

    return stipendiiSearch.filter((item) => {
      return item.Title.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  sharePopup(link, title) {
    SocialSharing.share(title, null/*Subject*/, null/*File*/, link)
        .then(() => {

            },
            () => {

            })

  }

}
