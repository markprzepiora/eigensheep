(function() {
  module("R.alwaysTrue");

  var alwaysTrue = require('eigensheep/always_true')['default'];

  test("returns true", function() {
    strictEqual(alwaysTrue(), true);
  });
})();
