import _functionsWith from "./internal/functions_with";
import keysIn from "./keys_in";

/**
 * Returns a list of function names of object's own and prototype functions
 *
 * @static .
 * @memberOf R
 * @category Object
 * @param {Object} obj The objects with functions in it
 * @return {Array} returns list of object's own and prototype function names
 * @example .
 *
 *      R.functionsIn(R) // => returns list of ramda's own and prototype function names
 *      R.functionsIn(this) // => returns list of function names in global scope's own and prototype function names
 */
var functionsIn = _functionsWith(keysIn);

export default functionsIn;
