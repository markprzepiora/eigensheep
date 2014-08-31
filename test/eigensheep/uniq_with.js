(function() {
  module("R.uniqWith");

  var uniqWith = require('eigensheep/uniq_with')['default'];

  test("returns the unique elements of an array, testing for equality using a predicate", function() {
    var weakEq = function(x, y) { return x == y };
    var weakUniq = uniqWith(weakEq);

    deepEqual(
      weakUniq([1, 3, '1', 5]),
      [1, 3, 5]
    );

    deepEqual(
      weakUniq(['1', true]),
      ['1']
    );

    deepEqual(
      weakUniq([null, undefined]),
      [null]
    );
  });
})();
