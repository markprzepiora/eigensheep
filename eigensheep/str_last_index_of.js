import invoker from "./invoker";

/**
 *
 * Finds the last index of a substring in a string, returning -1 if it's not present
 *
 * @func
 * @memberOf R
 * @category string
 * @param {String} c A string to find.
 * @param {String} str The string to search in
 * @return {Number} The last index of `c` or -1 if not found
 * @see R.invoker
 * @example
 *
 *      strLastIndexOf('a', 'banana split') //=> 5
 */
export default invoker('lastIndexOf', String.prototype);
