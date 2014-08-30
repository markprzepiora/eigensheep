(function() {
  module("R.mapObj");

  var mapObj = require('eigensheep/map_obj')['default'];

  test("mapping an object", function() {
    var values = { x: 1, y: 2, z: 3 };
    var double = function(num) {
      return num * 2;
    };

    deepEqual(
      mapObj(double, values),
      { x: 2, y: 4, z: 6 }
    );
  });
})();
