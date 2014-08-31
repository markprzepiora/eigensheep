(function() {
  module("R.max");

  var max = require('eigensheep/max')['default'];

  test("returns the greatest number of an array", function() {
    equal(max([1, 2, 3, 5, 4]), 5);
  });

  test("works with strings that can be cast to numbers", function() {
    equal(max([1, '2', 4, 3, '10', 4]), 10);
    equal(max([1, '2', 4, 3, '3', 4]), 4);
  });

  test("the maximum of an empty array is -Infinity", function() {
    equal(max([]), -Infinity);
  });
})();
