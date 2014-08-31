(function() {
  module("R.tap");

  var tap = require('eigensheep/tap')['default'];

  test("runs a function with the given object, and returns the object", function() {
    expect(2);

    var ding = function(x) {
      equal(x, "magic value");
    };

    var result = tap("magic value", ding);
    equal(result, "magic value");
  });
})();
