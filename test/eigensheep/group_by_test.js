(function() {
  module("R.groupBy");

  var groupBy = require('eigensheep/group_by')['default'];

  test("creates an object grouping elements of an array by a predicate", function() {
    var byGrade = groupBy(function(student) {
      var score = student.score
      return (score < 65) ? 'F' : (score < 70) ? 'D' :
             (score < 80) ? 'C' : (score < 90) ? 'B' : 'A';
    });

    var students = [
      { name: 'Abby', score: 84 },
      { name: 'Eddy', score: 58 },
      { name: 'Jack', score: 69 }
    ];

    deepEqual(
      byGrade(students),
      {
        B: [students[0]],
        D: [students[2]],
        F: [students[1]]
      }
    );
  });
})();
