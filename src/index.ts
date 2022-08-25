const express = require("express");
const path = require("path");
import router from "./routes";
import mainPath from "../util/path";
const port = 3000;
const app = express();

if (mainPath.endsWith("build"))
  app.use("/assets", express.static(path.join(mainPath, "..", "assets")));
else app.use("/assets", express.static(path.join(mainPath, "assets")));
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});

export default app;
