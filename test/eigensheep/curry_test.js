(function() {
  module("R.curry");

  var curry = require('eigensheep/curry')['default'];
  var adder = function(a, b, c, d) {
    return a + b + c + d;
  };
  var curriedAdder = curry(adder);

  test("the function can be invoked as normal", function() {
    equal(curriedAdder(1, 2, 3, 4), 10);
  });

  test("the function can be invoked in parts", function() {
    equal(curriedAdder(1)(2, 3, 4), 10);
    equal(curriedAdder(1, 2, 3)(4), 10);
  });

  test("additional arguments don't hurt", function() {
    equal(curriedAdder(1, 2, 3, 4, 5), 10);
    equal(curriedAdder(1, 2, 3)(4, 5), 10);
  });

  test("an arity can be explicitly specified", function() {
    var unsplat = function(a, b, c) {
      return [a, b, c];
    };
    var unsplat2 = curry(unsplat, 2);

    deepEqual(unsplat2(1, 2), [1, 2, undefined]);
    deepEqual(unsplat2(1)(2), [1, 2, undefined]);

  });

  test("extra arguments are still passed through when an arity is specified", function() {
    var unsplat = function(a, b, c) {
      return [a, b, c];
    };
    var unsplat2 = curry(unsplat, 2);

    deepEqual(unsplat2(1, 2, 3), [1, 2, 3]);
  });
})();
