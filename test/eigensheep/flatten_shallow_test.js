(function() {
  module("R.flattenShallow");

  var flattenShallow = require('eigensheep/flatten_shallow')['default'];
  var unnest         = require('eigensheep/unnest')['default'];

  test("it is just an alias for unnest", function() {
    equal(flattenShallow, unnest);
  });
})();
