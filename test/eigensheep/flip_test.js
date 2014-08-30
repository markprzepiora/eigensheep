(function() {
  module("R.flip");

  var flip = require('eigensheep/flip')['default'];

  test("flipping the first two arguments of a function", function() {
    var mergeThree = function(a, b, c) {
      return [a, b, c];
    };
    var numbers = [1, 2, 3];

    deepEqual(
      flip(mergeThree)(1, 2, 3),
      [2, 1, 3]
    );
  });
})();
