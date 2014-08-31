(function() {
  module("R.ap");

  var ap = require('eigensheep/ap')['default'];
  var double = function(x) { return x * 2 };
  var addTen = function(x) { return x + 10 };

  test("applies a list of functions to a list of values", function() {
    var list = [1, 2, 3];

    deepEqual(
      ap([double, addTen], list),
      [2, 4, 6, 11, 12, 13]
    );
  });

  test("returns an empty array for an empty list of functions", function() {
    deepEqual(ap([], [1, 2, 3]), []);
  });

  test("returns an empty array for an empty input array", function() {
    deepEqual(ap([double], []), []);
  });
})();
