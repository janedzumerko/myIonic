import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Organisation} from "../../../models/organizacii-model/organizacija";

/*
  Generated class for the NevladiniDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nevladini-details',
  templateUrl: 'nevladini-details.html'
})
export class NevladiniDetailsPage {

  oneNevladina : Organisation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oneNevladina = this.navParams.get('nevladina');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NevladiniDetailsPage');
  }

}

//
// oneAktuelno : Aktuelno;
//
// constructor(public navCtrl: NavController, public navParams: NavParams) {
//   this.oneAktuelno = this.navParams.get('aktuel');
//   console.log(this.oneAktuelno);
// }