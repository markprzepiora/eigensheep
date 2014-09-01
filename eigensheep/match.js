import invoker from "./invoker";

/**
 * Tests a regular expression agains a String
 *
 * @func
 * @memberOf R
 * @category string
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches, or null if no matches found
 * @see R.invoker
 * @example
 *
 *      match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 */
var match = invoker('match', String.prototype);

export default match;
