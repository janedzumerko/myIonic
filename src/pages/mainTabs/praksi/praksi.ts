import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {InAppBrowser, SocialSharing} from "ionic-native";
import {Jobs} from "../../../models/jobs-model/jobs";
import {NewsData} from "../../../providers/news-data";
import {GlobalVarAndFunc} from "../../../providers/globalVarAndFunc";

/*
  Generated class for the Praksi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-praksi',
  templateUrl: 'praksi.html'
})
export class PraksiPage {

  searchTerm: string = '';

  praksi : Jobs[];
  allPraksi: Jobs[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews : NewsData, public platform : Platform
  ) {
    this.praksi = dataNews.praksiOfferNewsData;
    this.allPraksi = dataNews.praksiOfferNewsData;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PraksiPage');

    // here we're setting publishedTime
    for (let entry of this.praksi) {
      entry.publishedTime = GlobalVarAndFunc.calculateTimeDiference(entry.Inserted);
    }
  }

  openInAppBrowser(praksa : any) {
    console.log(praksa.Link);
    this.platform.ready().then(() => {
      let browser = new InAppBrowser(praksa.Link, "_blank", "location=true");
      browser.show();
    });
  }

  setFilteredItems(){
    this.praksi = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){

    let allPraksiSearch = this.allPraksi;

    return allPraksiSearch.filter((item) => {
      return item.Name.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
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
