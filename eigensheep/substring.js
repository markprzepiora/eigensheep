import invoker from "./invoker";

/**
 * returns a subset of a string between one index and another.
 *
 * @func
 * @memberOf R
 * @category string
 * @param {Number} indexA An integer between 0 and the length of the string.
 * @param {Number} indexB An integer between 0 and the length of the string.
 * @param {String} The string to extract from
 * @return {String} the extracted substring
 * @see R.invoker
 * @example
 *
 *      substring(2, 5, 'abcdefghijklm'); //=> 'cde'
 */
export default invoker('substring', String.prototype);
