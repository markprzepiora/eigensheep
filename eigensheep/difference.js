import curry2 from "./internal/curry2";
import _reject from "./internal/reject";
import _contains from "./internal/contains";
import uniq from "./uniq";
import flip from "./flip";

/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
 *
 * @func
 * @memberOf R
 * @category relation
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`
 * @see differenceWith
 * @example
 *
 *      difference([1,2,3,4], [7,6,5,4,3]); //= [1,2]
 *      difference([7,6,5,4,3], [1,2,3,4]); //= [7,6,5]
 */
var difference = curry2(function _difference(first, second) {
    return uniq(_reject(flip(_contains)(second), first));
});

export default difference;
