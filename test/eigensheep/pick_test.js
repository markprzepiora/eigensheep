(function() {
  module("R.pick");

  var pick = require('eigensheep/pick')['default'];

  test("slices an object", function() {
    deepEqual(
      pick(['one', 'three'], { one: 1, two: 2, three: 3 }),
      { one: 1, three: 3 }
    );
  });

  test("does not return undefined properties", function() {
    deepEqual(
      pick(['one', 'three'], { one: 1, two: 2 }),
      { one: 1 }
    );

    deepEqual(
      pick(['one', 'three'], { one: 1, two: 2, three: undefined }),
      { one: 1, three: undefined }
    );
  });

  test("currying", function() {
    deepEqual(
      pick(['one', 'three'])({ one: 1, two: 2, three: 3 }),
      { one: 1, three: 3 }
    );
  });
})();
