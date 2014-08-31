(function() {
  module("R.flatMap");

  var flatMap = require('eigensheep/flat_map')['default'];
  var chain   = require('eigensheep/chain')['default'];

  test("it is just an alias for chain", function() {
    equal(chain, flatMap);
  });
})();
