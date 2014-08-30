import _pickWith from "./internal/pick_with";
import curry2 from "./internal/curry2";

/**
 * Returns a partial copy of an object containing only the keys that
 * satisfy the supplied predicate.
 *
 * @static
 * @memberOf R
 * @category Object
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see pick
 * @example
 *
 *      function isUpperCase(x) { return x.toUpperCase() === x; }
 *      pickWith(isUpperCase, {a: 1, b: 2, A: 3, B: 4}) // => {A: 3, B: 4}
 */
var pickWith = curry2(_pickWith);

export default pickWith;
