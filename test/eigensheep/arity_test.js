(function() {
  module("R.arity");

  var arity = require('eigensheep/arity')['default'];
  var takesTwoArgs = function(a, b) {
    return [a, b];
  };
  var takesOneArg = arity(1, takesTwoArgs);
  var takesThreeArgs = arity(3, takesTwoArgs);

  test("the resulting function has the specified length", function() {
    equal(takesOneArg.length, 1);
    equal(takesThreeArgs.length, 3);
  });

  test("all arguments are passed through to the wrapped function", function() {
    deepEqual(takesOneArg(1, 2), [1, 2]);
    deepEqual(takesThreeArgs(1, 2, 3), [1, 2]);
  });
})();
