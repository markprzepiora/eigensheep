(function() {
  module("R.intersectionWith");

  var intersectionWith = require('eigensheep/intersection_with')['default'];

  var weakEq           = function(x, y) { return x == y };
  var weakIntersection = intersectionWith(weakEq);

  test("intersects two arrays, using a predicate to test for equality", function() {
    deepEqual(
      weakIntersection([1], ['1']),
      [1]
    );

    deepEqual(
      weakIntersection([null], [undefined]),
      [null]
    );

    deepEqual(
      weakIntersection([1, 2, 3], ['2', 3, 4]),
      [2, 3]
    );
  });

  test("removes all duplicates", function() {
    deepEqual(
      weakIntersection([1, 1], [1]),
      [1]
    );
  });
})();
