import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {
    IonicApp, IonicModule, IonicErrorHandler,
} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SocialSharing} from "@ionic-native/social-sharing";
import {HomePageModule} from "../pages/home/home.module";

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            preloadModules: true,
            mode: "md",
        }),
        HomePageModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        SocialSharing,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
