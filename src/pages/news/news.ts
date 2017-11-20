import {Component} from '@angular/core';
import {IonicPage, NavController} from "ionic-angular";
import {NewsDetailsPage} from "../news-details/news-details";

@IonicPage({
    name: 'news-page',
    segment: 'news'
})
@Component({
    selector: 'page-news',
    templateUrl: 'news.html'
})
export class NewsPage {

    news: Array<{ title: string, description: string, short_description: string, image: string }>;

    /**
     * Constructor for HomePage.
     *
     * @param {NavController} navCtrl
     *   The navigation controller.
     */
    constructor(public navCtrl: NavController) {
        this.news = [];

        for (let i = 1; i < 12; i++) {
            this.news.push({
                title: 'Venue revealed',
                description: 'Great companies and their talented employees deserve the best. The Office provides far more than just excellent offices: it is a business city inside the city, in a fresh environment, space where business objectives are met, providing ground for expansion.\n' +
                '\n' +
                'Here, global corporations and local companies will have top quality class A offices in downtown Cluj-Napoca, in a certified green building.\n' +
                'Its sophisticated architecture, large and flexible floor space and a wide variety of services and shops (such as day-care for children, banks, cafeteria, restaurants and a pharmacy) are some of the ingredients which will turn The Office into the region\'s new business hub.',
                short_description: 'Our new venue is the biggest IT center in Cluj-Napoca.',
                image: 'assets/images/the-office/the-office-news.jpg'
            });
        }
    }

    newsTapped(event, item) {
        this.navCtrl.push('news-details-page', {
            'id': item.id
        });
    }

}
