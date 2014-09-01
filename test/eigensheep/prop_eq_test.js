(function() {
  module("R.propEq");

  var propEq = require('eigensheep/prop_eq')['default'];

  test("determines whether the given property of an object has a specific value", function() {
    var family = [
      { name: "Julie", hair: "brown" },
      { name: "Mark", hair: "brown" },
      { name: "Belldandy", hair: "black" }
    ];

    var hasBrownHair = propEq('hair', 'brown');

    strictEqual(hasBrownHair(family[0]), true);
    strictEqual(hasBrownHair(family[1]), true);
    strictEqual(hasBrownHair(family[2]), false);
  });
})();
