import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {NewsPage} from "../news/news";

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
        switch (page) {
            case 'NewsPage':
                page = NewsPage;
                break;

            default:
                break;
        }
        this.navCtrl.push(page);
    }
}
