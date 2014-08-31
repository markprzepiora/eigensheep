(function() {
  module("R.findLastIndex");

  var findLastIndex = require('eigensheep/find_last_index')['default'];
  var isEven = function(n) { return n % 2 === 0 };

  test("returns the index of the last match of a predicate in an array", function() {
    var findLastEvenIndex = findLastIndex(isEven);

    equal(
      findLastEvenIndex([1, 2, 3, 4]),
      3
    );

    equal(
      findLastEvenIndex([4, 2, 0, 10, 8, 3, 5]),
      4
    );
  });

  test("returns -1 if there is no match", function() {
    var findLastEvenIndex = findLastIndex(isEven);

    equal(
      findLastEvenIndex([3, 1]),
      -1
    );
  });

  test("works when the first element matches", function() {
    var findLastEvenIndex = findLastIndex(isEven);

    equal(
      findLastEvenIndex([2, 3, 5]),
      0
    );
  });

  test("works when the last element matches", function() {
    var findLastEvenIndex = findLastIndex(isEven);

    equal(
      findLastEvenIndex([3, 5, 2]),
      2
    );
  });

  test("doesn't go into an infinite loop on an empty array", function() {
    var findLastEvenIndex = findLastIndex(isEven);

    equal(
      findLastEvenIndex([]),
      -1
    );
  });
})();
