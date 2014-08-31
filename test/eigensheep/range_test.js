(function() {
  module("R.range");

  var range = require('eigensheep/range')['default'];

  test("returns a range of numbers a...b", function() {
    deepEqual(range(1, 5), [1, 2, 3, 4]);
    deepEqual(range(1, 1), []);
    deepEqual(range(1, 0), []);
    deepEqual(range(1.5, 3), [1.5, 2.5]);
  });
})();
