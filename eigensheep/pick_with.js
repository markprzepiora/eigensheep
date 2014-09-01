import _pickWith from "./internal/pick_with";
import curry2 from "./internal/curry2";

/**
 * Returns a partial copy of an object containing only the keys that
 * satisfy the supplied predicate.
 *
 * @func
 * @memberOf R
 * @category Object
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object. This predicate receives
 *        three arguments: `val`, `key`, and `object`, which are the value and
 *        and key in question, and a reference to the original object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick
 * @example
 *
 *      function isUpperCase(val, key, object) { return key.toUpperCase() === key; }
 *      pickWith(isUpperCase, {a: 1, b: 2, A: 3, B: 4}) // => {A: 3, B: 4}
 */
var pickWith = curry2(_pickWith);

export default pickWith;
