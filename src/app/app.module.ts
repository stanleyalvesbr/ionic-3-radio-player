import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MusicControls } from '@ionic-native/music-controls';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StreamUrlProvider } from '../providers/stream-url/stream-url';
import { WordpressRestApiProvider } from '../providers/wordpress-rest-api/wordpress-rest-api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AnimationService, AnimatesDirective } from 'css-animator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimatesDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicControls,
    InAppBrowser,
    NativeStorage,
    SocialSharing,
    HttpModule,
    StreamUrlProvider,
    WordpressRestApiProvider,
    AnimationService
  ]
})
export class AppModule {}
