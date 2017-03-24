import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EduKarticka page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edu-karticka',
  templateUrl: 'edu-karticka.html'
})
export class EduKartickaPage {

  // TODO: najdi pdobra slikaz a katickata
  eduImage : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EduKartickaPage');
    this.eduImage = "./assets/imagesInsideApp/edukarta.jpg";
  }

}
