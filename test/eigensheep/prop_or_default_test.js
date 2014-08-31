(function() {
  module("R.propOrDefault");

  var propOrDefault = require('eigensheep/prop_or_default')['default'];

  test("returns the named property of an object or a default value", function() {
    var numbers = { one: 1, two: 2, three: 3 };

    equal(
      propOrDefault('one', 'we will not see this')(numbers),
      1
    );

    equal(
      propOrDefault('one', 'we will not see this', numbers),
      1
    );

    equal(
      propOrDefault('four', 'fallback', numbers),
      'fallback'
    );
  });
})();
