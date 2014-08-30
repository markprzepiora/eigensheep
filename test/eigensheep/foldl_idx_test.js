(function() {
  module("R.foldl.idx");

  var foldl = require('eigensheep/foldl')['default'];

  test("objectifying an array", function() {
    var letters = ['a', 'b', 'c'];
    var objectify = function(accObject, elem, idx, list) {
      accObject[elem] = idx;
      return accObject;
    };

    deepEqual(
      foldl.idx(objectify, {}, letters),
      { 'a': 0, 'b': 1, 'c': 2 }
    );
  });

  test("creating a curried reducer", function() {
    var numbers = [1, 2, 3];
    var iterator = function(number, elem, idx, list) {
      return number + elem / Math.pow(10, idx);
    };
    var fractionizer = foldl.idx(iterator, 0);

    equal(fractionizer(numbers), 1.23);
  });
})();
