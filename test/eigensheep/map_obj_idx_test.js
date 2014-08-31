(function() {
  module("R.mapObj.idx");

  var mapObj = require('eigensheep/map_obj')['default'];

  test("maps an object, passing in the value, key, and original object to the function", function() {
    expect(9);

    var values = { x: 1, y: 2 };
    var bell = 0;
    var double = function(num, key, object) {
      ok(bell < 2, "the bell should only be rung twice");
      equal(object, values, "the bell should receive the original object as the third argument");

      if (bell === 0) {
        strictEqual(num, 1, "the first value received should be 1");
        strictEqual(key, 'x', "the first key received should be an 'x'");
      } else if (bell === 1) {
        strictEqual(num, 2, "the first value received should be 2");
        strictEqual(key, 'y', "the first key received should be an 'y'");
      }

      bell++;

      return num * 2;
    };

    deepEqual(
      mapObj.idx(double, values),
      { x: 2, y: 4 }
    );
  });
})();
