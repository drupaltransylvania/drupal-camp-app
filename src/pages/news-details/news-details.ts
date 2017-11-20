import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from "ionic-angular";
@IonicPage({
    name: 'news-details-page',
    segment: 'news/:id'
})
@Component({
    selector: 'page-news-details',
    templateUrl: 'news-details.html',
})

export class NewsDetailsPage {

    selectedItem: any;

    /**
     * Constructor for HomePage.
     *
     * @param {NavController} navCtrl
     *   The navigation controller.
     */
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.selectedItem = navParams.get('item');
    }

    // shareViaFacebook($event) {
    //     this.socialSharing.canShareVia('facebook').then(() => {
    //         this.socialSharing.shareViaFacebook(this.selectedItem.short_description, this.selectedItem.image, 'http://google.ro');
    //     }).catch(() => {
    //
    //     });
    // }

}
