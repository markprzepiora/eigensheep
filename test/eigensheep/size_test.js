(function() {
  module("R.size");

  var size = require('eigensheep/size')['default'];

  test("returns the length of an array", function() {
    deepEqual(size([]), 0);
    deepEqual(size([1, 2, 3]), 3);
  });

  test("returns the length of a string", function() {
    deepEqual(size('test'), 4);
    deepEqual(size(''), 0);
  });
})();
