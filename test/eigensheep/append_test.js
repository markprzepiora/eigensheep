(function() {
  module("R.append");

  var append = require('eigensheep/append')['default'];

  test("appending an element to an array", function() {
    deepEqual(
      append(4, [1, 2, 3]),
      [1, 2, 3, 4]
    );
  });
})();
