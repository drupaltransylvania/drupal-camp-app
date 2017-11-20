import {Component} from '@angular/core';
import {IonicPage, NavController} from "ionic-angular";

@IonicPage({
    name: 'home-page',
    segment: 'home'
})
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    /**
     * Constructor for HomePage.
     *
     * @param {NavController} navCtrl
     *   The navigation controller.
     */
    constructor(public navCtrl: NavController) {
    }

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
