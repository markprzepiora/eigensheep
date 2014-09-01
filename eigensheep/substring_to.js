import substring from "./substring";

/**
 * The leading substring of a String ending at the nth character:
 *
 * @static
 * @memberOf R
 * @category string
 * @param {Number} indexA An integer between 0 and the length of the string.
 * @param {String} The string to extract from
 * @return {String} the extracted substring
 * @see invoker
 * @example
 *
 *      substringTo(8, 'abcdefghijklm'); //=> 'abcdefgh'
 */
var substringTo = substring(0);

export default substringTo;
