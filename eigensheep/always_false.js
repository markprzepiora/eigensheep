import always from "./always";

/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @static
 * @memberOf R
 * @category function
 * @see always
 * @return {Boolean} false
 * @example
 *
 *      alwaysFalse() // => false
 */
var alwaysFalse = always(false);

export default alwaysFalse;
