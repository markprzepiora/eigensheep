import invoker from "./invoker";

/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @category string
 * @param {string} str The string to lower case.
 * @return {string} The lower case version of `str`.
 * @example
 *
 *      toLowerCase('XYZ') //= 'xyz'
 */
export default invoker('toLowerCase', String.prototype);
