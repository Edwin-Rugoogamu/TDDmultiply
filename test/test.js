const assert = require("assert");
const factorial = require("./factorial");

describe("factorial", () => {
  it("factorial(6)=720", () => {
    assert.equal(factorial(6), 720);
  });
});
