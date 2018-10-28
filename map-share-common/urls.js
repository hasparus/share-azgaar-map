"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urls;
if (process.env.NODE_ENV !== 'production') {
    urls = {
        GENERATOR_URL: 'http://localhost:5000',
        // tslint:disable-next-line:no-http-string
        SERVICE_URL: "http://" + (process.env.IP || 'localhost') + ":3000",
    };
}
else {
    urls = {
        GENERATOR_URL: '???',
        SERVICE_URL: '???',
    };
}
exports.GENERATOR_URL = urls.GENERATOR_URL;
exports.SERVICE_URL = urls.SERVICE_URL;
