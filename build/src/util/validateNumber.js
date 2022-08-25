"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateNumber = function (dim) {
    return /^\d*$/.test(dim);
};
exports.default = validateNumber;
