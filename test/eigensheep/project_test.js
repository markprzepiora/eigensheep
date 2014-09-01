(function() {
  module("R.project");

  var project = require('eigensheep/project')['default'];

  test("something", function() {
    var abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
    var fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
    var kids = [abby, fred];

    deepEqual(
      project(['name', 'grade'], kids),
      [{ name: 'Abby', grade: 2 }, { name: 'Fred', grade: 7 }]
    );

    deepEqual(
      project(['name', 'grade', 'foobarbaz'], kids),
      [{ name: 'Abby', grade: 2, foobarbaz: undefined }, { name: 'Fred', grade: 7, foobarbaz: undefined }]
    );

    deepEqual(
      project([], kids),
      [{}, {}]
    );
  });
})();
