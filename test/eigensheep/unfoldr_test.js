(function() {
  module("R.unfoldr");

  var unfoldr = require('eigensheep/unfoldr')['default'];

  test("generating an array of values", function() {
    var f = function(n) { return n > 50 ? false : [-n, n + 10] };
    deepEqual(
      unfoldr(f, 10),
      [-10, -20, -30, -40, -50]
    );
  });

  test("currying", function() {
    var f = function(n) { return n > 50 ? false : [-n, n + 10] };
    var unfolder = unfoldr(f);

    deepEqual(
      unfolder(20),
      [-20, -30, -40, -50]
    );
  });
})();
