import always from "./always";

/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @static
 * @memberOf R
 * @category function
 * @see always
 * @return {Boolean} true
 * @example
 *
 *      alwaysTrue() // => true
 */
var alwaysTrue = always(true);

export default alwaysTrue;
