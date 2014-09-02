import substring from "./substring";
import flip from "./flip";

/**
 * The trailing substring of a String starting with the nth character:
 *
 * @func
 * @memberOf R
 * @category string
 * @param {Number} indexA An integer between 0 and the length of the string.
 * @param {String} The string to extract from
 * @return {String} the extracted substring
 * @see R.invoker
 * @example
 *
 *      substringFrom(8, 'abcdefghijklm'); //=> 'ijklm'
 */
export default flip(substring)(void 0);
