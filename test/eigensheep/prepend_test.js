(function() {
  module("R.prepend");

  var prepend = require('eigensheep/prepend')['default'];

  test("it prepends an element to a list", function() {
    deepEqual(
      prepend(0, [1, 2, 3]),
      [0, 1, 2, 3]
    );
  });
})();
