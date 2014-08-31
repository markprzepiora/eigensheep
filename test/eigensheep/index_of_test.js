(function() {
  module("R.indexOf");

  var indexOf = require('eigensheep/index_of')['default'];

  test("returns the index of the first spot the given element appears in an array", function() {
    equal(indexOf(3)([1, 2, 3, 4]), 2);
    equal(indexOf(3, [1, 2, 3, 4]), 2);
  });

  test("returns -1 if the element does not exist", function() {
    equal(indexOf(10, [1, 2, 3, 4]), -1);
  });

  test("uses strict equality to find matches", function() {
    equal(indexOf('2', [1, 2, 3, 4]), -1);
    equal(indexOf({}, [1, {}, 3, 4]), -1);
  });
})();
