(function() {
  module("R.pickWith");

  var pickWith = require('eigensheep/pick_with')['default'];

  test("slicing an object using a predicate", function() {
    function isUpperCase(value, key, object) {
      return key.toUpperCase() === key;
    }

    deepEqual(
      pickWith(isUpperCase, { one: 1, Two: 2, THREE: 3 }),
      { THREE: 3 }
    );
  });
})();
