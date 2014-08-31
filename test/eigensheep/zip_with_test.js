(function() {
  module("R.zipWith");

  var zipWith = require('eigensheep/zip_with')['default'];

  test("zips together two arrays with a specified zipper function", function() {
    var doubleZipper = function(key, value) { return [key, 2 * value] };
    var doubleZip    = zipWith(doubleZipper);

    deepEqual(
      doubleZip(['one', 'two'], [1, 2]),
      [['one', 2], ['two', 4]]
    );
  });
})();
