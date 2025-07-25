"use strict";
exports.__esModule = true;
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var http_2 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var httpLoaderFactory = function (http) {
    return new http_loader_1.TranslateHttpLoader(http, './i18n/', '.json');
};
exports.appConfig = {
    providers: [
        core_1.provideZoneChangeDetection({ eventCoalescing: true }),
        router_1.provideRouter(app_routes_1.routes),
        http_1.provideHttpClient(),
        core_1.importProvidersFrom([core_2.TranslateModule.forRoot({
                loader: {
                    provide: core_2.TranslateLoader,
                    useFactory: httpLoaderFactory,
                    deps: [http_2.HttpClient]
                }
            })])
    ]
};
