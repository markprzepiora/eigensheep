(function() {
  module("R.compose");

  var compose = require('eigensheep/compose')['default'];
  var triple = function(x) { return x * 3; };
  var double = function(x) { return x * 2; };
  var square = function(x) { return x * x; };

  test("composing multiple functions", function() {
    var squareThenDoubleThenTriple = compose(triple, double, square);
    equal(squareThenDoubleThenTriple(5), 150);
  });

  test("composing a single function", function() {
    var justSquare = compose(square);
    equal(justSquare(5), 25);
  });
})();
