
/*
  Generated class for the StudentskiDomovi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import {Dom} from "../../../models/domovi-model/domovi";
import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {NewsData} from "../../../providers/news-data";

@Component({
  selector: 'page-studentski-domovi',
  templateUrl: 'studentski-domovi.html'
})
export class StudentskiDomoviPage {

  searchTerm: string = '';
  domovi : Dom[];
  AllDomovi : Dom[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews : NewsData) {
    this.domovi = dataNews.domoviNewsData;
    this.AllDomovi = dataNews.domoviNewsData;
    console.log(this.domovi);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentskiDomoviPage');
  }

  setFilteredItems(){
    this.domovi = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){

    let searchType = this.AllDomovi;

    return searchType.filter((item) => {
      return item.Name.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
