import {Biblioteka} from "../../../models/biblioteki-model/biblioteka";
import {NavController, NavParams} from "ionic-angular";
import {NewsData} from "../../../providers/news-data";
import {Component} from "@angular/core";

/*
  Generated class for the Biblioteki page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-biblioteki',
  templateUrl: 'biblioteki.html'
})
export class BibliotekiPage {

  searchTerm: string = '';
  biblioteki : Biblioteka[];
  AllBiblioteki : Biblioteka[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews : NewsData) {
    this.biblioteki = dataNews.bibliotekiNewsData;
    this.AllBiblioteki = dataNews.bibliotekiNewsData;
    console.log(this.biblioteki);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotekiPage');
  }

  setFilteredItems(){
    this.biblioteki = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){

    let searchType = this.AllBiblioteki;

    return searchType.filter((item) => {
      return item.Name.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
