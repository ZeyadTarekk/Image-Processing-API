const exp = require("express");
const router = exp.Router();
const path = require("path");
import resize from "../util/resize";
import mainPath from "../../util/path";
const fs = require("fs");
router.get("/images", async (req, res, next: Function) => {
  // Check if there is any missing paramters
  if (!req.query.width || !req.query.height || !req.query.filename) {
    res.send("Missing Paramter! Enter all the three parameters");
    return;
  }

  // Check if the entered image doesn't exist
  if (
    !fs.existsSync(
      path.join(mainPath, "assets", "full", `${req.query.filename}.jpg`)
    )
  ) {
    res.send("Invalid Image try another valid image");
    return;
  }

  // Check if the image isn't generated before so generate it
  if (
    !fs.existsSync(
      path.join(
        mainPath,
        "assets",
        "thumb",
        `${req.query.filename}${req.query.width}x${req.query.height}.jpg`
      )
    )
  )
    await resize(
      Number(req.query.width),
      Number(req.query.height),
      req.query.filename
    );

  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${req.query.filename}</title>
    </head>
    <body>
    <img src='/assets/thumb/${req.query.filename}${req.query.width}x${req.query.height}.jpg' alt='img'>
    </body>
    </html>`
  );
});

export default router;
