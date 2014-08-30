(function() {
  module("R.intersection");

  var intersection = require('eigensheep/intersection')['default'];

  test("performs a set intersection of two arrays", function() {
    deepEqual(
      intersection([1, 2, 3, 4], [3, 4, 5, 6]),
      [3, 4]
    );
  });

  test("removes duplicates", function() {
    deepEqual(
      intersection([1, 1], [1, 1]),
      [1]
    );
  });

  test("tests using strict equality", function() {
    deepEqual(
      intersection([1], ['1']),
      []
    );
  });

  test("can be curried", function() {
    var allowedLanguages = ['es5', 'es6', 'coffeescript'];
    var languageFilter = intersection(allowedLanguages);

    deepEqual(
      languageFilter(['es3', 'typescript', 'es5']),
      ['es5']
    );
  });
})();
