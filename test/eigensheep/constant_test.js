(function() {
  module("R.constant");

  var always   = require('eigensheep/always')['default'];
  var constant = require('eigensheep/constant')['default'];

  test("it is just an alias for always", function() {
    equal(constant, always);
  });
})();
