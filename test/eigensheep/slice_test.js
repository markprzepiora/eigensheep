(function() {
  module("R.slice");

  var slice = require('eigensheep/slice')['default'];

  test("just wraps Array.prototype.slice", function() {
    deepEqual(
      slice(1, 3, ['a', 'b', 'c', 'd']),
      ['b', 'c']
    );
  });

  test("can be curried", function() {
    var allButFirst = slice(1, undefined);
    var firstTwo = slice(0, 2);

    deepEqual(
      allButFirst(['a', 'b', 'c', 'd']),
      ['b', 'c', 'd']
    );

    deepEqual(
      firstTwo(['a', 'b', 'c', 'd']),
      ['a', 'b']
    );
  });
})();
