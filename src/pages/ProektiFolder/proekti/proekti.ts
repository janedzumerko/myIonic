
import {Aktuelno} from "../../../models/aktuelno-model/aktuelno";
import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {NewsData} from "../../../providers/news-data";
import {ProektiDetailsPage} from "../proekti-details/proekti-details";

/*
 Generated class for the Proekti page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */


@Component({
  selector: 'page-proekti',
  templateUrl: 'proekti.html'
})
export class ProektiPage {

  searchTerm: string = '';

  proekti : Aktuelno[];
  AllProekti : Aktuelno[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews : NewsData) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProektiPage');
    this.proekti = this.dataNews.proektiNewsData;
    this.AllProekti = this.dataNews.proektiNewsData;
  }

  openDetailPage(proekt : Aktuelno) {
    this.navCtrl.push(ProektiDetailsPage, {proekt});
  }

  setFilteredItems(){
    this.proekti = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){

    let searchType = this.AllProekti;

    return searchType.filter((item) => {
      return item.Title.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
