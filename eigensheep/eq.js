import curry2 from "./internal/curry2";

/**
 * Tests if two items are equal.  Equality is strict here, meaning reference equality for objects and
 * non-coercing equality for primitives.
 *
 * @func
 * @memberOf R
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      eq(o, o) // => true
 *      eq(o, {}) // => false
 *      eq(1, 1) // => true
 *      eq(1, '1') // => false
 */
export default curry2(function _eq(a, b) { return a === b; });
