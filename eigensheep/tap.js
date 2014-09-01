import curry2 from "./internal/curry2";

// Object Functions
// ----------------
//
// These functions operate on plain Javascript object, adding simple functions to test properties on these
// objects.  Many of these are of most use in conjunction with the list functions, operating on lists of
// objects.

// --------

/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @func
 * @memberOf R
 * @param {*} x
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @return {*} x
 * @example
 *
 *      tap(100, function(x) { console.log('x is ' + x); }); // => 100 (and logs: 'x is 100')
 */
var tap = curry2(function _tap(x, fn) {
    if (typeof fn === 'function') { fn(x); }
    return x;
});

export default tap;
