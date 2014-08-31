(function() {
  module("R.drop");

  var drop = require('eigensheep/drop')['default'];
  var skip = require('eigensheep/skip')['default'];

  test("it is just an alias for skip", function() {
    equal(skip, drop);
  });
})();
