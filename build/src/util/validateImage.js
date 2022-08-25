"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("../../util/path");
var path = require("path");
var fs = require("fs");
var validateImage = function (folder, imagePath) {
    if (path_1.default.endsWith("build")) {
        // Check if the entered image doesn't exist
        if (!fs.existsSync(path.join(path_1.default, "..", "assets", folder, "".concat(imagePath, ".jpg"))))
            return false;
        else
            return true;
    }
    else {
        // Check if the entered image doesn't exist
        if (!fs.existsSync(path.join(path_1.default, "assets", folder, "".concat(imagePath, ".jpg"))))
            return false;
        else
            return true;
    }
};
exports.default = validateImage;
