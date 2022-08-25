"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var exp = require("express");
var router = exp.Router();
var resize_1 = require("../util/resize");
var validateNumber_1 = require("../util/validateNumber");
var validateImage_1 = require("../util/validateImage");
router.get("/images", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Check if there is any missing paramters
                if (!req.query.width || !req.query.height || !req.query.filename) {
                    res.send("Missing Paramter! Enter all the three parameters");
                    return [2 /*return*/];
                }
                if (!(0, validateNumber_1.default)(req.query.width) && !(0, validateNumber_1.default)(req.query.height)) {
                    res.send("Invalid width and height");
                    return [2 /*return*/];
                }
                else if (!(0, validateNumber_1.default)(req.query.width)) {
                    res.send("Invalid width");
                    return [2 /*return*/];
                }
                else if (!(0, validateNumber_1.default)(req.query.height)) {
                    res.send("Invalid height");
                    return [2 /*return*/];
                }
                if (!(0, validateImage_1.default)("full", req.query.filename)) {
                    res.send("Invalid Image try another valid image");
                    return [2 /*return*/];
                }
                if (!!(0, validateImage_1.default)("thumb", "".concat(req.query.filename).concat(req.query.width, "x").concat(req.query.height))) return [3 /*break*/, 2];
                console.log("Generating new");
                return [4 /*yield*/, (0, resize_1.default)(parseInt(req.query.width), parseInt(req.query.height), req.query.filename)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                res.send("<!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>".concat(req.query.filename, "</title>\n    </head>\n    <body>\n    <img src='/assets/thumb/").concat(req.query.filename).concat(req.query.width, "x").concat(req.query.height, ".jpg' alt='img'>\n    </body>\n    </html>"));
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
