(function() {
  module("R.xprod");

  var xprod = require('eigensheep/xprod')['default'];

  test("computing the cross product of two arrays", function() {
    deepEqual(
      xprod(['a', 'b'], [1, 2]),
      [['a', 1], ['a', 2], ['b', 1], ['b', 2]]
    );

    deepEqual(
      xprod(['a'], [1, 2]),
      [['a', 1], ['a', 2]]
    );
  });

  test("edge cases", function() {
    deepEqual(
      xprod([], []),
      []
    );

    deepEqual(
      xprod([1], []),
      []
    );

    deepEqual(
      xprod([], [1]),
      []
    );
  });
})();
