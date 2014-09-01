import pathOn from "./path_on";

/**
 * Retrieve a nested path on an object seperated by periods
 *
 * @static
 * @memberOf R
 * @category string
 * @param {string} path The dot path to use.
 * @return {*} The data at `path`.
 * @example
 *
 *      path('a.b', {a: {b: 2}}) //= 2
 */
var path = pathOn('.');

export default path;
