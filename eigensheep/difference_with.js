import curry3 from "./internal/curry3";
import _concat from "./internal/concat";
import _reject from "./internal/reject";
import uniqWith from "./uniq_with";
import flip from "./flip";
import containsWith from "./contains_with";

/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
 * Duplication is determined according to the value returned by applying the supplied predicate to two list
 * elements.
 *
 * @func
 * @memberOf R
 * @category relation
 * @param {Function} pred
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @see R.difference
 * @return {Array} The first and second lists concatenated, with
 *                 duplicates removed.
 * @example
 *
 *      function cmp(x, y) { return x.a === y.a; }
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      differenceWith(cmp, l1, l2); //= [{a: 1}, {a: 2}]
 *
 */
export default curry3(function differenceWith(pred, first, second) {
    return uniqWith(pred)(_reject(flip(containsWith(pred))(second), first));
});
