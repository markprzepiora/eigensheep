import indexOf from "./index_of";

export default function contains(a, list) {
    return indexOf(list, a) > -1;
}
