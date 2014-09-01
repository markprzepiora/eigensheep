(function() {
  module("R.unionWith");

  var unionWith = require('eigensheep/union_with')['default'];

  test("unions two lists using a custom equality predicate", function() {
    var weakEq = function(x, y) { return x == y };
    var weakUnion = unionWith(weakEq);

    deepEqual(
      weakUnion([1, 2, 3], ['1', '2', 3]),
      [1, 2, 3]
    );
  });
})();
