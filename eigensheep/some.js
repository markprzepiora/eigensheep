import _some from "./internal/some";
import curry2 from "./internal/curry2";

/**
 * Returns `true` if at least one of elements of the list match the predicate, `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @category List
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise
 * @example
 *
 *      var lessThan0 = flip(lt)(0);
 *      var lessThan2 = flip(lt)(2);
 *      var xs = range(1, 3); //= [1, 2]
 *      some(lessThan0)(xs); //= false
 *      some(lessThan2)(xs); //= true
 */
export default curry2(_some);
