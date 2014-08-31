(function() {
  module("R.remove");

  var remove = require('eigensheep/remove')['default'];

  test("returns an array with a sliced subarray removed", function() {
    var letters = ['a', 'b', 'c', 'd', 'e'];
    var allButFirst = remove(0, 1);
    var allButSecondTwo = remove(1, 2);

    deepEqual(allButFirst(letters), ['b', 'c', 'd', 'e']);
    deepEqual(allButSecondTwo(letters), ['a', 'd', 'e']);
  });
})();
