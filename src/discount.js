function discountedPrice(price, percent) {
  if (price < 0 || percent < 0 || percent > 100) {
    throw new Error("Буруу утга");
  }
  return Math.round(price * (100 - percent)) / 100;
}
module.exports = { discountedPrice };
