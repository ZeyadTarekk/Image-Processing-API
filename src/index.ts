const express = require("express");

import router from "./routes";

const port = 3000;
const app = express();

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});
