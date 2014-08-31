(function() {
  module("R.repeatN");

  var repeatN = require('eigensheep/repeat_n')['default'];

  test("returns a fixed list of a specified size with a given value repeated", function() {
    var object   = { foo: 'bar' };
    var repeated = repeatN(object, 3);

    deepEqual(
      repeated,
      [object, object, object]
    );

    equal(repeated[0], object);
    equal(repeated[1], object);
    equal(repeated[2], object);
  });

  test("returns an empty array when n = 0", function() {
    deepEqual(repeatN('foo', 0), []);
  });
})();
