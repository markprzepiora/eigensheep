import curry2 from "./internal/curry2";
import _pickAll from "./internal/pick_all";

/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for properties that don't exist.
 *
 * @func
 * @memberOf R
 * @category Object
 * @param {Array} names an array of String propery names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see pick
 * @example
 *
 *      pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}) // => {a: 1, d: 4}
 *      pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}) // => {a: 1, e: undefined, f: undefined}
 */
var pickAll = curry2(_pickAll);

export default pickAll;
