import invoker from "./invoker";

/**
 * The ascii code of the character at the nth position in a String:
 *
 * @func
 * @memberOf R
 * @category string
 * @param {Number} index An integer between 0 and the length of the string.
 * @param {String} str The string to extract a charCode from
 * @return {Number} the code of the character at `index` of `str`
 * @see R.invoker
 * @example
 *
 *      charCodeAt(8, 'abcdefghijklm'); //=> 105
 *     // (... 'a' ~ 97, 'b' ~ 98, ... 'i' ~ 105)
 */
var charCodeAt = invoker('charCodeAt', String.prototype);

export default charCodeAt;
