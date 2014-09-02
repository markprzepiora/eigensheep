import keys from "./keys";
import _functionsWith from "./internal/functions_with";

/**
 * Returns a list of function names of object's own functions
 *
 * @func
 * @memberOf R
 * @category Object
 * @param {Object} obj The objects with functions in it
 * @return {Array} returns list of object's own function names
 * @example
 *
 *      R.functions(R) // => returns list of ramda's own function names
 *      R.functions(this) // => returns list of function names in global scope's own function names
 */
export default _functionsWith(keys);
