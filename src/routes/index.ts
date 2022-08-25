const exp = require("express");
const router = exp.Router();
const path = require("path");
import resize from "../util/resize";
import mainPath from "../../util/path";
const fs = require("fs");
router.get(
  "/images",
  async (
    req: Express.Request,
    res: Express.Response,
    next: Function
  ): Promise<void> => {
    // Check if there is any missing paramters
    if (!req.query.width || !req.query.height || !req.query.filename) {
      res.send("Missing Paramter! Enter all the three parameters");
      return;
    }

    if (
      isNaN(parseInt(req.query.width as string)) &&
      isNaN(parseInt(req.query.height))
    ) {
      res.send("Invalid width and height");
      return;
    } else if (isNaN(parseInt(req.query.width))) {
      res.send("Invalid width");
      return;
    } else if (isNaN(parseInt(req.query.height))) {
      res.send("Invalid height");
      return;
    }

    // Check if the build version is running
    if (mainPath.endsWith("build")) {
      // Check if the entered image doesn't exist
      if (
        !fs.existsSync(
          path.join(
            mainPath,
            "..",
            "assets",
            "full",
            `${req.query.filename}.jpg`
          )
        )
      ) {
        res.send("Invalid Image try another valid image");
        return;
      }
    } else {
      // Check if the entered image doesn't exist
      if (
        !fs.existsSync(
          path.join(mainPath, "assets", "full", `${req.query.filename}.jpg`)
        )
      ) {
        res.send("Invalid Image try another valid image");
        return;
      }
    }

    if (mainPath.endsWith("build")) {
      // Check if the image isn't generated before so generate it
      if (
        !fs.existsSync(
          path.join(
            mainPath,
            "..",
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
    } else {
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
    }

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
  }
);

export default router;
