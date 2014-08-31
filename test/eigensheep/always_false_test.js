(function() {
  module("R.alwaysFalse");

  var alwaysFalse = require('eigensheep/always_false')['default'];

  test("returns false", function() {
    strictEqual(alwaysFalse(), false);
  });
})();
