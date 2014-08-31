(function() {
  module("R.containsWith");

  var containsWith = require('eigensheep/contains_with')['default'];

  test("returns whether an element is found in the list, matching on a binary predicate", function() {
    var amy = { birthday: '1985-01-01' };

    var group1 = [
      { birthday: '1985-01-01' },
      { birthday: '1980-01-01' },
      { birthday: '1986-10-12' }
    ];

    var group2 = [
      { birthday: '1980-01-01' },
      { birthday: '1986-10-12' }
    ];

    var haveSameBirthday = function(person, anotherPerson) {
      return person.birthday === anotherPerson.birthday;
    };

    var someoneSharesAmysBirthday = containsWith(haveSameBirthday, amy);

    // In group 1, the first person shares Amy's birthday.
    equal(someoneSharesAmysBirthday(group1), true);

    // In group 2, no one does.
    equal(someoneSharesAmysBirthday(group2), false);
  });
})();
