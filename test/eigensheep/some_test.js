(function() {
  module("R.some");

  var some = require('eigensheep/some')['default'];
  var any  = require('eigensheep/any')['default'];

  test("it is just an alias for any", function() {
    equal(any, some);
  });
})();
