import curry3 from "./internal/curry3";

/**
 * Reports whether two functions have the same value for the specified property.  Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @category Object
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      o1 = {a: 1, b: 2, c: 3, d: 4};
 *      o2 = { a: 10, b: 20, c: 3, d: 40};
 *      eqProps('a', o1, o2) // => false
 *      eqProps('c', o1, o2) // => true
 */
export default curry3(function eqProps(prop, obj1, obj2) {
    return obj1[prop] === obj2[prop];
});
