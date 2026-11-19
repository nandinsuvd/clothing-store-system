const test = require("node:test");
const assert = require("node:assert");
const { discountedPrice } = require("./discount");

test("20% хямдрал", () => {
  assert.strictEqual(discountedPrice(100000, 20), 80000);
});

test("буруу хувь алдаа өгнө", () => {
  assert.throws(() => discountedPrice(100000, 120));
});
