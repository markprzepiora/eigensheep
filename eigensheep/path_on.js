import _path from "./internal/path";
import curry3 from "./internal/curry3";

/**
 * Retrieve a nested path on an object seperated by the specified
 * separator value.
 *
 * @func
 * @memberOf R
 * @category string
 * @param {string} sep The separator to use in `path`.
 * @param {string} path The path to use.
 * @return {*} The data at `path`.
 * @example
 *
 *      pathOn('/', 'a/b/c', {a: {b: {c: 3}}}) //= 3
 */
var pathOn = curry3(function pathOn(sep, str, obj) {
    return _path(str.split(sep), obj);
});

export default pathOn;
