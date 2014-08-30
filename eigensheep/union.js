import compose from "./compose";
import uniq from "./uniq";
import concat from "./concat";
import curry2 from "./internal/curry2";

/**
 * Combines two lists into a set (i.e. no duplicates) composed of the
 * elements of each list.
 *
 * @static
 * @memberOf R
 * @category relation
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 * duplicates removed.
 * @example
 *
 *      union([1, 2, 3], [2, 3, 4]); //= [1, 2, 3, 4]
 */
var union = curry2(compose(uniq, concat));

export default union;
