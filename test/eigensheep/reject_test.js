(function() {
  module("R.reject");

  var reject = require('eigensheep/reject')['default'];
  var isOdd = function(x) { return x % 2 === 1 };

  test("filtering an array", function() {
    deepEqual(
      reject(isOdd, [1, 2, 3, 4]),
      [2, 4]
    );
  });

  test("currying", function() {
    var rejectOdds = reject(isOdd);

    deepEqual(
      rejectOdds([1, 2, 3, 4]),
      [2, 4]
    );
  });
})();
