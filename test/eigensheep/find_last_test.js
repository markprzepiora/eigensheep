(function() {
  module("R.findLast");

  var findLast = require('eigensheep/find_last')['default'];
  var isEven = function(n) { return n % 2 === 0 };

  test("returns the last element matching a predicate", function() {
    var findLastEven = findLast(isEven);

    equal(
      findLastEven([1, 2, 3, 4]),
      4
    );

    equal(
      findLastEven([4, 2, 0, 10, 7, 3, 5]),
      10
    );
  });

  test("returns undefined if there is no match", function() {
    var findLastEven = findLast(isEven);

    equal(
      typeof findLastEven([3, 1]),
      'undefined'
    );
  });

  test("works when the first element matches", function() {
    var findLastEven = findLast(isEven);

    equal(
      findLastEven([2, 3, 5]),
      2
    );
  });

  test("works when the last element matches", function() {
    var findLastEven = findLast(isEven);

    equal(
      findLastEven([3, 5, 2]),
      2
    );
  });

  test("doesn't go into an infinite loop on an empty array", function() {
    var findLastEven = findLast(isEven);

    equal(
      findLastEven([]),
      undefined
    );
  });
})();
