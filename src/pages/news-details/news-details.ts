import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Sharebar} from "../components/sharebar/sharebar";

@IonicPage({
    name: 'news-details-page',
    segment: 'news/:id',
    defaultHistory: ['news-page']
})
@Component({
    selector: 'page-news-details',
    templateUrl: 'news-details.html',
    entryComponents: [
        Sharebar
    ]
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
        this.selectedItem = this.loadAPieceOfNews(navParams.get('id'));
    }

    loadAPieceOfNews(id) {
        return {
            id: id,
            title: 'Venue revealed',
            description: 'Great companies and their talented employees deserve the best. The Office provides far more than just excellent offices: it is a business city inside the city, in a fresh environment, space where business objectives are met, providing ground for expansion.\n' +
            '\n' +
            'Here, global corporations and local companies will have top quality class A offices in downtown Cluj-Napoca, in a certified green building.\n' +
            'Its sophisticated architecture, large and flexible floor space and a wide variety of services and shops (such as day-care for children, banks, cafeteria, restaurants and a pharmacy) are some of the ingredients which will turn The Office into the region\'s new business hub.',
            short_description: 'Our new venue is the biggest IT center in Cluj-Napoca.',
            image: 'assets/images/the-office/the-office-news.jpg'
        }
    }

    // shareViaFacebook($event) {
    //     this.socialSharing.canShareVia('facebook').then(() => {
    //         this.socialSharing.shareViaFacebook(this.selectedItem.short_description, this.selectedItem.image, 'http://google.ro');
    //     }).catch(() => {
    //
    //     });
    // }

}
