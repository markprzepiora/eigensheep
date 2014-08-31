(function() {
  module("R.partition");

  var partition = require('eigensheep/partition')['default'];

  test("splits an array into those elements that match a predicate and those that don't", function() {
    var isEven = function(n) { return n % 2 === 0 };

    deepEqual(
      partition(isEven, [1, 2, 3, 4]),
      [[2, 4], [1, 3]]
    );

    deepEqual(
      partition(isEven)([1, 2, 3, 4]),
      [[2, 4], [1, 3]]
    );
  });
})();
