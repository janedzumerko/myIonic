import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Aktuelno} from "../../../models/aktuelno-model/aktuelno";

/*
  Generated class for the AktuelnoDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aktuelno-details',
  templateUrl: 'aktuelno-details.html'
})
export class AktuelnoDetailsPage {

  oneAktuelno : Aktuelno;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oneAktuelno = this.navParams.get('aktuel');
    console.log(this.oneAktuelno);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AktuelnoDetailsPage');


  }

}
