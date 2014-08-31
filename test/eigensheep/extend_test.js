(function() {
  module("R.extend");

  var extend = require('eigensheep/extend')['default'];

  test("merges an object's properties into a destination object", function() {
    var destination = { one: 1, two: 2, three: 3 };
    var mixin = { two: 'lol override' };

    var result = extend(destination, mixin);

    equal(result, destination, "the destination object is returned");
    deepEqual(result, { one: 1, two: 'lol override', three: 3 });
  });
})();
