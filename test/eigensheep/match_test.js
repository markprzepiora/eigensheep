(function() {
  module("R.match");

  var match = require('eigensheep/match')['default'];

  test("matches a string against a regex", function() {
    var isIntegerString = match(/^-?[0-9]+$/);
    var isSnakeCase = match(/^([a-z]+_)*[a-z]+$/);

    ok(isIntegerString('-123'));
    ok(isIntegerString('123'));
    ok(isIntegerString('0'));
    ok(!isIntegerString('1.10'));

    ok(isSnakeCase('foo'));
    ok(isSnakeCase('foo_bar'));
    ok(isSnakeCase('foo_bar_baz'));
    ok(!isSnakeCase('fooBarBaz'));
  });
})();
