const supertest = require("supertest");
import app from "../index";
import resize from "../util/resize";
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
});
