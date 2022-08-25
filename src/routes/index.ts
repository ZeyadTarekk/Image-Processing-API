const exp = require("express");
const router = exp.Router();
import resize from "../util/resize";
import validateNumber from "../util/validateNumber";
import validateImage from "../util/validateImage";
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

    if (!validateNumber(req.query.width) && !validateNumber(req.query.height)) {
      res.send("Invalid width and height");
      return;
    } else if (!validateNumber(req.query.width)) {
      res.send("Invalid width");
      return;
    } else if (!validateNumber(req.query.height)) {
      res.send("Invalid height");
      return;
    }

    if (!validateImage("full", req.query.filename)) {
      console.log("Can't find");
      res.send("Invalid Image try another valid image");
      return;
    }

    if (
      !validateImage(
        "thumb",
        `${req.query.filename}${req.query.width}x${req.query.height}`
      )
    ) {
      await resize(
        parseInt(req.query.width),
        parseInt(req.query.height),
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
