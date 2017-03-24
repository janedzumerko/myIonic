import { NgModule, ErrorHandler } from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler, NavController} from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BibliotekiPage} from "../pages/ObrazovniUstanovi/biblioteki/biblioteki";
import {AktuelnoPage} from "../pages/AktuelnoFolder/aktuelno/aktuelno";
import {KontaktPage} from "../pages/kontakt/kontakt";
import {NevladiniOrganizaciiPage} from "../pages/Organizacii/nevladini-organizacii/nevladini-organizacii";
import {ProektiPage} from "../pages/ProektiFolder/proekti/proekti";
import {SredniUcilishtaPage} from "../pages/ObrazovniUstanovi/sredni-ucilishta/sredni-ucilishta";
import {StudentskiDomoviPage} from "../pages/ObrazovniUstanovi/studentski-domovi/studentski-domovi";
import {StudentskiOrganizaciiPage} from "../pages/Organizacii/studentski-organizacii/studentski-organizacii";
import {UniverzitetiPage} from "../pages/ObrazovniUstanovi/univerziteti/univerziteti";
import {NewsData} from "../providers/news-data";
import {Storage} from "@ionic/storage";
import {StipendiiPage} from "../pages/mainTabs/stipendii/stipendii";
import {ObukiPage} from "../pages/mainTabs/obuki/obuki";
import {VrabotuvanjaPage} from "../pages/mainTabs/vrabotuvanja/vrabotuvanja";
import {PraksiPage} from "../pages/mainTabs/praksi/praksi";
import {GlobalVarAndFunc} from "../providers/globalVarAndFunc";
import {EduKartickaPage} from "../pages/Popusti/edu-karticka/edu-karticka";
import {EycaKartickaPage} from "../pages/Popusti/eyca-karticka/eyca-karticka";
import {SpukimKartickaPage} from "../pages/Popusti/spukim-karticka/spukim-karticka";
import {KorisniLinkoviPage} from "../pages/korisni-linkovi/korisni-linkovi";
import {AktuelnoProektiDetailsPage} from "../pages/aktuelno-proekti-details/aktuelno-proekti-details";
import {AktuelnoDetailsPage} from "../pages/AktuelnoFolder/aktuelno-details/aktuelno-details";
import {ProektiDetailsPage} from "../pages/ProektiFolder/proekti-details/proekti-details";
import {NevladiniDetailsPage} from "../pages/Organizacii/nevladini-details/nevladini-details";
import {StudentskiDetailsPage} from "../pages/Organizacii/studentski-details/studentski-details";

@NgModule({
  declarations: [
    MyApp,
    BibliotekiPage,
    AktuelnoPage,
    KontaktPage,
    NevladiniOrganizaciiPage,
    ProektiPage,
    SredniUcilishtaPage,
    StudentskiDomoviPage,
    StudentskiOrganizaciiPage,
    UniverzitetiPage,
    StipendiiPage,
    ObukiPage,
    VrabotuvanjaPage,
    PraksiPage,
    EduKartickaPage,
    EycaKartickaPage,
    SpukimKartickaPage,
    KorisniLinkoviPage,
    AktuelnoDetailsPage,
    ProektiDetailsPage,
    NevladiniDetailsPage,
    StudentskiDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: 'Назад'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BibliotekiPage,
    AktuelnoPage,
    KontaktPage,
    NevladiniOrganizaciiPage,
    ProektiPage,
    SredniUcilishtaPage,
    StudentskiDomoviPage,
    StudentskiOrganizaciiPage,
    UniverzitetiPage,
    StipendiiPage,
    ObukiPage,
    VrabotuvanjaPage,
    PraksiPage,
    EduKartickaPage,
    EycaKartickaPage,
    SpukimKartickaPage,
    KorisniLinkoviPage,
    AktuelnoDetailsPage,
    ProektiDetailsPage,
    NevladiniDetailsPage,
    StudentskiDetailsPage
  ],
  providers: [NewsData, Storage, GlobalVarAndFunc]
})
export class AppModule {}
