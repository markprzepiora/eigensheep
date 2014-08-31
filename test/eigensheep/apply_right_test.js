(function() {
  module("R.applyRight");

  var applyRight = require('eigensheep/apply_right')['default'];
  var rPartial   = require('eigensheep/r_partial')['default'];

  test("it is just an alias for rPartial", function() {
    equal(applyRight, rPartial);
  });
})();
