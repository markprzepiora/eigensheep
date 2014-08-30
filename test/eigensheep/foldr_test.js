(function() {
  module("R.foldr");

  var foldr = require('eigensheep/foldr')['default'];
  var add = function(a, b) { return a + b };

  test("summing an array", function() {
    var numbers = [1, 2, 3];

    equal(foldr(add, 0, numbers), 6);
  });

  test("a different accumulator value", function() {
    var numbers = [1, 2, 3];

    equal(foldr(add, 10, numbers), 16);
  });

  test("creating a sum function", function() {
    var numbers = [1, 2, 3];
    var sum = foldr(add, 0);

    equal(sum(numbers), 6);
  });

  test("flattening an array of pairs", function() {
    var pairs = [['a', 1], ['b', 2], ['c', 3]];
    var flattenPairs = function(acc, pair) {
      return acc.concat(pair);
    };

    deepEqual(
      foldr(flattenPairs, [], pairs),
      ['c', 3, 'b', 2, 'a', 1]
    );
  });

  test("folding from right to left", function() {
    var letters = ['h', 'e', 'y', 'a'];
    var concat = function(a, b) { return a + b };
    var reverser = foldr(concat, '');

    equal(reverser(letters), 'ayeh');
  });
})();