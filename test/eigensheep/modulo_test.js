(function() {
  module("R.modulo");

  var modulo = require('eigensheep/modulo')['default'];

  test("returns the remainder of a number modulo another for positive numbers", function() {
    equal(modulo(7, 2), 1);
    equal(modulo(8, 2), 0);
    equal(modulo(2, 7), 2);
  });

  test("acts incorrectly like % does for negative numbers", function() {
    equal(modulo(-17, 5), -2);
  });
})();
