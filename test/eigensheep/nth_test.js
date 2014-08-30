(function() {
  module("R.nth");

  var nth = require('eigensheep/nth')['default'];
  var prop = require('eigensheep/prop')['default'];

  test("it is just an alias for prop", function() {
    equal(nth, prop);
  });
})();
