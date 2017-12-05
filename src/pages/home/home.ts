import {Component} from '@angular/core';
import {IonicPage, NavController} from "ionic-angular";
import {NavigationService} from "../../services/navigation/navigation.services";

@IonicPage({
    name: 'home-page',
    segment: 'home'
})
@Component({
    selector: 'page-home',
    providers: [NavigationService],
    templateUrl: 'home.html'
})
/**
 * Defines the hompage.
 */
export class HomePage {

    /**
     * Constructor for HomePage.
     *
     * @param {NavController} navCtrl
     *   The navigation controller.
     */
    constructor(public navCtrl: NavController, public navigation: NavigationService) {
    }

    /**
     * Navigates to a page.
     *
     * @param event
     *  The event.
     * @param page
     *  The page to navigate to.
     */
    // goToPage(event, page) {
    //     this.navCtrl.push(page);
    // }
}
