import {Injectable} from "@angular/core";

import * as moment from 'moment';
import {SocialSharing} from "ionic-native";


/*
 Generated class for the GlobalVarAndFunc provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */


@Injectable()
export class GlobalVarAndFunc {


    // we are using this function to calculate difference between current time and given time in the json
    // we return the difference
    static calculateTimeDiference(date) {
        let myDate = moment(date, "DD.MM.YYYY HH:mm:ss").locale('mk');
        return myDate.fromNow();
    }

}