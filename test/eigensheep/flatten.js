(function() {
  module("R.flatten");

  var flatten = require('eigensheep/flatten')['default'];

  test("returns a copy of an unnested array", function() {
    var orig      = [1, 2, 3, '4', {five: 5}];
    var flattened = flatten(orig);

    notEqual(flattened, orig);
    deepEqual(flattened, orig);
  });

  test("deeply flattens an array", function() {
    var orig      = [1, 2, [3, 4], [[5], [6]]];
    var flattened = flatten(orig);

    deepEqual(
      flattened,
      [1, 2, 3, 4, 5, 6]
    );
  });
})();
