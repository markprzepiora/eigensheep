(function() {
  module("R.always");

  var always = require('eigensheep/always')['default'];

  test("creates a function that returns a constant", function() {
    var alwaysEleven = always(11);

    equal(alwaysEleven(), 11);
  });
})();
