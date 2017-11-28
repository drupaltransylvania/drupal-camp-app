import {Component} from '@angular/core';
import {IonicPage, NavParams} from "ionic-angular";

@IonicPage({
    name: 'news-details-page',
    segment: 'news/:id',
    defaultHistory: ['news-page']
})
@Component({
    selector: 'page-news-details',
    templateUrl: 'news-details.html'
})
/**
 * Defines news detail page.
 */
export class NewsDetailsPage {

    /**
     * The select item of the current page.
     */
    selectedItem: { id: number, title: string, description: string, short_description: string, image: string, url: string, shareImage: string };

    /**
     * Constructor for HomePage.
     *
     * @param navParams
     *   The navigation parameters service.
     */
    constructor(public navParams: NavParams) {
        this.selectedItem = NewsDetailsPage.loadAPieceOfNews(navParams.get('id'));
    }

    /**
     * Loads a piece of news.
     *
     * @param id
     *   The id of the piece of news.
     *
     * @returns {id: number; title: string; description: string; short_description: string; image: string; url: string; shareImage: string}
     *   The piece of news.
     */
    static loadAPieceOfNews(id: number) {
        return {
            id: id,
            title: 'Venue revealed',
            description: 'Great companies and their talented employees deserve the best. The Office provides far more than just excellent offices: it is a business city inside the city, in a fresh environment, space where business objectives are met, providing ground for expansion.\n' +
            '\n' +
            'Here, global corporations and local companies will have top quality class A offices in downtown Cluj-Napoca, in a certified green building.\n' +
            'Its sophisticated architecture, large and flexible floor space and a wide variety of services and shops (such as day-care for children, banks, cafeteria, restaurants and a pharmacy) are some of the ingredients which will turn The Office into the region\'s new business hub.',
            short_description: 'Our new venue is the biggest IT center in Cluj-Napoca.',
            image: 'assets/images/the-office/the-office-news.jpg',
            url: 'http://google.com',
            shareImage: 'http://google.com/assets/images/the-office/the-office-news.jpg'
        };
    }

}
