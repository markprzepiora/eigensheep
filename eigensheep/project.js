import _map from "./internal/map";
import pickAll from "./pick_all";
import identity from "./identity";
import useWith from "./use_with";

/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @category object
 * @category relation
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2},
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7}
 *      var kids = [abby, fred];
 *      project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
var project = useWith(_map, pickAll, identity); // passing `identity` gives correct arity

export default project;
