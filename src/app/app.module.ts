import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NewsPage} from "../pages/news/news";
import {NewsDetailsPage} from "../pages/news-details/news-details";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Sharebar} from "../pages/components/sharebar";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        NewsPage,
        NewsDetailsPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        NewsPage,
        NewsDetailsPage,
        Sharebar,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        SocialSharing,
        Sharebar,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
