import { isObject } from "@/utils/types";

export function cocerceTruthyValueToArray (value) {
    if (Array.isArray(value)) {
        return value
    } else if (value) {
        return [value]
    } else {
        return []
    }
}

function extend (to, _from) {
    for (let key in _from) {
        to[key] = _from[key];
    }
    return to;
};

export function toObject (arr) {
    var res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
};

export function isEqual (value1, value2) {
    if (Array.isArray(value1) && Array.isArray(value2)) {
        return arrayEquals(value1, value2)
    }
    return looseEqual(value1, value2)
}

export function looseEqual (a, b) {
    const isObjectA = isObject(a)
    const isObjectB = isObject(a)
    if (isObjectA && isObjectB) {
        return JSON.stringify(a) === JSON.stringify(b)
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b)
    } else {
        return false
    }
}

export function arrayEquals (arrayA, arrayB) {
    arrayA = arrayA || []
    arrayB = arrayB || []
    if (arrayA.length !== arrayB.length) {
        return false
    }
    for (let i = 0; i < arrayA.length; i++) {
        if (!looseEqual(arrayA[i], arrayB[i])) {
            return false
        }
    }

    return true
}

export function isEmpty (val) {
    if (val == null) return true
    if (typeof val === 'boolean') return false
    if (typeof val === 'number') return !val
    if (val instanceof Error) return val.message === ''
    switch (Object.prototype.toString.call(val)) {
        //String or Array
        case '[object String]':
        case '[object Array]':
            return !val.length
        // map set file
        case '[object Map]':
        case '[object Set]':
        case '[object File]':
            return !val.size
        case '[object Object]':
            return !Object.keys(val).length
    }

    return false
}


export const kebabCase = function (str) {
    const hyphenateRE = /([^-])([A-Z])/g;
    return str
        .replace(hyphenateRE, '$1-$2')
        .replace(hyphenateRE, '$1-$2')
        .toLowerCase();
};

