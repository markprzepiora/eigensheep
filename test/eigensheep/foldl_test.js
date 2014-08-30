(function() {
  module("R.foldl");

  var foldl = require('eigensheep/foldl')['default'];
  var add = function(a, b) { return a + b };

  test("summing an array", function() {
    var numbers = [1, 2, 3];

    equal(foldl(add, 0, numbers), 6);
  });

  test("a different accumulator value", function() {
    var numbers = [1, 2, 3];

    equal(foldl(add, 10, numbers), 16);
  });

  test("creating a sum function", function() {
    var numbers = [1, 2, 3];
    var sum = foldl(add, 0);

    equal(sum(numbers), 6);
  });
})();
