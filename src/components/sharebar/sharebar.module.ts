import {NgModule} from "@angular/core";
import {Sharebar} from "./sharebar";
import {IonicModule} from "ionic-angular";

@NgModule({
    declarations: [
        Sharebar,
    ],
    imports: [
        IonicModule.forRoot(Sharebar),
    ],
    entryComponents: [
        Sharebar,
    ],
    exports: [
        Sharebar
    ]
})
/**
 * Defines sharebar module.
 */
export class SharebarModule{

}
