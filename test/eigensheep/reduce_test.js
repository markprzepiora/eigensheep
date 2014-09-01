(function() {
  module("R.reduce");

  var reduce = require('eigensheep/reduce')['default'];
  var foldl = require('eigensheep/reduce')['default'];
  var add = function(a, b) { return a + b };

  test("summing an array", function() {
    var numbers = [1, 2, 3];

    equal(reduce(add, 0, numbers), 6);
  });

  test("a different accumulator value", function() {
    var numbers = [1, 2, 3];

    equal(reduce(add, 10, numbers), 16);
  });

  test("creating a sum function", function() {
    var numbers = [1, 2, 3];
    var sum = reduce(add, 0);

    equal(sum(numbers), 6);
  });

  test("folding from left to right", function() {
    var letters = ['h', 'e', 'y', 'a'];
    var concat = function(a, b) { return a + b };
    var stringifier = reduce(concat, '');

    equal(stringifier(letters), 'heya');
  });

  test("has an alias as foldl", function() {
    strictEqual(foldl, reduce);
  });
})();
