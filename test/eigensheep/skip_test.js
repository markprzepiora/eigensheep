(function() {
  module("R.skip");

  var skip = require('eigensheep/skip')['default'];

  test("returns all but the first n elements of a list", function() {
    deepEqual(skip(3)([1, 2, 3, 4, 5]), [4, 5]);
    deepEqual(skip(3, [1, 2, 3, 4, 5]), [4, 5]);
    deepEqual(skip(3, [1, 2, 3]), []);
  });

  test("returns an empty array if n is bigger than the size of the list", function() {
    deepEqual(skip(3, [1, 2]), []);
  });
})();
