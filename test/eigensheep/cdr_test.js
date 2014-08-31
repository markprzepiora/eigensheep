(function() {
  module("R.cdr");

  var tail = require('eigensheep/tail')['default'];
  var cdr  = require('eigensheep/cdr')['default'];

  test("it is just an alias for tail", function() {
    equal(cdr, tail);
  });
})();
