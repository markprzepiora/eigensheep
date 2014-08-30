(function() {
  module("R.unnest");

  var unnest = require('eigensheep/unnest')['default'];

  test("returns a copy of an unnested array", function() {
    var orig      = [1, 2, 3, '4', {five: 5}];
    var unnested = unnest(orig);

    notEqual(unnested, orig);
    deepEqual(unnested, orig);
  });

  test("shallowly unnests an array", function() {
    var orig      = [1, 2, [3, 4], [[[5], [6]]]];
    var unnested = unnest(orig);

    deepEqual(
      unnested,
      [1, 2, 3, 4, [[5], [6]]]
    );
  });
})();
