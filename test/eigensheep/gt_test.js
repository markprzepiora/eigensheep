(function() {
  module("R.gt");

  var gt = require('eigensheep/gt')['default'];

  test("returns whether a > b", function() {
    strictEqual(gt(2, 1), true);
    strictEqual(gt(2)(1), true);
    strictEqual(gt(2, 2), false);
    strictEqual(gt(2, 3), false);
  });
})();
