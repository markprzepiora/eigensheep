(function() {
  module("R.multiply");

  var multiply = require('eigensheep/multiply')['default'];

  test("multiplies two numbers", function() {
    equal(multiply(2, 3), 6);
    equal(multiply(2)(3), 6);
  });
})();
