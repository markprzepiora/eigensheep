(function() {
  module("R.reduce");

  var reduce = require('eigensheep/reduce')['default'];
  var foldl  = require('eigensheep/foldl')['default'];

  test("it is just an alias for foldl", function() {
    equal(foldl, reduce);
  });
})();
