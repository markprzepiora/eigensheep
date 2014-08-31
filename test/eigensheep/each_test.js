(function() {
  module("R.each");

  var each = require('eigensheep/each')['default'];

  test("it executes the callback once for each element in the array", function() {
    expect(3);

    var count = 0;
    var callback = function(x) {
      equal(x, ++count, "the callback gets called with " + count);
    };

    each(callback, [1, 2, 3]);
  });
})();
