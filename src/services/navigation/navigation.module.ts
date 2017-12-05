import {NgModule} from "@angular/core";
import {NavigationService} from "./navigation.services";

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
