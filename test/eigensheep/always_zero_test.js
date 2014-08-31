(function() {
  module("R.alwaysZero");

  var alwaysZero = require('eigensheep/always_zero')['default'];

  test("returns 0", function() {
    strictEqual(alwaysZero(), 0);
  });
})();
