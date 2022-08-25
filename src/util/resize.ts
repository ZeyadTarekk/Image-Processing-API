const sharp = require("sharp");
const path = require("path");
import mainPath from "../../util/path";
const resize = (width: Number, height: Number, filename: String) => {
  try {
    sharp(path.join(mainPath, "assets", "full", `${filename}.jpg`))
      .resize(width, height)
      .toFile(
        path.join(
          mainPath,
          "assets",
          "thumb",
          `${filename}${width}x${height}.jpg`
        ),
        (err, info) => {
          // console.log(err);
          // console.log(info);
        }
      );
  } catch (err) {
    console.log(err);
  }
};

export default resize;
