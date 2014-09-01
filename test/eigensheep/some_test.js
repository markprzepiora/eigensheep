(function() {
  module("R.some");

  var some = require('eigensheep/some')['default'];

  var isEven = function(x) { return x % 2 === 0 };

  test("returns true if any element of the array matches a predicates", function() {
    equal(some(isEven, [1, 3, 5]), false);
    equal(some(isEven, [1, 3, 2, 5]), true);
    equal(some(isEven, []), false);
  });

  test("nothing satisfies an empty array", function() {
    equal(some(isEven, []), false);
  });

  test("currying", function() {
    equal(some(isEven)([1, 3, 5]), false);
    equal(some(isEven)([1, 3, 6]), true);
  });
})();
