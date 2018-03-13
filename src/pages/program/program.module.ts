import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ProgramPage} from "./program";
import {StarsModule} from "../../components/stars/stars.module";

@NgModule({
    declarations: [
        ProgramPage,
    ],
    imports: [
        IonicPageModule.forChild(ProgramPage),
        StarsModule
    ],
    entryComponents: [
        ProgramPage,
    ]
})
export class ProgramPageModule {

}
