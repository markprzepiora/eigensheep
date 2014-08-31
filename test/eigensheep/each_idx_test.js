(function() {
  module("R.each.idx");

  var each = require('eigensheep/each')['default'];

  test("it executes the callback for each element, also passing in the index and list", function() {
    expect(9);

    var count = 0;
    var callback = function(x, index, list) {
      equal(index, count, "the callback gets called with the index " + count);
      equal(x, ++count, "the callback gets called with " + count);
      equal(list, array, "the array being iterated over is also passed in");
    };

    var array = [1, 2, 3];

    each.idx(callback, array);
  });
})();
