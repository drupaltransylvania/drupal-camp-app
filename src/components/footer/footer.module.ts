import {NgModule} from "@angular/core";
import {Footer} from "./footer";
import {IonicModule} from "ionic-angular";

@NgModule({
    declarations: [
        Footer,
    ],
    imports: [
        IonicModule.forRoot(Footer),
    ],
    entryComponents: [
        Footer,
    ],
    exports: [
        Footer,
    ]
})
/**
 * Defines the footer module.
 */
export class FooterModule {

}
