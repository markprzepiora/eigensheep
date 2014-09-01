(function() {
  module("R.functions");

  var functions = require('eigensheep/functions')['default'];

  test("returns a list of the names of an object's own functions", function() {
    var Foo = function() {};
    Foo.prototype.protoFunction = function() {};
    Foo.prototype.protoAttribute = 42;

    // foo's only own function is ownFunction. Everything else either is a
    // value or belongs to its prototype.
    var foo = new Foo();
    foo.ownAttribute = 'foobarbaz';
    foo.ownFunction = function() {};

    deepEqual(functions(foo), ['ownFunction']);
  });
})();
