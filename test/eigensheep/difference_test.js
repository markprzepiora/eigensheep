(function() {
  module("R.difference");

  var difference = require('eigensheep/difference')['default'];

  test("array difference", function() {
    deepEqual(
      difference([1, 2, 3], [2, 3, 4]),
      [1]
    );
  });

  test("only unique elements are kept", function() {
    deepEqual(
      difference([1, 1, 2, 3], [2, 3, 4]),
      [1]
    );
  });

  test("comparison is strict", function() {
    deepEqual(
      difference([1, '1', 2, 3], ['2', 3, 4]),
      [1, '1', 2]
    );
  });
})();
