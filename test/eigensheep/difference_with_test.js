(function() {
  module("R.differenceWith");

  var differenceWith = require('eigensheep/difference_with')['default'];

  test("computes the set difference between two lists using a custom equality predicate", function() {
    var weakEq = function(x, y) { return x == y };
    var weakDifference = differenceWith(weakEq);

    deepEqual(
      weakDifference([1, 2, 3], ['1', '2', 4]),
      [3]
    );
  });
})();
