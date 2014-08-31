(function() {
  module("R.takeWhile");

  var takeWhile = require('eigensheep/take_while')['default'];

  test("returns the contents of an array while a given predicate matches", function() {
    var lessThanFour = function(x) { return x < 4 };

    // Curried
    deepEqual(
      takeWhile(lessThanFour)([1, 2, 3, 4, 5, 6]),
      [1, 2, 3]
    );

    // Not curried
    deepEqual(
      takeWhile(lessThanFour, [1, 2, 3, 4, 5, 6]),
      [1, 2, 3]
    );
  });
})();
