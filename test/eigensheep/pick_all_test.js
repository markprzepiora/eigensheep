(function() {
  module("R.pickAll");

  var pickAll = require('eigensheep/pick_all')['default'];

  test("slices an object", function() {
    deepEqual(
      pickAll(['one', 'three'], { one: 1, two: 2, three: 3 }),
      { one: 1, three: 3 }
    );
  });

  test("returns undefined properties", function() {
    deepEqual(
      pickAll(['one', 'three'], { one: 1, two: 2 }),
      { one: 1, three: undefined }
    );

    deepEqual(
      pickAll(['one', 'three'], { one: 1, two: 2, three: undefined }),
      { one: 1, three: undefined }
    );
  });

  test("currying", function() {
    deepEqual(
      pickAll(['one', 'three'])({ one: 1, two: 2, three: 3 }),
      { one: 1, three: 3 }
    );
  });
})();
