import * as path from "path";
const main = require("require-main-filename")();
const mainPath = path.join(path.dirname(main), "..");
export default mainPath;
