(function() {
  module("R.foldr.idx");

  var foldr = require('eigensheep/foldr')['default'];

  test("objectifying an array", function() {
    var letters = ['a', 'b', 'c'];
    var objectify = function(accObject, elem, idx, list) {
      accObject[elem] = idx;
      return accObject;
    };

    deepEqual(
      foldr.idx(objectify, {}, letters),
      { 'c': 2, 'b': 1, 'a': 0 }
    );
  });
})();
