(function() {
  module("R.allPredicates");

  var allPredicates = require('eigensheep/all_predicates')['default'];

  var gtTen    = function(x) { return x > 10; };
  var ltTwenty = function(x) { return x < 20 };
  var even     = function(x) { return x % 2 === 0 };

  test("returns the greatest number of an array", function() {
    var evenAndInBetweenTenAndTwenty = allPredicates([even, gtTen, ltTwenty]);

    equal(evenAndInBetweenTenAndTwenty(10), false);
    equal(evenAndInBetweenTenAndTwenty(11), false);
    equal(evenAndInBetweenTenAndTwenty(12), true);
    equal(evenAndInBetweenTenAndTwenty(18), true);
    equal(evenAndInBetweenTenAndTwenty(19), false);
    equal(evenAndInBetweenTenAndTwenty(20), false);
  });
})();
