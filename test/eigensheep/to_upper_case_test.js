(function() {
  module("R.toUpperCase");

  var toUpperCase = require('eigensheep/to_upper_case')['default'];

  test("upcases a string", function() {
    strictEqual(toUpperCase("Foo"), "FOO");
    strictEqual(toUpperCase(""), "");
    strictEqual(toUpperCase("Pokémon"), "POKÉMON");
  });
})();
