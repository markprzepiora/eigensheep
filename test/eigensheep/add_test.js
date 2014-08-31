(function() {
  module("R.add");

  var add = require('eigensheep/add')['default'];

  test("adds two numbers or strings", function() {
    equal(add(1, 2), 3);
    equal(add(1)(2), 3);
    equal(add('foo')('bar'), 'foobar');
  });
})();
