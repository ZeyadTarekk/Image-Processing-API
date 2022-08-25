import mainPath from "../../util/path";
const path = require("path");
const fs = require("fs");
const validateImage = (folder: string, imagePath: string): boolean => {
  if (mainPath.endsWith("build")) {
    // Check if the entered image doesn't exist
    if (
      !fs.existsSync(
        path.join(mainPath, "..", "assets", folder, `${imagePath}.jpg`)
      )
    )
      return false;
    else return true;
  } else {
    // Check if the entered image doesn't exist
    if (
      !fs.existsSync(path.join(mainPath, "assets", folder, `${imagePath}.jpg`))
    ) 
      return false;
     else 
      return true;
    
  }
};

export default validateImage;
