(function() {
  module("R.car");

  var car  = require('eigensheep/car')['default'];
  var head = require('eigensheep/head')['default'];

  test("it is just an alias for head", function() {
    equal(car, head);
  });
})();
