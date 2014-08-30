/**
 * Tests if two items are equal.  Equality is strict here, meaning reference equality for objects and
 * non-coercing equality for primitives.
 *
 * @static
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
export default function eq(a, b) {
    return arguments.length < 2 ? function _eq(b) { return a === b; } : a === b;
};
