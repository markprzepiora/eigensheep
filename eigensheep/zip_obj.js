import curry2 from "./internal/curry2";

/**
 * Creates a new object out of a list of keys and a list of values.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      zipObj(['a', 'b', 'c'], [1, 2, 3]);
 *      //= {a: 1, b: 2, c: 3}
 */
export default curry2(function _zipObj(keys, values) {
    var i = -1, len = keys.length, out = {};
    while (++i < len) {
        out[keys[i]] = values[i];
    }
    return out;
});
