import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {InAppBrowser, SocialSharing} from "ionic-native";
import {Jobs} from "../../../models/jobs-model/jobs";
import {NewsData} from "../../../providers/news-data";
import {GlobalVarAndFunc} from "../../../providers/globalVarAndFunc";
import {GlobalHelper} from "../../../GlobalHelper";

/*
  Generated class for the Vrabotuvanja page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vrabotuvanja',
  templateUrl: 'vrabotuvanja.html'
})
export class VrabotuvanjaPage {

  searchTerm: string = '';

  vrabotuvanja : Jobs[];

  allVrabotuvanja: Jobs[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews : NewsData, public platform : Platform, public GlobalHelper: GlobalVarAndFunc) {
    this.vrabotuvanja = dataNews.vrabotuvanjaOfferNewsData;
    this.allVrabotuvanja = dataNews.vrabotuvanjaOfferNewsData;
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad VrabotuvanjaPage');
    console.log(this.vrabotuvanja);

    if(this.searchTerm !==''){
      this.setFilteredItems();
    }

    // here we're setting publishedTime
    for (let entry of this.vrabotuvanja) {
      entry.publishedTime = GlobalVarAndFunc.calculateTimeDiference(entry.Inserted);
    }
  }

  openInAppBrowser(vrabotuvanje : any) {
    console.log(vrabotuvanje.Link);
    this.platform.ready().then(() => {
      let browser = new InAppBrowser(vrabotuvanje.Link, "_blank", "location=true");
      browser.show();
    });

  }

  setFilteredItems(){
    this.vrabotuvanja = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){

    let vrabotuvanjaSearch = this.allVrabotuvanja;

    return vrabotuvanjaSearch.filter((item) => {
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
