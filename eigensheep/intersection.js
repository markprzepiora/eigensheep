import uniq from "./uniq";
import flip from "./flip";
import _filter from "./internal/filter";
import _contains from "./internal/contains";
import curry2 from "./internal/curry2";

/**
 * Combines two lists into a set (i.e. no duplicates) composed of those elements common to both lists.
 *
 * @static
 * @memberOf R
 * @category relation
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @see intersectionWith
 * @return {Array} The list of elements found in both `list1` and `list2`
 * @example
 *
 *      intersection(1,2,3,4], [7,6,5,4,3]); //= [1,2,3,4]
 */
var intersection = curry2(function intersection(list1, list2) {
    return uniq(_filter(flip(_contains)(list1), list2));
});

export default intersection;
