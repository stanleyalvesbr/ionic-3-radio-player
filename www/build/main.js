webpackJsonp([6],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		294,
		5
	],
	"../pages/blog/blog.module": [
		295,
		4
	],
	"../pages/galeri/galeri.module": [
		296,
		3
	],
	"../pages/jadwal/jadwal.module": [
		297,
		2
	],
	"../pages/kontak/kontak.module": [
		298,
		1
	],
	"../pages/menu-pop/menu-pop.module": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stream_url_stream_url__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_music_controls__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_css_animator__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_css_animator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, player, musicControls, animationService) {
        this.navCtrl = navCtrl;
        this.player = player;
        this.musicControls = musicControls;
    }
    HomePage.prototype.settingMusicControl = function () {
        var _this = this;
        this.musicControls.destroy(); // it's the same with or without the destroy 
        this.musicControls.create({
            track: 'Radio Cristy',
            artist: '828 AM - Makassar',
            cover: '',
            // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
            //           or a remote url ('http://...', 'https://...', 'ftp://...')
            isPlaying: true,
            dismissable: true,
            // hide previous/next/close buttons:
            hasPrev: false,
            hasNext: false,
            hasClose: true,
            hasSkipForward: false,
            hasSkipBackward: false,
            skipForwardInterval: 15,
            skipBackwardInterval: 15,
            // iOS only, optional
            album: 'test album',
            duration: 0,
            elapsed: 0,
            // Android only, optional
            // text displayed in the status bar when the notific\ation (and the ticker) are updated
            ticker: 'Now playing'
        });
        this.musicControls.subscribe().subscribe(function (action) {
            console.log('action', action);
            var message = JSON.parse(action).message;
            console.log('message', message);
            switch (message) {
                case 'music-controls-next':
                    // Do something
                    break;
                case 'music-controls-previous':
                    // Do something
                    break;
                case 'music-controls-pause':
                    // Do something
                    console.log('music pause');
                    _this.player.pause();
                    _this.musicControls.listen();
                    _this.musicControls.updateIsPlaying(false);
                    break;
                case 'music-controls-play':
                    // Do something
                    console.log('music play');
                    _this.player.play();
                    _this.musicControls.listen();
                    _this.musicControls.updateIsPlaying(true);
                    break;
                case 'music-controls-destroy':
                    // Do something
                    break;
                // External controls (iOS only)
                case 'music-controls-toggle-play-pause':
                    // Do something
                    break;
                case 'music-controls-seek-to':
                    // Do something
                    break;
                case 'music-controls-skip-forward':
                    // Do something
                    break;
                case 'music-controls-skip-backward':
                    // Do something
                    break;
                // Headset events (Android only)
                // All media button events are listed below
                case 'music-controls-media-button':
                    // Do something
                    break;
                case 'music-controls-headset-unplugged':
                    // Do something
                    break;
                case 'music-controls-headset-plugged':
                    // Do something
                    break;
                default:
                    break;
            }
        });
        this.musicControls.listen(); // activates the observable above
        this.musicControls.updateIsPlaying(true);
    };
    HomePage.prototype.play = function () {
        this.player.play();
        this.settingMusicControl();
        console.log('playing');
    };
    HomePage.prototype.pause = function () {
        this.player.pause();
        this.musicControls.listen();
        this.musicControls.updateIsPlaying(false);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/daniwidodo/Desktop/ionic/ion3-radio-dev/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Radio Player\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="false" class="homebg">\n  <ion-grid>\n    <ion-row>\n      <div class="radio-logo"> \n        <span class="radio-logo1">RADIO cristy</span>\n      </div>\n    </ion-row>\n    <ion-row>\n      <span class="radio-logo2">828 am - Makassar</span>\n    </ion-row>>\n    <ion-row>\n        <ion-col>\n          <button ion-button block outline color="default" (click)="play()">Play</button>\n        </ion-col>\n\n        <ion-col>\n          <button ion-button block outline color="danger" (click)="pause()">Pause</button>\n        </ion-col>      \n    </ion-row>\n    <ion-row>\n\n    </ion-row>\n\n  </ion-grid> \n  <ion-fab right bottom>\n      <button ion-fab color="secondary"><ion-icon name="apps"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n    <div style="padding-top: 5em; margin: 2em;"></div>\n</ion-content>\n'/*ion-inline-end:"/home/daniwidodo/Desktop/ionic/ion3-radio-dev/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_stream_url_stream_url__["a" /* StreamUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_music_controls__["a" /* MusicControls */],
            __WEBPACK_IMPORTED_MODULE_4_css_animator__["AnimationService"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamUrlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StreamUrlProvider = (function () {
    function StreamUrlProvider() {
        this.url = "http://akalmultimedia.net:8000/GDNSLDH";
        this.stream = new Audio(this.url);
    }
    ;
    StreamUrlProvider.prototype.play = function () {
        var _this = this;
        this.stream.play();
        this.promise = new Promise(function (resolve, reject) {
            _this.stream.addEventListener('playing', function () {
                resolve(true);
            });
            _this.stream.addEventListener('error', function () {
                reject(false);
            });
        });
        return this.promise;
    };
    ;
    StreamUrlProvider.prototype.pause = function () {
        this.stream.pause();
    };
    ;
    StreamUrlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StreamUrlProvider);
    return StreamUrlProvider;
}());

//# sourceMappingURL=stream-url.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_music_controls__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_stream_url_stream_url__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_wordpress_rest_api_wordpress_rest_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_css_animator__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_css_animator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15_css_animator__["AnimatesDirective"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blog/blog.module#BlogPageModule', name: 'BlogPage', segment: 'blog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galeri/galeri.module#GaleriPageModule', name: 'GaleriPage', segment: 'galeri', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jadwal/jadwal.module#JadwalPageModule', name: 'JadwalPage', segment: 'jadwal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kontak/kontak.module#KontakPageModule', name: 'KontakPage', segment: 'kontak', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-pop/menu-pop.module#MenuPopPageModule', name: 'MenuPopPage', segment: 'menu-pop', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_music_controls__["a" /* MusicControls */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__providers_stream_url_stream_url__["a" /* StreamUrlProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_wordpress_rest_api_wordpress_rest_api__["a" /* WordpressRestApiProvider */],
                __WEBPACK_IMPORTED_MODULE_15_css_animator__["AnimationService"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/daniwidodo/Desktop/ionic/ion3-radio-dev/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/daniwidodo/Desktop/ionic/ion3-radio-dev/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressRestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the WordpressRestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WordpressRestApiProvider = (function () {
    function WordpressRestApiProvider(http) {
        this.http = http;
        console.log('Hello WordpressRestApiProvider Provider');
    }
    WordpressRestApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WordpressRestApiProvider);
    return WordpressRestApiProvider;
}());

//# sourceMappingURL=wordpress-rest-api.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map