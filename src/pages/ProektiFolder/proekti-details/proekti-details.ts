import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Aktuelno} from "../../../models/aktuelno-model/aktuelno";

/*
  Generated class for the ProektiDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-proekti-details',
  templateUrl: 'proekti-details.html'
})
export class ProektiDetailsPage {

  oneProekt : Aktuelno;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oneProekt = this.navParams.get('proekt');
    console.log(this.oneProekt.Text);
    console.log(this.oneProekt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProektiDetailsPage');

  }

}
