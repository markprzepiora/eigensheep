/**
 * internal path function
 * Takes an array, paths, indicating the deep set of keys
 * to find.
 *
 * @private
 * @memberOf R
 * @category string
 * @param {Array} paths An array of strings to map to object properties
 * @param {Object} obj The object to find the path in
 * @return {Array} The value at the end of the path or `undefined`.
 * @example
 *
 *      path(['a', 'b'], {a: {b: 2}}) // => 2
 */
export default function(paths, obj) {
    var i = -1, length = paths.length, val;
    if (obj == null) { return; }
    val = obj;
    while (val != null && ++i < length) {
        val = val[paths[i]];
    }
    return val;
}
