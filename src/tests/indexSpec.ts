const supertest = require("supertest");
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
  it("Test wrong image name", async (done: DoneFn) => {
    const response = await request.get(
      "/api/images?filename=wrong&width=540&height=600"
    );

    expect(response.body).toBe("Invalid Image try another valid image");
    done();
  });

  it("Test missing paramters", async (done: DoneFn) => {
    const response = await request.get("/api/images?filename=fjord&width=540");

    expect(response.body).toBe(
      "Missing Paramter! Enter all the three parameters"
    );
    done();
  });
});
