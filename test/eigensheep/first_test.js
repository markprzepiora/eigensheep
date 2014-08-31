(function() {
  module("R.first");

  var first = require('eigensheep/first')['default'];
  var head  = require('eigensheep/head')['default'];

  test("it is just an alias for head", function() {
    equal(first, head);
  });
})();
