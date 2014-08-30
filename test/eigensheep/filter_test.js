(function() {
  module("R.filter");

  var filter = require('eigensheep/filter')['default'];
  var isEven = function(n) { return n % 2 === 0 };

  test("filtering an array", function() {
    deepEqual(
      filter(isEven, [1, 2, 3, 4]),
      [2, 4]
    );
  });

  test("currying", function() {
    var filterEvens = filter(isEven);

    deepEqual(
      filterEvens([1, 2, 3, 4]),
      [2, 4]
    );
  });
})();
