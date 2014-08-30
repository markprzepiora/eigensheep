(function() {
  module("R.reduce");

  var foldl = require('eigensheep/foldl')['default'];
  var reduce = require('eigensheep/reduce')['default'];

  test("it is just an alias for foldl", function() {
    equal(foldl, reduce);
  });
})();
