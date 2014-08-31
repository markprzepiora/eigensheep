(function() {
  module("R.applyLeft");

  var applyLeft = require('eigensheep/apply_left')['default'];
  var lPartial  = require('eigensheep/l_partial')['default'];

  test("it is just an alias for lPartial", function() {
    equal(applyLeft, lPartial);
  });
})();
