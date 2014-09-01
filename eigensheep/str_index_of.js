import invoker from "./invoker";

/**
 * Finds the first index of a substring in a string, returning -1 if it's not present
 *
 * @func
 * @memberOf R
 * @category string
 * @param {String} c A string to find.
 * @param {String} str The string to search in
 * @return {Number} The first index of `c` or -1 if not found
 * @see invoker
 * @example
 *
 *      strIndexOf('c', 'abcdefg) //=> 2
 */
var strIndexOf = invoker('indexOf', String.prototype);

export default strIndexOf;
