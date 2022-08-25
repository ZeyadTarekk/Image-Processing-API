const exp = require("express");
const router = exp.Router();
const path = require("path");
import resize from "../util/resize";
import mainPath from "../../util/path";
const fs = require("fs");
router.get("/images", async (req, res, next) => {
  if (
    !fs.existsSync(
      path.join(mainPath, "assets", "full", `${req.query.filename}.jpg`)
    )
  ) {
    res.send("Invalid Image try another valid image");
    return;
  }

  await resize(
    Number(req.query.width),
    Number(req.query.height),
    req.query.filename
  );
  res.send(
    `<img src='/assets/thumb/${req.query.filename}${req.query.width}x${req.query.height}.jpg' alt='img'>`
  );
});

export default router;
