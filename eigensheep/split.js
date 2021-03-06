import invoker from "./invoker";

/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @category string
 * @param {string} sep The separator string.
 * @param {string} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @example
 *
 *      var pathComponents = split('/');
 *      pathComponents('/usr/local/bin/node');
 *      //= ['usr', 'local', 'bin', 'node']
 *
 *      split('.', 'a.b.c.xyz.d');
 *      //= ['a', 'b', 'c', 'xyz', 'd']
 */
export default invoker('split', String.prototype, 1);
