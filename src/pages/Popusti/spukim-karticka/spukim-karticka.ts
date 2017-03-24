import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SpukimKarticka page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-spukim-karticka',
  templateUrl: 'spukim-karticka.html'
})
export class SpukimKartickaPage {

  spukimImage : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpukimKartickaPage');
    this.spukimImage = "./assets/imagesInsideApp/spukim.jpg";
  }

}
