import invoker from "./invoker";

/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @category string
 * @param {string} str The string to upper case.
 * @return {string} The upper case version of `str`.
 * @example
 *
 *      toUpperCase('abc') //= 'ABC'
 */
export default invoker('toUpperCase', String.prototype);
