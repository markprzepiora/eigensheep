(function() {
  module("R.comparator");

  var comparator = require('eigensheep/comparator')['default'];

  test("creates a comparator out of a predicate", function() {
    var lt  = function(a, b) { return a < b };
    var asc = comparator(lt);

    equal(asc(1, 5), -1);
    equal(asc(5, 5), 0);
    equal(asc(10, 5), 1);
  });
})();
