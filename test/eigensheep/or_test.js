(function() {
  module("R.or");

  var or = require('eigensheep/or')['default'];

  var gtTen = function(x) { return x > 10; };
  var ltTwenty = function(x) { return x < 20 };
  var even  = function(x) { return x % 2 === 0 };

  test("returns the disjunction of two predicates", function() {
    var evenOrGtTen = or(even, gtTen);

    equal(evenOrGtTen(11), true);
    equal(evenOrGtTen(12), true);
    equal(evenOrGtTen(2), true);
    equal(evenOrGtTen(3), false);
  });

  test("currying", function() {
    var evenOr = or(even);

    equal(evenOr(gtTen)(14), true);
    equal(evenOr(ltTwenty)(14), true);
    equal(evenOr(ltTwenty)(25), false);
  });
})();
