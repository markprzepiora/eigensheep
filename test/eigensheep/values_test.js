(function() {
  module("R.values");

  var values = require('eigensheep/values')['default'];

  test("getting the values of an object", function() {
    deepEqual(
      values({ one: 1, two: 2 }),
      [1, 2]
    );
  });

  test("gets only the object's own values", function() {
    var F = function() { this.one = 1 };
    F.prototype.two = 2;
    var f = new F();

    deepEqual(values(f), [1]);
  });
})();
