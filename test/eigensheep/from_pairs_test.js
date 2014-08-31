(function() {
  module("R.fromPairs");

  var fromPairs = require('eigensheep/from_pairs')['default'];

  test("creates an object from an array of pairs", function() {
    deepEqual(
      fromPairs([['one', 1], ['two', 2]]),
      { one: 1, two: 2 }
    );
  });
})();
