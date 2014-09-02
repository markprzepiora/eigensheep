import curry2 from "./internal/curry2";
import _pickWith from "./internal/pick_with";
import _contains from "./internal/contains";

/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @category Object
 * @param {Array} names an array of String propery names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @example
 *
 *      omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}) // => {b: 2, c: 3}
 */
export default curry2(function omit(names, obj) {
    return _pickWith(function(val, key) {
        return !_contains(key, names);
    }, obj);
});
