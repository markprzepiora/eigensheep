(function() {
  module("R.K");

  var always = require('eigensheep/always')['default'];
  var K      = require('eigensheep/k')['default'];

  test("it is just an alias for always", function() {
    equal(K, always);
  });
})();
