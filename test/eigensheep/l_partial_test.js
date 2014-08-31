(function() {
  module("R.lPartial");

  var lPartial = require('eigensheep/l_partial')['default'];
  var multiply = function(a, b) { return a * b; };

  test("creates a partially-applied version of an existing function", function() {
    var double = lPartial(multiply, 2);
    equal(double(5), 10);
  });
})();
