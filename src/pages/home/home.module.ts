import {NgModule} from "@angular/core";
import {HomePage} from "./home";
import {IonicPageModule} from "ionic-angular";
import {FooterModule} from "../../components/footer/footer.module";

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        FooterModule
    ],
    entryComponents: [
        HomePage
    ]
})
export class HomePageModule {

}
