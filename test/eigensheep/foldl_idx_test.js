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
})();
