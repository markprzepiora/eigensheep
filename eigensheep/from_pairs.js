import _isArray from "./internal/is_array";

/**
 * Creates a new object out of a list key-value pairs.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Array} An array of two-element arrays that will be the keys and values of the ouput object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @example
 *
 *      fromPairs([['a', 1], ['b', 2],  ['c', 3]]);
 *      //= {a: 1, b: 2, c: 3}
 */
export default function fromPairs(pairs) {
    var i = -1, len = pairs.length, out = {};
    while (++i < len) {
        if (_isArray(pairs[i]) && pairs[i].length) {
            out[pairs[i][0]] = pairs[i][1];
        }
    }
    return out;
};
