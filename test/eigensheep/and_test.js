(function() {
  module("R.and");

  var and = require('eigensheep/and')['default'];

  var gtTen = function(x) { return x > 10; };
  var ltTwenty = function(x) { return x < 20 };
  var even  = function(x) { return x % 2 === 0 };

  test("returns the conjunction of two predicates", function() {
    var evenAndGtTen = and(even, gtTen);

    equal(evenAndGtTen(10), false);
    equal(evenAndGtTen(8), false);
    equal(evenAndGtTen(12), true);
  });

  test("currying", function() {
    var evenAnd = and(even);

    equal(evenAnd(gtTen)(14), true);
    equal(evenAnd(ltTwenty)(14), true);
    equal(evenAnd(ltTwenty)(24), false);
  });
})();
