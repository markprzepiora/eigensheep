import _contains from "./internal/contains";

/**
 * Returns a new list containing only one copy of each element in the original list.
 * Equality is strict here, meaning reference equality for objects and non-coercing equality
 * for primitives.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      uniq([1, 1, 2, 1]); //= [1, 2]
 *      uniq([{}, {}]);     //= [{}, {}]
 *      uniq([1, '1']);     //= [1, '1']
 */
export default function uniq(list) {
    var idx = -1, len = list.length;
    var result = [], item;
    while (++idx < len) {
        item = list[idx];
        if (!_contains(item, result)) {
            result.push(item);
        }
    }
    return result;
};
