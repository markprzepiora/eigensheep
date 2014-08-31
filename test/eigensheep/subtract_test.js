(function() {
  module("R.subtract");

  var subtract = require('eigensheep/subtract')['default'];

  test("subtracts two numbers", function() {
    equal(subtract(1, 2), -1);
    equal(subtract(1)(2), -1);
  });
})();
