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
})();
