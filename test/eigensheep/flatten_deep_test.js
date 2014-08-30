(function() {
  module("R.flattenDeep");

  var flatten = require('eigensheep/flatten')['default'];
  var flattenDeep = require('eigensheep/flatten_deep')['default'];

  test("it is just an alias for flatten", function() {
    equal(flattenDeep, flatten);
  });
})();
