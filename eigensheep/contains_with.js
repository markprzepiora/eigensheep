import curry3 from "./internal/curry3";
import _containsWith from "./internal/contains_with";

/**
 * Returns `true` if the `x` is found in the `list`, using `pred` as an
 * equality predicate for `x`.
 *
 * @static
 * @memberOf R
 * @param {Function} pred :: x -> x -> Bool
 * @param x the item to find
 * @param {Array} list the list to iterate over
 * @return {Boolean} `true` if `x` is in `list`, else `false`
 */
// TODO: add an example

var containsWith = curry3(_containsWith);

export default containsWith;
