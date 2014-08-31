(function() {
  module("R.divide");

  var divide = require('eigensheep/divide')['default'];

  test("divides two numbers", function() {
    equal(divide(1, 2), 0.5);
    equal(divide(1)(2), 0.5);
  });
})();
