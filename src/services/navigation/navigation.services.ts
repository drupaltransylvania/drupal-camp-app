import {Injectable} from "@angular/core";
import {NavController} from "ionic-angular";

@Injectable()
export class NavigationService {

    /**
     * Defines constructor for navigation service.
     *
     * @param {NavController} navCtrl
     *   THe navigation controller.
     */
    constructor(public navCtrl: NavController) {}

    /**
     * Navigates to a page.
     *
     * @param event
     *  The event.
     * @param page
     *  The page to navigate to.
     */
    goToPage(event, page) {
        this.navCtrl.push(page);
    }

}