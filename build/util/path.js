"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var main = require("require-main-filename")();
var mainPath = path.join(path.dirname(main), "..");
exports.default = mainPath;
