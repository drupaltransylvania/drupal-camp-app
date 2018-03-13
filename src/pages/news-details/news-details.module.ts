import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {NewsDetailsPage} from "./news-details";
import {SharebarModule} from "../../components/sharebar/sharebar.module";

@NgModule({
    declarations: [
        NewsDetailsPage
    ],
    imports: [
        SharebarModule,
        IonicPageModule.forChild(NewsDetailsPage),
    ],
    entryComponents: [
        NewsDetailsPage
    ]
})
export class NewsDetailsPageModule {

}
