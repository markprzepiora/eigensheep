(function() {
  module("R.fork");

  var fork = require('eigensheep/fork')['default'];

  // var h = fork(e, f, g);
  // h(1, 2); //≅ e( f(1, 2), g(1, 2) )
  test("takes three functions, executes the first with the results of the second and third", function() {
    var add = function(a, b) { return a + b; };
    var multiply = function(a, b) { return a * b; };
    var subtract = function(a, b) { return a - b; };

    equal(
      //≅ multiply( add(1, 2), subtract(1, 2) )
      fork(multiply, add, subtract)(1, 2),
      -3
    );
  });
})();
