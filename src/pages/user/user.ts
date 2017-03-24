import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NativeStorage, Facebook} from "ionic-native";
import {LoginPage} from "../login/login";

/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  user : any;
  userReady : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewCanEnter(){
    NativeStorage.getItem('user').then(function (data) {
      this.user = {
        name : data.name,
        gender : data.gender,
        picture : data.picture
      };
      this.userReady = true;
    }, function (error) {
      console.log(error);
    })
  }

  doFbLogOut() {
    Facebook.logout().then( function (response) {
      // user logged out so we need to remove him from NativeStorage

      NativeStorage.remove('user');
      this.navCtrl.setRoot(LoginPage);
    }, function (error) {
      console.log(error);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
