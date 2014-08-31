(function() {
  module("R.push");

  var append = require('eigensheep/append')['default'];
  var push = require('eigensheep/push')['default'];

  test("it is just an alias for append", function() {
    equal(push, append);
  });
})();
