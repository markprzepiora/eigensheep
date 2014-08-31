(function() {
  module("R.memoize");

  var memoize = require('eigensheep/memoize')['default'];

  test("creates a memoized function", function() {
    var numberOfCalls = 0;
    var trackedAdd = function(a, b) {
      numberOfCalls += 1;
      return a + b;
    };

    var memoAdd = memoize(trackedAdd);

    equal(memoAdd(1, 2), 3);
    equal(numberOfCalls, 1);

    equal(memoAdd(1, 2), 3);
    equal(numberOfCalls, 1);

    equal(memoAdd(2, 3), 5);
    equal(numberOfCalls, 2);

    equal(memoAdd(3, 2), 5);
    equal(numberOfCalls, 3);
  });
})();
