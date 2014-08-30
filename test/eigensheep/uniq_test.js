(function() {
  module("R.uniq");

  var uniq = require('eigensheep/uniq')['default'];

  test("keeping only the unique numbers of an array", function() {
    deepEqual(
      uniq([1, 1, 2, 1, 1.0]),
      [1, 2]
    );
  });

  test("deeply-equal objects are unique if they are not strictly equal", function() {
    // Not only are the arrays deeply equal, but each element should be the
    // element from the source array.
    var objects = [{}, {}];
    var uniqueObjects = uniq(objects);
    deepEqual(uniqueObjects, objects);
    equal(uniqueObjects[0], objects[0]);
    equal(uniqueObjects[1], objects[1]);
  });

  test("uniqueness is determined using strict comparison", function() {
    deepEqual(
      uniq([1, '1']),
      [1, '1']
    );

    var foo = {one: 1};
    deepEqual(
      uniq([foo, foo]),
      [foo]
    );
  });
})();
