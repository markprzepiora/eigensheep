import _filter from "./filter";
import _not from "./not";

export default function(fn, list) {
    return _filter(_not(fn), list);
};
