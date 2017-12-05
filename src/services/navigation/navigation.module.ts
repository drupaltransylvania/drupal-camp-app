import {NgModule} from "@angular/core";
import {NavigationService} from "./navigation";

@NgModule({
    declarations: [
        NavigationService,
    ],
    entryComponents: [
        NavigationService,
    ],
    providers: [
        NavigationService,
    ]
})
export class NavigationModule {

}
