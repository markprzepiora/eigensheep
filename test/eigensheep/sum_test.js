(function() {
  module("R.sum");

  var sum = require('eigensheep/sum')['default'];

  test("sums an array of numbers", function() {
    strictEqual(sum([]), 0);
    strictEqual(sum([1, 2, 3]), 6);
    strictEqual(sum([1, -1]), 0);
  });
})();
