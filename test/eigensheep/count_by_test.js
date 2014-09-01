(function() {
  module("R.countBy");

  var countBy = require('eigensheep/count_by')['default'];
  var toLowerCase = function(x) { return x.toLowerCase() };

  test("something", function() {
    var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
    deepEqual(
      countBy(Math.floor)(numbers),
      {'1': 3, '2': 2, '3': 1}
    );

    var letters = 'abcABCaaaBBc'.split('');
    deepEqual(
      countBy(toLowerCase)(letters),
      {'a': 5, 'b': 4, 'c': 3}
    );
  });
})();
