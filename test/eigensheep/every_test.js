(function() {
  module("R.every");

  var every = require('eigensheep/every')['default'];
  var all   = require('eigensheep/all')['default'];

  test("it is just an alias for all", function() {
    equal(all, every);
  });
})();
