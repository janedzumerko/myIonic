import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {InAppBrowser, SocialSharing} from "ionic-native";
import {NewsData} from "../../../providers/news-data";
import {Obuki} from "../../../models/obuki-model/obuki";
import {GlobalVarAndFunc} from "../../../providers/globalVarAndFunc";


/*
  Generated class for the Obuki page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-obuki',
  templateUrl: 'obuki.html'
})
export class ObukiPage {

  searchTerm: string = '';

  obuki: string = "seminari";
  isAndroid: boolean = false;

  konferencii : Obuki[];
  seminari : Obuki[];

  allKonferenci: Obuki[];
  allSeminari: Obuki[];

  constructor(public platform : Platform, public dataNews : NewsData) {
    this.isAndroid = platform.is('android');


    this.konferencii = dataNews.konferencii;
    this.seminari = dataNews.seminari;

    this.allKonferenci = dataNews.konferencii;
    this.allSeminari   = dataNews.seminari;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObukiPage');

    // here we're setting publishedTime
    for (let entry of this.konferencii) {
      entry.publishedTime = GlobalVarAndFunc.calculateTimeDiference(entry.CrawlDate);
    }

    // here we're setting publishedTime
    for (let entry of this.seminari) {
      entry.publishedTime = GlobalVarAndFunc.calculateTimeDiference(entry.CrawlDate);
    }
  }

  openInAppBrowser(obuka : any) {
    console.log(obuka.Link);
    this.platform.ready().then(() => {
      let browser = new InAppBrowser(obuka.Link, "_blank", "location=true");
      browser.show();
    });
  }

  activeSegment(){
    return this.obuki;
  }

  setFilteredItems(){

    if( this.activeSegment() === 'seminari' ){
      this.seminari = this.filterItems(this.searchTerm);
    }

    if( this.activeSegment() === 'konferencii' ){
      this.konferencii = this.filterItems(this.searchTerm);
    }

  }

  filterItems(searchTerm){

    if( this.activeSegment() === 'seminari' ){
     let searchType = this.allSeminari;

      return searchType.filter((item) => {
        return item.Title.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
    }

    if( this.activeSegment() === 'konferencii' ){
     let searchType = this.allKonferenci;

      return searchType.filter((item) => {
        return item.Title.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
    }
  }

  sharePopup(link, title) {
    SocialSharing.share(title, null/*Subject*/, null/*File*/, link)
        .then(() => {

            },
            () => {

            })

  }

}
