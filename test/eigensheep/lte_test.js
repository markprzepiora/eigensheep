(function() {
  module("R.lte");

  var lte = require('eigensheep/lte')['default'];

  test("returns whether a <= b", function() {
    strictEqual(lte(1, 2), true);
    strictEqual(lte(1)(2), true);
    strictEqual(lte(2)(2), true);
    strictEqual(lte(3)(2), false);
  });
})();
