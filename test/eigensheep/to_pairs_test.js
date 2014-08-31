(function() {
  module("R.toPairs");

  var toPairs = require('eigensheep/to_pairs')['default'];

  test("does what it's supposed to", function() {
    deepEqual(
      toPairs({ one: 1, two: 2 }),
      [['one', 1], ['two', 2]]
    );
  });
})();
