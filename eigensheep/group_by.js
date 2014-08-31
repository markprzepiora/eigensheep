import curry2 from "./internal/curry2";
import foldl from "./foldl";
import append from "./append";

/**
 * Splits a list into sublists stored in an object, based on the result of calling a String-returning function
 * on each element, and grouping the results according to values returned.
 *
 * @static
 * @memberOf R
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @example
 *     var byGrade = groupBy(function(student) {
 *       var score = student.score
 *       return (score < 65) ? 'F' : (score < 70) ? 'D' :
 *              (score < 80) ? 'C' : (score < 90) ? 'B' : 'A';
 *     };
 *     var students = [{name: 'Abby', score: 84},
 *                     {name: 'Eddy', score: 58},
 *                     // ...
 *                     {name: 'Jack', score: 69}];
 *     byGrade(students);
 *     //=> {
 *     //   'A': [{name: 'Dianne', score: 99}],
 *     //   'B': [{name: 'Abby', score: 84}]
 *     //   // ...,
 *     //   'F': [{name: 'Eddy', score: 58}]
 *     // }
 */
var groupBy = curry2(function _groupBy(fn, list) {
    return foldl(function (acc, elt) {
        var key = fn(elt);
        acc[key] = append(elt, acc[key] || (acc[key] = []));
        return acc;
    }, {}, list);
});

export default groupBy;
