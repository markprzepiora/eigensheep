(function() {
  module("R.binary");

  var binary         = require('eigensheep/binary')['default'];
  var takesThreeArgs = function(a, b, c) { return [a, b, c] };
  var takesOneArg    = binary(takesThreeArgs);

  test("it returns a function that takes two arguments", function() {
    equal(takesOneArg.length, 2)
  });

  test("only 2 arguments are passed to the wrapped function", function() {
    deepEqual(takesOneArg(1, 2, 3), [1, 2, undefined]);
  });
})();
