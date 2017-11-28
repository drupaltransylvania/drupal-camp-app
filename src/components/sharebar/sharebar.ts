import {Component, Input} from "@angular/core";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Events} from "ionic-angular";

@Component({
    selector: 'dct-sharebar',
    templateUrl: 'sharebar.html'
})
/**
 * Defines the share bar.
 */
export class Sharebar {

    /**
     * The title to share.
     */
    @Input() title: string;

    /**
     * The description to share.
     */
    @Input() description: string;

    /**
     * The image to share.
     */
    @Input() image: string;

    /**
     * The url to share.
     */
    @Input() url: string;

    /**
     * Defines constructor for the share bar.
     */
    constructor(private socialSharing: SocialSharing, private events: Events) {
    }

    /**
     * Shares via Facebook.
     */
    shareViaFacebook() {
        this.socialSharing.canShareVia('facebook').then(() => {
            this.socialSharing.shareViaFacebook(this.description, this.image, this.url).then(() => {
            }).catch(() => {
            })
        }).catch(() => {
            console.log('Share via Facebook is not possible!');
        })
    }

}
