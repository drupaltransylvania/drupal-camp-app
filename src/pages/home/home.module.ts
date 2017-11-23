import {NgModule} from "@angular/core";
import {HomePage} from "./home";
import {IonicPageModule} from "ionic-angular";
import {FooterModule} from "../../components/footer/footer.module";
import {StarsModule} from "../../components/stars/stars.module";

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        FooterModule,
        StarsModule,
    ],
    entryComponents: [
        HomePage
    ]
})
export class HomePageModule {

}
