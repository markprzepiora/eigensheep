(function() {
  module("R.distributeTo");

  var distributeTo = require('eigensheep/distribute_to')['default'];
  var fork         = require('eigensheep/fork')['default'];

  test("it is just an alias for fork", function() {
    equal(fork, distributeTo);
  });
})();
