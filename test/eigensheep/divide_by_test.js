(function() {
  module("R.divideBy");

  var divideBy = require('eigensheep/divide_by')['default'];

  test("divides two numbers in reverse order", function() {
    equal(divideBy(2, 1), 0.5);
    equal(divideBy(2)(1), 0.5);
  });
})();
