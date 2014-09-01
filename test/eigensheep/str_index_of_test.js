(function() {
  module("R.strIndexOf");

  var strIndexOf = require('eigensheep/str_index_of')['default'];

  test("returns the location of the first occurence of a substring inside a string", function() {
    strictEqual(strIndexOf('bar', 'foobarbazbar', 3));
  });

  test("returns -1 if no match exists", function() {
    strictEqual(strIndexOf('xxx', 'foobarbazbar', -1));
  });
})();
