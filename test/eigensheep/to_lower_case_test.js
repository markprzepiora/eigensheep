(function() {
  module("R.toLowerCase");

  var toLowerCase = require('eigensheep/to_lower_case')['default'];

  test("downcases a string", function() {
    strictEqual(toLowerCase("Foo"), "foo");
    strictEqual(toLowerCase(""), "");
    strictEqual(toLowerCase("POKÉMON"), "pokémon");
  });
})();
