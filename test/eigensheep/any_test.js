(function() {
  module("R.any");

  var any = require('eigensheep/any')['default'];

  var isEven = function(x) { return x % 2 === 0 };

  test("returns true if at any element of the array matches a predicates", function() {
    equal(any(isEven, [1, 3, 5]), false);
    equal(any(isEven, [1, 3, 2, 5]), true);
    equal(any(isEven, []), false);
  });

  test("nothing satisfies an empty array", function() {
    equal(any(isEven, []), false);
  });

  test("currying", function() {
    equal(any(isEven)([1, 3, 5]), false);
    equal(any(isEven)([1, 3, 6]), true);
  });
})();
