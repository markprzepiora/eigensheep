import invoker from "./invoker";

/**
 * The character at the nth position in a String:
 *
 * @static
 * @memberOf R
 * @category string
 * @param {Number} index An integer between 0 and the length of the string.
 * @param {String} str The string to extract a char from
 * @return {String} the character at `index` of `str`
 * @see invoker
 * @example
 *
 *      charAt(8, 'abcdefghijklm'); //=> 'i'
 */
var charAt = invoker('charAt', String.prototype);

export default charAt;
