(function() {
  module("R.map");

  var map = require('eigensheep/map')['default'];
  var double = function(x) { return x * 2 };

  test("on empty arrays", function() {
    deepEqual(map(double, []), []);
  });

  test("on nonempty arrays", function() {
    deepEqual(map(double, [1, 2, 3]), [2, 4, 6]);
  });

  test("uses an object's own map implementation if available", function() {
    expect(3);

    function Vector(x, y) {
      this.x = x;
      this.y = y;
    };
    Vector.prototype.map = function(f) {
      equal(f, double);
      return new Vector(f(this.x), f(this.y));
    };

    var vector    = new Vector(1, 2);
    var newVector = map(double, vector);

    equal(newVector.x, 2);
    equal(newVector.y, 4);
  });
})();
