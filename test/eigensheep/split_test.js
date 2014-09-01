(function() {
  module("R.split");

  var split = require('eigensheep/split')['default'];

  test("splits an array along a separator", function() {
    var pathComponents = split('/');
    var versionComponents = split('.');

    deepEqual(
      pathComponents('/usr/local/bin/node'),
      ['', 'usr', 'local', 'bin', 'node']
    );

    deepEqual(
      versionComponents('4.3.1'),
      ['4', '3', '1']
    );

    deepEqual(
      split(/[-_]/, 'a-b__c-d'),
      ['a', 'b', '', 'c', 'd']
    );
  });
})();
