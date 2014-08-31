(function() {
  module("R.append");

  var append = require('eigensheep/append')['default'];

  test("appending an element to an array", function() {
    deepEqual(
      append(4, [1, 2, 3]),
      [1, 2, 3, 4]
    );
  });

  test("creating a curried appender", function() {
    var zAppender = append('z');

    deepEqual(
      zAppender(['x', 'y']),
      ['x', 'y', 'z']
    );
  });
})();
