(function() {
  module("R.of");

  var of = require('eigensheep/of')['default'];

  test("wraps any object in an Array", function() {
    deepEqual(of(1), [1]);
    deepEqual(of([2]), [[2]]);
    deepEqual(of({}), [{}]);
  });

  test("allows a container with an of function to be specified", function() {
    var container = {
      of: function(x) { return [x, x, x] }
    };

    deepEqual(
      of(1, container),
      [1, 1, 1]
    );
  });
})();
