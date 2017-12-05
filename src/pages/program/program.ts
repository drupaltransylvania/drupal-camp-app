import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {NavigationService} from "../../services/navigation/navigation.services";


@IonicPage({
    name: 'program-page',
    segment: 'program'
})
@Component({
    selector: 'program-page',
    providers: [NavigationService],
    templateUrl: 'program.html'
})
/**
 * Defines the program page.
 */
export class ProgramPage {

    /**
     * Defines the sessions.
     */
    sessions: Array<{ id: number, title: string, description: string, short_description: string, time: string, room: string, speaker: string}>;

    /**
     * Defines constructor for program.
     *
     * @param {NavController} navCtrl
     *   The navigation controller.
     * @param {NavigationService} navigation
     *   The navigation service.
     */
    constructor(public navCtrl: NavController, public navigation: NavigationService) {
        this.sessions = [];

        for (let i = 1; i < 7; i++) {
            this.sessions.push({
                id: i,
                title: 'Decoupled Drupal',
                description: 'Customers engage with an organization\'s content and data across many different touch points, all with their own unique requirements. Users are no longer confined to the traditional avenues of websites or native mobile applications; customers can also connect to your brand through conversational UIs, IoT devices, or wearables. With its flexible APIs and web services, Drupal can be the brain behind all of your systems to deliver content everywhere.',
                short_description: 'If you\'re interested in this series, there\'s a good chance you\'ve heard at least some of the buzz in the Drupalverse about "headless" or decoupled Drupal.',
                time: '10:30 - 11:30',
                room: 'Transylvania',
                speaker: 'Dries Buytaert'
            });
        }
    }

    sessionTapped(event, item) {

    }

}
