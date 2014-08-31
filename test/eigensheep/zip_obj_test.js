(function() {
  module("R.zipObj");

  var zipObj = require('eigensheep/zip_obj')['default'];

  test("zipping two arrays together into an object", function() {
    deepEqual(
      zipObj(['one', 'two', 'three'], [1, 2, 3]),
      { one: 1, two: 2, three: 3 }
    );
  });


  test("when there are more keys than values, the unmatched keys get undefined values", function() {
    deepEqual(
      zipObj(['one', 'two', 'three'], [1, 2]),
      { one: 1, two: 2, three: undefined }
    );
  });

  test("extra values without keys are ignored", function() {
    deepEqual(
      zipObj(['one', 'two'], [1, 2, 3]),
      { one: 1, two: 2 }
    );

    deepEqual(
      zipObj([], [1, 2, 3]),
      {}
    );
  });
})();
