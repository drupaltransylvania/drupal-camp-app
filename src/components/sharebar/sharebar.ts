import {Component, Input} from "@angular/core";
import {SocialSharing} from "@ionic-native/social-sharing";

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
     *
     * @param {SocialSharing} socialSharing
     *   The social sharing extension.
     */
    constructor(private socialSharing: SocialSharing) {
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
            console.log('Share via Facebook is not supported!');
        })
    }

    /**
     * Shares via Twitter.
     */
    shareViaTwitter() {
        this.socialSharing.canShareVia('twitter').then(() => {
            this.socialSharing.shareViaTwitter(this.description, this.image, this.url).then(() => {
            }).catch(() => {
            })
        }).catch(() => {
            console.log('Share via Twitter is not supported!');
        })
    }

    /**
     * Shares via Instagram.
     */
    shareViaInstagram() {
        this.socialSharing.canShareVia('instagram').then(() => {
            this.socialSharing.shareViaInstagram(this.description, this.image).then(() => {
            }).catch(() => {
            })
        }).catch(() => {
            console.log('Share via Instagram is not supported!');
        })
    }

    /**
     * Shares via WhatsApp.
     */
    shareViaWhatsApp() {
        this.socialSharing.canShareVia('whatsapp').then(() => {
            this.socialSharing.shareViaWhatsApp(this.description, this.image, this.url).then(() => {
            }).catch(() => {
            })
        }).catch(() => {
            console.log('Share via Whatsapp is not supported!');
        })
    }

}
