"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateNumber = function (dim) {
    var pattern = /^[0-9]$/;
    return pattern.test(dim);
};
exports.default = validateNumber;
