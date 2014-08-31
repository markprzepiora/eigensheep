import curry2 from "./internal/curry2";

/**
 * Returns a list of numbers from `from` (inclusive) to `to`
 * (exclusive). In mathematical terms, `range(a, b)` is equivalent to
 * the half-open interval `[a, b)`.
 *
 * @static
 * @memberOf R
 * @category List
 * @param {number} from The first number in the list.
 * @param {number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      range(1, 5);     //= [1, 2, 3, 4]
 *      range(50, 53);   //= [50, 51, 52]
 */
var range = curry2(function _range(from, to) {
    if (from >= to) {
        return [];
    }
    var idx = 0, result = new Array(Math.floor(to) - Math.ceil(from));
    for (; from < to; idx++, from++) {
        result[idx] = from;
    }
    return result;
});

export default range;
