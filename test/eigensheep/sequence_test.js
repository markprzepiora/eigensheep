(function() {
  module("R.sequence");

  var pipe     = require('eigensheep/pipe')['default'];
  var sequence = require('eigensheep/sequence')['default'];

  test("it is just an alias for pipe", function() {
    equal(sequence, pipe);
  });
})();
