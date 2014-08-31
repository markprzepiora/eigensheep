(function() {
  module("R.all");

  var all = require('eigensheep/all')['default'];
  var isEven = function(x) { return x % 2 === 0 };

  test("returns true if all elements of an array match a predicate", function() {
    var allEven = all(isEven);
    equal(allEven([]), true, "an empty array should match everything vacuously");
    equal(allEven([1, 2, 3]), false);
    equal(allEven([2, 4, 2]), true);
  });
})();
