(function() {
  module("R.zip");

  var zip = require('eigensheep/zip')['default'];

  test("zipping two arrays together", function() {
    deepEqual(
      zip(['one', 'two', 'three'], [1, 2, 3]),
      [['one', 1], ['two', 2], ['three', 3]]
    );
  });

  test("zipping two arrays of differing lengths", function() {
    deepEqual(
      zip(['one', 'two', 'three'], [1, 2]),
      [['one', 1], ['two', 2]]
    );

    deepEqual(
      zip(['one', 'two'], [1, 2, 3]),
      [['one', 1], ['two', 2]]
    );

    deepEqual(
      zip([], [1, 2, 3]),
      []
    );
  });
})();
