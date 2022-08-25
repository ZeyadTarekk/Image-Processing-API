const exp = require("express");
const router = exp.Router();

router.get("/images", (req, res, next) => {
  console.log(req.query.filename);
  console.log(req.query.width);
  console.log(req.query.height);
  res.send(
    `converting ${req.query.filename} with width ${req.query.width} and height ${req.query.height}`
  );
});

export default router;
