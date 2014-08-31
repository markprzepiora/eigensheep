(function() {
  module("R.anyPredicates");

  var anyPredicates = require('eigensheep/any_predicates')['default'];

  var fizz = function(x) { return x % 3 === 0 };
  var buzz = function(x) { return x % 5 === 0 };

  test("returns the greatest number of an array", function() {
    var fizzBuzz = anyPredicates([fizz, buzz]);

    equal(fizzBuzz(0), true);
    equal(fizzBuzz(1), false);
    equal(fizzBuzz(2), false);
    equal(fizzBuzz(3), true);
    equal(fizzBuzz(4), false);
    equal(fizzBuzz(5), true);
    equal(fizzBuzz(6), true);
    equal(fizzBuzz(7), false);
  });
})();
