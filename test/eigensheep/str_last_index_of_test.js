(function() {
  module("R.strLastIndexOf");

  var strLastIndexOf = require('eigensheep/str_last_index_of')['default'];

  test("returns the location of the last occurence of a substring inside a string", function() {
    strictEqual(strLastIndexOf('bar', 'foobarbazbar', 9));
  });

  test("returns -1 if no match exists", function() {
    strictEqual(strLastIndexOf('xxx', 'foobarbazbar', -1));
  });
})();
