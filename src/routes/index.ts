const exp = require("express");
const router = exp.Router();
import resize from "../util/resize";
import mainPath from "../../util/path";
router.get("/images", (req, res, next) => {
  console.log(mainPath);
  console.log(req.query.filename);
  console.log(req.query.width);
  console.log(req.query.height);
  resize(Number(req.query.width), Number(req.query.height), req.query.filename);
  res.send(
    `converting ${req.query.filename} with width ${req.query.width} and height ${req.query.height}`
  );
});

export default router;
