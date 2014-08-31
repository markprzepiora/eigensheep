(function() {
  module("R.length");

  var length = require('eigensheep/length')['default'];
  var size   = require('eigensheep/size')['default'];

  test("it is just an alias for size", function() {
    equal(size, length);
  });
})();
