(function() {
  module("R.mixin");

  var mixin = require('eigensheep/mixin')['default'];

  test("creates a new object with the properties of the given objects merged", function() {
    var first = { one: 1, two: 2, three: 3 };
    var second = { two: 'lol override' };

    var result = mixin(first, second);

    notEqual(result, first, "the result of the operation should be a brand new object");
    notEqual(result, second, "the result of the operation should be a brand new object");
    deepEqual(
      result,
      { one: 1, two: 'lol override', three: 3 },
      "the objects are merged with the second object having higher precedence"
    );
  });
})();
