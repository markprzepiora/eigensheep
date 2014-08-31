(function() {
  module("R.sort");

  var sort = require('eigensheep/sort')['default'];

  test("has a default comparator", function() {
    deepEqual(
      sort(null, [1, 3, 2]),
      [1, 2, 3]
    );
  });

  test("sorts an array of numbers by a comparator", function() {
    var difference = function(a, b) { return a - b };

    deepEqual(
      sort(difference, [1, 3, 2]),
      [1, 2, 3]
    );
  });

  test("can be curried", function() {
    var difference        = function(a, b) { return a - b };
    var flippedDifference = function(a, b) { return b - a };
    var ascendingSort     = sort(difference);
    var descendingSort    = sort(flippedDifference);

    deepEqual(
      ascendingSort([1, 3, 2]),
      [1, 2, 3]
    );

    deepEqual(
      descendingSort([1, 3, 2]),
      [3, 2, 1]
    );
  });
})();
