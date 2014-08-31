(function() {
  module("R.disperseTo");

  var useWith    = require('eigensheep/use_with')['default'];
  var disperseTo = require('eigensheep/disperse_to')['default'];

  test("it is just an alias for useWith", function() {
    equal(disperseTo, useWith);
  });
})();
