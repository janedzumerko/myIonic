import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsData} from "../../../providers/news-data";
import {Organisation} from "../../../models/organizacii-model/organizacija";
import {StudentskiDetailsPage} from "../studentski-details/studentski-details";

/*
  Generated class for the StudentskiOrganizacii page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-studentski-organizacii',
  templateUrl: 'studentski-organizacii.html'
})
export class StudentskiOrganizaciiPage {

  searchTerm: string = '';

  studentskiOrg : Organisation[];
  AllStudentskiOrg : Organisation[];

  selectedIndex:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews : NewsData) {
    this.studentskiOrg = dataNews.studentskiOrgNewsData;
    this.AllStudentskiOrg = dataNews.studentskiOrgNewsData;
    console.log(this.studentskiOrg);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentskiOrganizaciiPage');
  }

  setFilteredItems(){
    this.studentskiOrg = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm){

    let searchType = this.AllStudentskiOrg;

    return searchType.filter((item) => {
      return item.Name.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  openDetailPage(studentska) {
    this.navCtrl.push(StudentskiDetailsPage, {studentska});
  }
  //
  // select(id){
  //
  //   if( this.selectedIndex == id ){
  //     this.selectedIndex = -1;
  //     return false;
  //   }
  //
  //   this.selectedIndex = id;
  // }

}
