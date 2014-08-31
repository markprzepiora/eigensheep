(function() {
  module("R.identity");

  var identity = require('eigensheep/identity')['default'];

  test("returns whatever you give it", function() {
    var object = {};

    equal(
      identity(object),
      object
    );
  });
})();
