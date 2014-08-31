(function() {
  module("R.cons");

  var cons    = require('eigensheep/cons')['default'];
  var prepend = require('eigensheep/prepend')['default'];

  test("it is just an alias for prepend", function() {
    equal(cons, prepend);
  });
})();
