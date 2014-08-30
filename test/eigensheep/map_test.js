(function() {
  module("R.map");

  var map = require('eigensheep/map')['default'];
  var double = function(x) { return x * 2 };

  test("on empty arrays", function() {
    deepEqual(map(double, []), []);
  });

  test("on nonempty arrays", function() {
    deepEqual(map(double, [1, 2, 3]), [2, 4, 6]);
  });
})();
