"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var routes_1 = require("./routes");
var path_1 = require("../util/path");
var port = 3000;
var app = express();
if (path_1.default.endsWith("build"))
    app.use("/assets", express.static(path.join(path_1.default, "..", "assets")));
else
    app.use("/assets", express.static(path.join(path_1.default, "assets")));
app.use("/api", routes_1.default);
app.listen(port, function () {
    console.log("Server started at localhost:".concat(port));
});
exports.default = app;
