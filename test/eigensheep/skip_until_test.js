(function() {
  module("R.skipUntil");

  var skipUntil = require('eigensheep/skip_until')['default'];

  test("slices an array starting at the first element a predicate evalutes to true", function() {
    var isEven = function(n) { return n % 2 === 0 };
    var numbers = [1, 3, 1, 5, 2, 3, 1, 6];

    deepEqual(
      skipUntil(isEven)(numbers),
      [2, 3, 1, 6]
    );
  });
})();
