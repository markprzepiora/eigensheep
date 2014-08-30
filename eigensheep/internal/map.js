export default function map(fn, list) {
    var idx = -1, len = list.length, result = new Array(len);
    while (++idx < len) {
        result[idx] = fn(list[idx]);
    }
    return result;
}
