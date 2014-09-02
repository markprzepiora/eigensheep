import NO_ARGS_EXCEPTION from "./internal/no_args_exception";
import satisfiesSpec from "./internal/satisfies_spec";
import keys from "./keys";
import groupBy from "./group_by";

/**
 * Takes a spec object and a test object and returns true if the test satisfies the spec.
 * Any property on the spec that is not a function is interpreted as an equality
 * relation.
 *
 * If the spec has a property mapped to a function, then `where` evaluates the function, passing in
 * the test object's value for the property in question, as well as the whole test object.
 *
 * `where` is well suited to declarativley expressing constraints for other functions, e.g.,
 * `filter`, `find`, `pickWith`, etc.
 *
 * @func
 * @memberOf R
 * @category Object
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @example
 *
 *      var spec = {x: 2};
 *      where(spec, {w: 10, x: 2, y: 300}); // => true
 *      where(spec, {x: 1, y: 'moo', z: true}); // => false
 *
 *      var spec2 = {x: function(val, obj) { return  val + obj.y > 10; };
 *      where(spec2, {x: 2, y: 7}); // => false
 *      where(spec2, {x: 3, y: 8}); // => true
 *
 *      var xs = [{x: 2, y: 1}, {x: 10, y: 2}, {x: 8, y: 3}, {x: 10, y: 4}];
 *      filter(where({x: 10}), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
 */
export default function(spec, testObj) {
    var parsedSpec = groupBy(function(key) {
        return typeof spec[key] === 'function' ? 'fn' : 'obj';
    }, keys(spec));
    switch (arguments.length) {
        case 0: throw NO_ARGS_EXCEPTION;
        case 1:
            return function(testObj) {
                return satisfiesSpec(spec, parsedSpec, testObj);
            };
    }
    return satisfiesSpec(spec, parsedSpec, testObj);
};
