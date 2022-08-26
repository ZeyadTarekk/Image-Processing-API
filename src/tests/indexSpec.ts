const supertest = require("supertest");
import path = require("path");
import mainPath from "../../util/path";
import app from "../index";
import resize from "../util/resize";
const fs = require("fs");
import validateImage from "../util/validateImage";
import validateNumber from "../util/validateNumber";
const request = supertest(app);

describe("Testing image validation function", () => {
  it("testing invalid image", () => {
    expect(validateImage("full", "wrongImage")).toBe(false);
  });
  it("testing invalid image 2", () => {
    expect(validateImage("thumb", "wrongImage")).toBe(false);
  });
});

describe("Testing number validation function", () => {
  it("testing invalid number", () => {
    expect(validateNumber("a")).toBe(false);
  });
  it("testing invalid number 2", () => {
    expect(validateNumber("500f")).toBe(false);
  });
  it("testing valid number", () => {
    expect(validateNumber("500")).toBe(true);
  });
  it("testing valid number 2", () => {
    expect(validateNumber("230")).toBe(true);
  });
});

describe("Test endpoint responses", () => {
  it("Test get / page", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(404);
  });
  it("Test get /api page", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(404);
  });

  it("Test resize fjord with existing size", async () => {
    if (validateImage("thumb", "fjord300x600"))
      fs.unlinkSync(path.join(mainPath, "assets", "thumb", "fjord300x600.jpg"));
    await request.get("/api/images?filename=fjord&width=300&height=600");
    expect(validateImage("thumb", "fjord300x600")).toBe(true);
  });
  it("Test resize fjord with new size", async () => {
    if (validateImage("thumb", "fjord600x600"))
      fs.unlinkSync(path.join(mainPath, "assets", "thumb", "fjord600x600.jpg"));
    await request.get("/api/images?filename=fjord&width=600&height=600");
    expect(validateImage("thumb", "fjord600x600")).toBe(true);
    fs.unlinkSync(path.join(mainPath, "assets", "thumb", "fjord600x600.jpg"));
  });
  it("Test resize fjord with missing parameters", async () => {
    if (validateImage("thumb", "fjord600x625"))
      fs.unlinkSync(path.join(mainPath, "assets", "thumb", "fjord600x600.jpg"));
    await request.get("/api/images?filename=fjord&width=600");
    expect(validateImage("thumb", "fjord600x625")).toBe(false);
  });
});

describe("Test Resize Function", () => {
  it("Test resize fjord with resize function", async () => {
    if (validateImage("thumb", "fjord950x950"))
      fs.unlinkSync(path.join(mainPath, "assets", "thumb", "fjord950x950.jpg"));
    await resize(950, 950, "fjord");
    expect(validateImage("thumb", "fjord950x950")).toBe(true);
    fs.unlinkSync(path.join(mainPath, "assets", "thumb", "fjord950x950.jpg"));
  });

  it("Test resize fjord with resize function new size", async () => {
    if (validateImage("thumb", "fjord666x666"))
      fs.unlinkSync(path.join(mainPath, "assets", "thumb", "fjord666x666.jpg"));
    await resize(666, 666, "fjord");
    expect(validateImage("thumb", "fjord666x666")).toBe(true);
    fs.unlinkSync(path.join(mainPath, "assets", "thumb", "fjord666x666.jpg"));
  });
});
