import curry2 from "internal/curry2";
import hasMethod from "internal/has_method";
import isArray from "internal/is_array";
import _concat from "internal/concat";
import is from "./is";

/**
 * Returns a new list consisting of the elements of the first list followed by the elements
 * of the second.
 *
 * @static
 * @memberOf R
 * @category Array
 * @param {Array} list1 The first list to merge.
 * @param {Array} list2 The second set to merge.
 * @return {Array} A new array consisting of the contents of `list1` followed by the
 *         contents of `list2`. If, instead of an {Array} for `list1`, you pass an
 *         object with a `concat` method on it, `concat` will call `list1.concat`
 *         and it the value of `list2`.
 * @example
 *
 *      ramda.concat([], []); //=> []
 *      ramda.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      ramda.concat('ABC', 'DEF'); // 'ABCDEF'
 */
var concat = curry2(function(set1, set2) {
    if (isArray(set2)) { return _concat(set1, set2); }
    else if (is(String, set1)) { return set1.concat(set2); }
    else if (hasMethod('concat', set2)) { return set2.concat(set1); }
    else { throw new TypeError("can't concat " + typeof set2); }
});

export default concat;
