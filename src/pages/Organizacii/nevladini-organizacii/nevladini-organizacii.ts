import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Organisation} from "../../../models/organizacii-model/organizacija";
import {NewsData} from "../../../providers/news-data";
import {NevladiniDetailsPage} from "../nevladini-details/nevladini-details";

/*
  Generated class for the NevladiniOrganizacii page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nevladini-organizacii',
  templateUrl: 'nevladini-organizacii.html'
})
export class NevladiniOrganizaciiPage {

  searchTerm: string = '';

  nevladiniOrg : Organisation[];
  AllNevladiniOrg : Organisation[];

  selectedIndex:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews : NewsData) {
    this.nevladiniOrg = dataNews.nevladiniOrgNewsData;
    this.AllNevladiniOrg = dataNews.nevladiniOrgNewsData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NevladiniOrganizaciiPage');
  }

  setFilteredItems(){
    this.nevladiniOrg = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){

    let searchType = this.AllNevladiniOrg;

    return searchType.filter((item) => {
      return item.Name.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  openDetailPage(nevladina) {
    this.navCtrl.push(NevladiniDetailsPage, {nevladina});
  }

}
