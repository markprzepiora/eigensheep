import always from "./always";

/**
 * A function that always returns `0`. Any passed in parameters are ignored.
 *
 * @static
 * @memberOf R
 * @category function
 * @see always
 * @return {Number} 0. Always zero.
 * @example
 *
 *      alwaysZero() // => 0
 */

var alwaysZero = always(0);

export default alwaysZero;
