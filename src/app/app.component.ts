import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, Events, MenuController, NavParams, IonicApp} from 'ionic-angular';

import {NavController} from "ionic-angular/index";


import {StatusBar, Splashscreen, SocialSharing, NativeStorage} from 'ionic-native';
import {UniverzitetiPage} from "../pages/ObrazovniUstanovi/univerziteti/univerziteti";
import {SredniUcilishtaPage} from "../pages/ObrazovniUstanovi/sredni-ucilishta/sredni-ucilishta";
import {BibliotekiPage} from "../pages/ObrazovniUstanovi/biblioteki/biblioteki";
import {StudentskiDomoviPage} from "../pages/ObrazovniUstanovi/studentski-domovi/studentski-domovi";
import {StudentskiOrganizaciiPage} from "../pages/Organizacii/studentski-organizacii/studentski-organizacii";
import {NevladiniOrganizaciiPage} from "../pages/Organizacii/nevladini-organizacii/nevladini-organizacii";
import {NewsData} from "../providers/news-data";
import {TutorialPage} from "../pages/tutorial/tutorial";
import {TabsPage} from "../pages/tabs/tabs";
import {AktuelnoPage} from "../pages/AktuelnoFolder/aktuelno/aktuelno";
import {ProektiPage} from "../pages/ProektiFolder/proekti/proekti";
import {KontaktPage} from "../pages/kontakt/kontakt";
import {VrabotuvanjaPage} from "../pages/mainTabs/vrabotuvanja/vrabotuvanja";
import {PraksiPage} from "../pages/mainTabs/praksi/praksi";
import {StipendiiPage} from "../pages/mainTabs/stipendii/stipendii";
import {ObukiPage} from "../pages/mainTabs/obuki/obuki";
import {EduKartickaPage} from "../pages/Popusti/edu-karticka/edu-karticka";
import {SpukimKartickaPage} from "../pages/Popusti/spukim-karticka/spukim-karticka";
import {EycaKartickaPage} from "../pages/Popusti/eyca-karticka/eyca-karticka";
import {KorisniLinkoviPage} from "../pages/korisni-linkovi/korisni-linkovi";
import {PredloziPage} from "../pages/predlozi/predlozi";
import {LoginPage} from "../pages/login/login";


export interface PageInterface {
    title: string;
    component: any;
    icon?: string;
    index?: number;
}

@Component({
    templateUrl: 'app.html',

})

export class MyApp {

    // the root nav is a child of the root app component
    // @ViewChild(Nav) gets a reference to the app's root nav
    @ViewChild(Nav) nav: Nav;


    // List of pages that can be navigated from the left menu
    obrazovniUstanovi: PageInterface[] = [
        {title: 'Универзитети', component: UniverzitetiPage},
        {title: 'Средни училишта', component: SredniUcilishtaPage},
        {title: 'Библиотеки', component: BibliotekiPage},
        {title: 'Студентски домови', component: StudentskiDomoviPage},
    ];

    popusti : PageInterface[] = [
        {title : 'ЕДУ Картичка', component: EduKartickaPage },
        {title : 'СПУКИМ Картичка', component: SpukimKartickaPage },
        {title : 'EYCA Картичка', component: EycaKartickaPage },
    ];

    organizacii: PageInterface[] = [
        {title: 'Студентски организации', component: StudentskiOrganizaciiPage},
        {title: 'Невладини организации', component: NevladiniOrganizaciiPage},
    ];

    ams: PageInterface[] = [
        {title: 'Актуелно', component: AktuelnoPage},
        {title: 'Проекти', component: ProektiPage},
    ];

    rootPage: any;


    constructor(public platform: Platform,
                public events: Events,
                public menu: MenuController,
                public newsData: NewsData) {

        // // check if the user already has seen the tutorial
        // this.storage.get('hasSeenTutorial').then((hasSeenTutorial) => {
        //     if (hasSeenTutorial) {
        //         this.rootPage = VrabotuvanjaPage;
        //     } else {
        //         // TODO: change tutorial here
        //     }
        //     this.platformReady();
        // });

        this.platformReady();

    }

    openKorisniLinkovi() {
        this.nav.setRoot(KorisniLinkoviPage);
    }

    openPredlozi() {
        // Check if sharing via email is supported
        SocialSharing.canShareViaEmail().then(() => {
            // Sharing via email is possible
            // Share via email
            SocialSharing.shareViaEmail('', 'Предлог за подобрување на млади амс', ['jane.dzumerkoski@gmail.com']).then(() => {
                // Success!
            }).catch(() => {
                // Error!
            });
        }).catch(() => {
            // Sharing via email is not possible
            // TODO: message that share with email is not possible
        });


    }

    openKontakt() {
        this.nav.setRoot(KontaktPage);
    }

    openPage(page: PageInterface) {
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        console.log(page.component);
        this.nav.setRoot(page.component);
    }

    private platformReady() {
        // Call any initial plugins when ready
        this.platform.ready().then(() => {

            console.log("This platform is ready");

            this.newsData.loadData();

            this.newsData.updateEmitter.subscribe(updateSuccess => {

                if( updateSuccess ){
                    Splashscreen.hide();
                    this.rootPage = VrabotuvanjaPage;
                }
            }

            // NativeStorage.getItem('user').then( function (data) {
            //     //user is already logged in and we have his data
            //     // we will let him access the app
            //     console.log("User found, go to Vrabotuvanja");
            //
            //     this.newsData.loadData();
            //
            //     this.newsData.updateEmitter.subscribe(updateSuccess => {
            //
            //         if( updateSuccess ){
            //             Splashscreen.hide();
            //             this.rootPage = VrabotuvanjaPage;
            //         }
            //     });
            // }, function (error) {
            //
            //         console.log("No user found, go to Login");
            //     // we don't have the user data so we will as him to log in
            //     Splashscreen.hide();
            //     this.rootPage = VrabotuvanjaPage;
            // }

            );

        });
    }

    tabPage1(){
        this.nav.setRoot(VrabotuvanjaPage);
    }

    tabPage2(){
        this.nav.setRoot(PraksiPage);
    }

    tabPage3(){
        this.nav.setRoot(StipendiiPage);
    }

    tabPage4(){
        this.nav.setRoot(ObukiPage);
    }
}
