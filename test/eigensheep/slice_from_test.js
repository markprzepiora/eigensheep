(function() {
  module("R.slice.from");

  var slice = require('eigensheep/slice')['default'];

  test("returns a slice of an array starting at an index", function() {
    deepEqual(
      slice.from(0, [1, 2, 3, 4]),
      [1, 2, 3, 4]
    );

    var allButFirst = slice.from(1);
    deepEqual(
      allButFirst([1, 2, 3, 4]),
      [2, 3, 4]
    );
  });
})();
