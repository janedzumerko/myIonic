
/*
  Generated class for the SredniUcilishta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import {Uchilishta} from "../../../models/uchilishta-model/uchilishta";
import {NavController, NavParams} from "ionic-angular";
import {NewsData} from "../../../providers/news-data";
import {Component} from "@angular/core";

@Component({
  selector: 'page-sredni-ucilishta',
  templateUrl: 'sredni-ucilishta.html'
})
export class SredniUcilishtaPage {

  searchTerm: string = '';

  sredni : Uchilishta[];
  AllSredni : Uchilishta[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews : NewsData) {
    this.sredni = dataNews.uchilishtaNewsData;
    this.AllSredni = dataNews.uchilishtaNewsData;
    console.log(this.sredni);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SredniUcilishtaPage');
  }

  setFilteredItems(){
    this.sredni = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){

    let searchType = this.AllSredni;

    return searchType.filter((item) => {
      return item.Name.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
