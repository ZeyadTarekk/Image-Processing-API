import * as path from "path";
const main = require("require-main-filename")();
let mainPath: string;
if ((main as string).includes("node_modules"))
  mainPath = path.join(path.dirname(main), "..", "..", "..");
else mainPath = path.join(path.dirname(main), "..");
export default mainPath;
