(function() {
  module("R.gte");

  var gte = require('eigensheep/gte')['default'];

  test("returns whether a >= b", function() {
    strictEqual(gte(2, 1), true);
    strictEqual(gte(2)(1), true);
    strictEqual(gte(2, 2), true);
    strictEqual(gte(2, 3), false);
  });
})();
