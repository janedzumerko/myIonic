import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Organisation} from "../../../models/organizacii-model/organizacija";

/*
  Generated class for the StudentskiDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-studentski-details',
  templateUrl: 'studentski-details.html'
})
export class StudentskiDetailsPage {

  oneStudentska : Organisation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oneStudentska = this.navParams.get('studentska');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentskiDetailsPage');
  }

}
