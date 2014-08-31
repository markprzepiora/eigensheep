import curry2 from "./internal/curry2";
import _pickWith from "./internal/pick_with";
import _contains from "./internal/contains";

/**
 * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
 * property is ignored.
 *
 * @static
 * @memberOf R
 * @category Object
 * @param {Array} names an array of String propery names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @example
 *
 *      pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}) // => {a: 1, d: 4}
 *      pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}) // => {a: 1}
 */
var pick = curry2(function pick(names, obj) {
    return _pickWith(function(val, key) {
        return _contains(key, names);
    }, obj);
});

export default pick;
