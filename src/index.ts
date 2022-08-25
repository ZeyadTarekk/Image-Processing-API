const express = require("express");
const path = require("path");
import router from "./routes";
import mainPath from "../util/path";
const port = 3000;
const app = express();
console.log(path.join(mainPath, "assets"));
app.use("/assets", express.static(path.join(__dirname, "..", "assets")));
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});
