const supertest = require("supertest");
import app from "../index";
import resize from "../util/resize";
const request = supertest(app);

describe("Testing Resize function", () => {
  it("Test invalid Image", async () => {
    expect(async function () {
      await resize(200, 200, "sdawd");
    }).toThrowError("Invalid Image");
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
  it("Test wrong image name", async (done: DoneFn) => {
    const response = await request.get(
      "/api/images?filename=wrong&width=540&height=600"
    );

    expect(response.body).toBe("Invalid Image try another valid image");
  });

  it("Test missing paramters", async (done: DoneFn) => {
    const response = await request.get("/api/images?filename=fjord&width=540");

    expect(response.body).toBe(
      "Missing Paramter! Enter all the three parameters"
    );
  });
});
