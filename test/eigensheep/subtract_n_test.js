(function() {
  module("R.subtractN");

  var subtractN = require('eigensheep/subtract_n')['default'];

  test("subtracts two numbers in reverse order", function() {
    equal(subtractN(1, 2), 1);
    equal(subtractN(1)(2), 1);
  });
})();
