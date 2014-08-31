(function() {
  module("R.I");

  var identity = require('eigensheep/identity')['default'];
  var I        = require('eigensheep/i')['default'];

  test("it is just an alias for identity", function() {
    equal(I, identity);
  });
})();
