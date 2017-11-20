import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {
    IonicApp, IonicModule, IonicErrorHandler,
    IonicPageModule
} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NewsPage} from "../pages/news/news";
import {NewsDetailsPage} from "../pages/news-details/news-details";
import {SocialSharing} from "@ionic-native/social-sharing";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        NewsPage,
        NewsDetailsPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            preloadModules: true,
        }),
        IonicPageModule.forChild(HomePage),
        IonicPageModule.forChild(NewsPage),
        IonicPageModule.forChild(NewsDetailsPage)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        NewsPage,
        NewsDetailsPage,
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
