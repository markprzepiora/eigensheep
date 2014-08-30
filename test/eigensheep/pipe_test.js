(function() {
  module("R.pipe");

  var pipe = require('eigensheep/pipe')['default'];
  var triple = function(x) { return x * 3; };
  var double = function(x) { return x * 2; };
  var square = function(x) { return x * x; };

  test("piping multiple functions", function() {
    var tripleThenDoubleThenSquare = pipe(triple, double, square);
    equal(tripleThenDoubleThenSquare(5), 900);
  });

  test("piping a single function", function() {
    var justSquare = pipe(square);
    equal(justSquare(5), 25);
  });
})();
