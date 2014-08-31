(function() {
  module("R.take");

  var take = require('eigensheep/take')['default'];

  test("returns the first n elements of a list", function() {
    // Curried
    deepEqual(
      take(3)([1, 2, 3, 4, 5]),
      [1, 2, 3]
    );

    // Not curried
    deepEqual(
      take(3, [1, 2, 3, 4, 5]),
      [1, 2, 3]
    );
  });

  test("returns the entire list if n is larger than its size", function() {
    deepEqual(
      take(3, [1, 2]),
      [1, 2]
    );
  });
})();
