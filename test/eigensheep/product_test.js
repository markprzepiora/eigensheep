(function() {
  module("R.product");

  var product = require('eigensheep/product')['default'];

  test("multiplies an array of numbers", function() {
    strictEqual(product([]), 1);
    strictEqual(product([2, 2, 3]), 12);
    strictEqual(product([1, -1]), -1);
    strictEqual(product([1, 1, 1, 1, 0]), 0);
  });
})();
