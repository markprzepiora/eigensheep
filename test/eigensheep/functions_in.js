(function() {
  module("R.functionsIn");

  var functionsIn = require('eigensheep/functions_in')['default'];

  test("returns a list of the names of all of object's functions", function() {
    var Foo = function() {};
    Foo.prototype.protoFunction = function() {};
    Foo.prototype.protoAttribute = 42;

    var foo = new Foo();
    foo.ownAttribute = 'foobarbaz';
    foo.ownFunction = function() {};

    deepEqual(functionsIn(foo), ['ownFunction', 'protoFunction']);
  });
})();
