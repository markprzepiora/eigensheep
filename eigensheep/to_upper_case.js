import invoker from "./invoker";

/**
 * The upper case version of a string.
 *
 * @static
 * @memberOf R
 * @category string
 * @param {string} str The string to upper case.
 * @return {string} The upper case version of `str`.
 * @example
 *
 *      toUpperCase('abc') //= 'ABC'
 */
var toUpperCase = invoker('toUpperCase', String.prototype);

export default toUpperCase;
