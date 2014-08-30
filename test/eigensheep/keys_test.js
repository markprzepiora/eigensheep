(function() {
  module("R.keys");

  var keys = require('eigensheep/keys')['default'];

  test("getting the keys of an object", function() {
    deepEqual(
      keys({ one: 1, two: 2, three: 3 }),
      ['one', 'two', 'three']
    );
  });

  test("returning only the object's own property keys", function() {
    // getFoo isn't enumerable
    var myObject = Object.create({}, { getFoo : { value : function () { return this.foo } } });
    myObject.foo = "bar";

    deepEqual(
      keys(myObject),
      ["foo"]
    );
  });
})();
