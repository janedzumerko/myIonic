

/*
  Generated class for the Aktuelno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import {Component} from "@angular/core";
import {Aktuelno} from "../../../models/aktuelno-model/aktuelno";
import {NavController, NavParams} from "ionic-angular";
import {NewsData} from "../../../providers/news-data";
import {GlobalVarAndFunc} from "../../../providers/globalVarAndFunc";
import {AktuelnoDetailsPage} from "../aktuelno-details/aktuelno-details";
@Component({
  selector: 'page-aktuelno',
  templateUrl: 'aktuelno.html'
})

export class AktuelnoPage {

  searchTerm: string = '';

  aktuelno : Aktuelno[];
  Allaktuelno : Aktuelno[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews : NewsData) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AktuelnoPage');
    this.aktuelno = this.dataNews.aktuelnoNewsData;
    this.Allaktuelno = this.dataNews.aktuelnoNewsData;

    // here we're setting publishedTime
    for (let entry of this.aktuelno) {
      entry.publishedTime = GlobalVarAndFunc.calculateTimeDiference(entry.Date);
    }

  }

  openDetailPage (aktuel : Aktuelno) {
    this.navCtrl.push(AktuelnoDetailsPage, {aktuel});
  }

  setFilteredItems(){
    this.aktuelno = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){

    let searchType = this.Allaktuelno;

    return searchType.filter((item) => {
      return item.Title.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
