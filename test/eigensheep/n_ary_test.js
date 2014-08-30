(function() {
  module("R.nAry");

  var nAry = require('eigensheep/n_ary')['default'];
  var takesTwoArgs = function(a, b) {
    return [a, b];
  };
  var takesOneArg = nAry(1, takesTwoArgs);
  var takesThreeArgs = nAry(3, takesTwoArgs);

  test("the resulting function has the specified length", function() {
    equal(takesOneArg.length, 1);
    equal(takesThreeArgs.length, 3);
  });

  test("only the first n arguments are passed through to the resulting function", function() {
    deepEqual(takesOneArg(1, 2), [1, undefined]);
    deepEqual(takesThreeArgs(1, 2, 3), [1, 2]);
  });
})();
