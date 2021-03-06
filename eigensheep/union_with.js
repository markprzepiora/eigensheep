import curry3 from "./internal/curry3";
import uniqWith from "./uniq_with";
import _concat from "./internal/concat";

/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements of each list.  Duplication is
 * determined according to the value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @category relation
 * @param {Function} pred
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      function cmp(x, y) { return x.a === y.a; }
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      unionWith(cmp, l1, l2); //= [{a: 1}, {a: 2}, {a: 4}]
 */
export default curry3(function _unionWith(pred, list1, list2) {
    return uniqWith(pred, _concat(list1, list2));
});
