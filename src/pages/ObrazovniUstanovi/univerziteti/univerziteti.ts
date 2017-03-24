/*
 Generated class for the Univerziteti page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

import {Uchilishta} from "../../../models/uchilishta-model/uchilishta";
import {Component, Pipe} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {NewsData} from "../../../providers/news-data";
import _ from 'underscore';
import {isObject} from "rxjs/util/isObject";
import {isDefined} from "ionic-angular/util/util";

@Component({
    selector: 'page-univerziteti',
    templateUrl: 'univerziteti.html'
})

export class UniverzitetiPage {

    searchTerm: string = '';

    univerziteti: Uchilishta[];
    AllUniverziteti: Uchilishta[];

    sortedPrivatniUniverzteti: Uchilishta[] = [];

    sortedDrzhavniUniverziteti: Uchilishta[] = [];

    sortedOstanatiUstanovi: Uchilishta[] = [];

    searchPrivatniUniverziteti: Uchilishta[] = [];

    searchPrivatniAvailable: boolean = true;
    searchDrzavniAvailable: boolean = true;
    searchOstanatiAvailable: boolean = true;

    constructor(public navCtrl: NavController, public navParams: NavParams, public dataNews: NewsData) {


        this.univerziteti = dataNews.univerzitetiNewsData.slice().reverse();

        this.AllUniverziteti = dataNews.univerzitetiNewsData.slice().reverse();

        this.univerziteti.forEach(item => {

            console.log(item.TypeID);

            if( item.TypeID == 'Приватни универзитети' ){
                this.sortedPrivatniUniverzteti.push(item);
                this.searchPrivatniUniverziteti.push(item);

            }

            else if( item.TypeID == 'Државни универзитети' ){
                this.sortedDrzhavniUniverziteti.push(item);
            }

            else if( item.TypeID == 'Останати високообразовни установи' ){
                this.sortedOstanatiUstanovi.push(item);
            }

        });
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad UniverzitetiPage');
    }

    setFilteredItems() {

            let tmp = this.filterItems(this.searchTerm);

            this.sortedOstanatiUstanovi = [];
            this.sortedPrivatniUniverzteti = [];
            this.sortedDrzhavniUniverziteti = [];

            if( tmp.length == 0 ){
                this.searchDrzavniAvailable = false;
                this.searchOstanatiAvailable = false;
                this.searchPrivatniAvailable = false;
            }

            tmp.forEach(item => {

                if( item.TypeID == 'Приватни универзитети' ){
                    this.sortedPrivatniUniverzteti.push(item);
                    this.searchDrzavniAvailable = false;
                    this.searchOstanatiAvailable = false;
                    this.searchPrivatniAvailable = true;
                }

                else if( item.TypeID == 'Државни универзитети' ){
                    this.sortedDrzhavniUniverziteti.push(item);
                    console.log('drzavni ima');
                    this.searchDrzavniAvailable = true;
                    this.searchOstanatiAvailable = false;
                    this.searchPrivatniAvailable = false;
                }

                else if( item.TypeID == 'Останати високообразовни установи' ){
                    this.sortedOstanatiUstanovi.push(item);
                    console.log('ostanati ustanovi');
                    this.searchDrzavniAvailable = false;
                    this.searchPrivatniAvailable = false;
                    this.searchOstanatiAvailable = true;
                }

            });

        if( this.searchTerm == '' ){
            this.searchDrzavniAvailable = true;
            this.searchOstanatiAvailable = true;
            this.searchPrivatniAvailable = true;
        }
    }

    filterItems(searchTerm) {

        let searchType = this.AllUniverziteti;

        return searchType.filter((item) => {


            return item.Name.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }

}
