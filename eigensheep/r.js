import add from "./add";
import allPredicates from "./all_predicates";
import always from "./always";
import alwaysFalse from "./always_false";
import alwaysTrue from "./always_true";
import alwaysZero from "./always_zero";
import and from "./and";
import anyPredicates from "./any_predicates";
import ap from "./ap";
import append from "./append";
import arity from "./arity";
import binary from "./binary";
import car from "./car";
import cdr from "./cdr";
import chain from "./chain";
import charAt from "./char_at";
import charCodeAt from "./char_code_at";
import clone from "./clone";
import comparator from "./comparator";
import compose from "./compose";
import concat from "./concat";
import cons from "./cons";
import construct from "./construct";
import constructN from "./construct_n";
import contains from "./contains";
import containsWith from "./contains_with";
import converge from "./converge";
import countBy from "./count_by";
import curry from "./curry";
import difference from "./difference";
import differenceWith from "./difference_with";
import divide from "./divide";
import divideBy from "./divide_by";
import empty from "./empty";
import eq from "./eq";
import eqProps from "./eq_props";
import every from "./every";
import filter from "./filter";
import find from "./find";
import findIndex from "./find_index";
import findLast from "./find_last";
import findLastIndex from "./find_last_index";
import flatten from "./flatten";
import flip from "./flip";
import foldl from "./foldl";
import foldr from "./foldr";
import forEach from "./for_each";
import fromPairs from "./from_pairs";
import func from "./func";
import functions from "./functions";
import functionsIn from "./functions_in";
import get from "./get";
import groupBy from "./group_by";
import gt from "./gt";
import gte from "./gte";
import head from "./head";
import I from "./i";
import identity from "./identity";
import indexOf from "./index_of";
import insert from "./insert";
import installTo from "./install_to";
import intersection from "./intersection";
import intersectionWith from "./intersection_with";
import invoker from "./invoker";
import is from "./is";
import isAtom from "./is_atom";
import isEmpty from "./is_empty";
import isSet from "./is_set";
import join from "./join";
import keys from "./keys";
import keysIn from "./keys_in";
import lPartial from "./l_partial";
import last from "./last";
import lastIndexOf from "./last_index_of";
import length from "./length";
import lt from "./lt";
import lte from "./lte";
import map from "./map";
import mapObj from "./map_obj";
import match from "./match";
import mathMod from "./math_mod";
import max from "./max";
import maxWith from "./max_with";
import memoize from "./memoize";
import min from "./min";
import minWith from "./min_with";
import mixin from "./mixin";
import modulo from "./modulo";
import moduloBy from "./modulo_by";
import multiply from "./multiply";
import nAry from "./n_ary";
import not from "./not";
import of from "./of";
import omit from "./omit";
import once from "./once";
import or from "./or";
import partition from "./partition";
import path from "./path";
import pathOn from "./path_on";
import pick from "./pick";
import pickAll from "./pick_all";
import pickWith from "./pick_with";
import pipe from "./pipe";
import pluck from "./pluck";
import prepend from "./prepend";
import product from "./product";
import project from "./project";
import prop from "./prop";
import propEq from "./prop_eq";
import propOrDefault from "./prop_or_default";
import props from "./props";
import push from "./push";
import rPartial from "./r_partial";
import range from "./range";
import reduce from "./reduce";
import reduceRight from "./reduce_right";
import reject from "./reject";
import remove from "./remove";
import repeatN from "./repeat_n";
import reverse from "./reverse";
import size from "./size";
import skip from "./skip";
import skipUntil from "./skip_until";
import slice from "./slice";
import some from "./some";
import sort from "./sort";
import sortBy from "./sort_by";
import split from "./split";
import strIndexOf from "./str_index_of";
import strLastIndexOf from "./str_last_index_of";
import substring from "./substring";
import substringFrom from "./substring_from";
import substringTo from "./substring_to";
import subtract from "./subtract";
import subtractN from "./subtract_n";
import sum from "./sum";
import tail from "./tail";
import take from "./take";
import takeWhile from "./take_while";
import tap from "./tap";
import times from "./times";
import toLowerCase from "./to_lower_case";
import toPairs from "./to_pairs";
import toPairsIn from "./to_pairs_in";
import toUpperCase from "./to_upper_case";
import unary from "./unary";
import unfoldr from "./unfoldr";
import union from "./union";
import unionWith from "./union_with";
import uniq from "./uniq";
import uniqWith from "./uniq_with";
import unnest from "./unnest";
import useWith from "./use_with";
import values from "./values";
import valuesIn from "./values_in";
import where from "./where";
import wrap from "./wrap";
import xprod from "./xprod";
import xprodWith from "./xprod_with";
import zip from "./zip";
import zipObj from "./zip_obj";
import zipWith from "./zip_with";

var R = {
    add: add,
    allPredicates: allPredicates,
    always: always,
    alwaysFalse: alwaysFalse,
    alwaysTrue: alwaysTrue,
    alwaysZero: alwaysZero,
    and: and,
    anyPredicates: anyPredicates,
    ap: ap,
    append: append,
    arity: arity,
    binary: binary,
    car: car,
    cdr: cdr,
    chain: chain,
    charAt: charAt,
    charCodeAt: charCodeAt,
    clone: clone,
    comparator: comparator,
    compose: compose,
    concat: concat,
    cons: cons,
    construct: construct,
    constructN: constructN,
    contains: contains,
    containsWith: containsWith,
    converge: converge,
    countBy: countBy,
    curry: curry,
    difference: difference,
    differenceWith: differenceWith,
    divide: divide,
    divideBy: divideBy,
    empty: empty,
    eq: eq,
    eqProps: eqProps,
    every: every,
    filter: filter,
    find: find,
    findIndex: findIndex,
    findLast: findLast,
    findLastIndex: findLastIndex,
    flatten: flatten,
    flip: flip,
    foldl: foldl,
    foldr: foldr,
    forEach: forEach,
    fromPairs: fromPairs,
    func: func,
    functions: functions,
    functionsIn: functionsIn,
    get: get,
    groupBy: groupBy,
    gt: gt,
    gte: gte,
    head: head,
    I: I,
    identity: identity,
    indexOf: indexOf,
    insert: insert,
    installTo: installTo,
    intersection: intersection,
    intersectionWith: intersectionWith,
    invoker: invoker,
    is: is,
    isAtom: isAtom,
    isEmpty: isEmpty,
    isSet: isSet,
    join: join,
    keys: keys,
    keysIn: keysIn,
    lPartial: lPartial,
    last: last,
    lastIndexOf: lastIndexOf,
    length: length,
    lt: lt,
    lte: lte,
    map: map,
    mapObj: mapObj,
    match: match,
    mathMod: mathMod,
    max: max,
    maxWith: maxWith,
    memoize: memoize,
    min: min,
    minWith: minWith,
    mixin: mixin,
    modulo: modulo,
    moduloBy: moduloBy,
    multiply: multiply,
    nAry: nAry,
    not: not,
    of: of,
    omit: omit,
    once: once,
    or: or,
    partition: partition,
    path: path,
    pathOn: pathOn,
    pick: pick,
    pickAll: pickAll,
    pickWith: pickWith,
    pipe: pipe,
    pluck: pluck,
    prepend: prepend,
    product: product,
    project: project,
    prop: prop,
    propEq: propEq,
    propOrDefault: propOrDefault,
    props: props,
    push: push,
    rPartial: rPartial,
    range: range,
    reduce: reduce,
    reduceRight: reduceRight,
    reject: reject,
    remove: remove,
    repeatN: repeatN,
    reverse: reverse,
    size: size,
    skip: skip,
    skipUntil: skipUntil,
    slice: slice,
    some: some,
    sort: sort,
    sortBy: sortBy,
    split: split,
    strIndexOf: strIndexOf,
    strLastIndexOf: strLastIndexOf,
    substring: substring,
    substringFrom: substringFrom,
    substringTo: substringTo,
    subtract: subtract,
    subtractN: subtractN,
    sum: sum,
    tail: tail,
    take: take,
    takeWhile: takeWhile,
    tap: tap,
    times: times,
    toLowerCase: toLowerCase,
    toPairs: toPairs,
    toPairsIn: toPairsIn,
    toUpperCase: toUpperCase,
    unary: unary,
    unfoldr: unfoldr,
    union: union,
    unionWith: unionWith,
    uniq: uniq,
    uniqWith: uniqWith,
    unnest: unnest,
    useWith: useWith,
    values: values,
    valuesIn: valuesIn,
    where: where,
    wrap: wrap,
    xprod: xprod,
    xprodWith: xprodWith,
    zip: zip,
    zipObj: zipObj,
    zipWith: zipWith
};

export default R;
