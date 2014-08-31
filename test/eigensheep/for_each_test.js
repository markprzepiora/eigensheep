(function() {
  module("R.forEach");

  var forEach = require('eigensheep/for_each')['default'];
  var each    = require('eigensheep/each')['default'];

  test("it is just an alias for each", function() {
    equal(forEach, each);
  });
})();
