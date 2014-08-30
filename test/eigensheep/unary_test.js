(function() {
  module("R.unary");

  var unary        = require('eigensheep/unary')['default'];
  var takesTwoArgs = function(a, b) { return [a, b] };
  var takesOneArg  = unary(takesTwoArgs);

  test("it returns a function that takes one argument", function() {
    equal(takesOneArg.length, 1)
  });

  test("only 1 argument is passed to the wrapped function", function() {
    deepEqual(takesOneArg(1, 2), [1, undefined]);
  });
})();
