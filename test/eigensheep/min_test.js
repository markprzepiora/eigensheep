(function() {
  module("R.min");

  var min = require('eigensheep/min')['default'];

  test("finds the smallest element of an array", function() {
    strictEqual(
      min([5, 2, 1, 10]),
      1
    );

    strictEqual(
      min([5, 2, '1', 10]),
      1
    );
  });

  test("the minimum of an empty array is Infinity", function() {
    strictEqual(min([]), Infinity);
  });
})();
