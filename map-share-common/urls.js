"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urls;
if (process.env.NODE_ENV !== 'production') {
    var host = process.env.IP || 'localhost';
    urls = {
        // tslint:disable:no-http-string
        GENERATOR_URL: "http://" + host + ":5000",
        SERVICE_URL: "http://" + host + ":3000",
    };
}
else {
    urls = {
        GENERATOR_URL: 'https://hasparus.github.io/Fantasy-Map-Generator/',
        SERVICE_URL: 'http://localhost:3000',
    };
}
exports.GENERATOR_URL = urls.GENERATOR_URL;
exports.SERVICE_URL = urls.SERVICE_URL;
