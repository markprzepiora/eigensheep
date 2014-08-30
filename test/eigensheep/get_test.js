(function() {
  module("R.get");

  var get = require('eigensheep/get')['default'];
  var prop = require('eigensheep/prop')['default'];

  test("it is just an alias for prop", function() {
    equal(get, prop);
  });
})();
