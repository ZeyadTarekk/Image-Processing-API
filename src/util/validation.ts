import mainPath from "../../util/path";
const path = require("path");
const fs = require("fs");
const validateNumber = (dim: string): boolean => {
  return /^\d*$/.test(dim);
};

export default validateNumber;
