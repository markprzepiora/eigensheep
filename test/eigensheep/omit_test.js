(function() {
  module("R.omit");

  var omit = require('eigensheep/omit')['default'];

  test("returns a partial copy of an object omitting the keys specified", function() {
    deepEqual(
      omit(['one', 'two'], { one: 1, two: 2, three: 3, four: 4 }),
      { three: 3, four: 4 }
    );
  });

  test("can be curried", function() {
    var oneTwoOmitter = omit(['one', 'two']);

    deepEqual(
      oneTwoOmitter({ one: 1, two: 2, three: 3, four: 4 }),
      { three: 3, four: 4 }
    );
  });
})();
