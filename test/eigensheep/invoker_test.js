(function() {
  module("R.invoker");

  var invoker = require('eigensheep/invoker')['default'];

  test("functions that take an argument", function() {
    var charAt = invoker('charAt', String.prototype);
    equal(charAt(6, 'abcdefghijklm'), 'g');
  });

  test("functions that take no arguments", function() {
    var toUpperCase = invoker('toUpperCase', String.prototype);
    equal(toUpperCase('foobarbaz'), 'FOOBARBAZ');
  });

  test("functions that take variable arguments", function() {
    var reduce = invoker('reduce', Array.prototype);
    var add = function(a, b) { return a + b };

    equal(reduce.length, 2);
    equal(reduce(add, 0, [1, 2, 3]), 6);
    equal(reduce(add, [1, 2, 3]), 6);
    equal(reduce(add, 10, [1, 2, 3]), 16);
  });

  test("explicitly specifying a length", function() {
    var reduce = invoker('reduce', Array.prototype, 2);
    var add = function(a, b) { return a + b };

    equal(reduce.length, 3);
    equal(reduce(add, 0, [1,2,3]), 6);
    equal(reduce(add, 10, [1,2,3]), 16);

    // No longer works correctly without explicitly specifying the arguments.
    notEqual(reduce(add, [1,2,3]), 6);
  });
})();
