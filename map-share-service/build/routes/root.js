"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
var dropbox_1 = require("dropbox");
var DROPBOX_ACCESS_TOKEN = process.env.DROPBOX_ACCESS_TOKEN;
var dbx = new dropbox_1.Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN, fetch: isomorphic_fetch_1.default });
function makeMapUrl(path) {
    return __awaiter(this, void 0, void 0, function () {
        var link;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbx.filesGetTemporaryLink({
                        path: path,
                    })];
                case 1:
                    link = (_a.sent()).link;
                    return [2 /*return*/, "http://localhost:5000/?maplink=" + encodeURIComponent(link)];
            }
        });
    });
}
var rootHandler = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var files, maps, mapUrls;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dbx.filesListFolder({ path: '' })];
            case 1:
                files = (_a.sent()).entries;
                maps = files.filter(function (file) { return file.name.match('.map'); });
                return [4 /*yield*/, Promise.all(maps.map(function (file) { return makeMapUrl(file.path_lower); }))];
            case 2:
                mapUrls = _a.sent();
                return [2 /*return*/, maps.map(function (file, index) { return ({
                        path: file.path_lower || '?',
                        temporaryLink: mapUrls[index],
                    }); })];
        }
    });
}); };
exports.default = rootHandler;
