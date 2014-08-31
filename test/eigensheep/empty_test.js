(function() {
  module("R.empty");

  var empty = require('eigensheep/empty')['default'];

  test("returns an empty array no matter the input", function() {
    deepEqual(empty([]), []);
    deepEqual(empty([1, 2, 3]), []);
    deepEqual(empty('foobarbaz'), []);
  });

  test("delegates to an existing empty function on the object if present", function() {
    var myEmptyObject = ['foo'];
    var object = {
      empty: function() { return myEmptyObject }
    };

    equal(empty(object), myEmptyObject);
  });
})();
