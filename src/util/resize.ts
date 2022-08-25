const sharp = require("sharp");
const path = require("path");
import mainPath from "../../util/path";
const resize = async (width: Number, height: Number, filename: String) => {
  try {
    if (mainPath.endsWith("build")) {
      return await sharp(
        path.join(mainPath, "..", "assets", "full", `${filename}.jpg`)
      )
        .resize(width, height)
        .toFile(
          path.join(
            mainPath,
            "..",
            "assets",
            "thumb",
            `${filename}${width}x${height}.jpg`
          ),
          (err: Error, info: unknown) => {
            if (err) {
              throw new Error("Invalid Image");
            }
          }
        );
    } else {
      return await sharp(
        path.join(mainPath, "assets", "full", `${filename}.jpg`)
      )
        .resize(width, height)
        .toFile(
          path.join(
            mainPath,
            "assets",
            "thumb",
            `${filename}${width}x${height}.jpg`
          )
        );
    }
  } catch (err) {
    console.log("Throwing error");
    throw new Error("Invalid Image");
  }
};

export default resize;
