export function cocerceTruthyValueToArray (value) {
    if (Array.isArray(value)) {
        return value
    } else if (value) {
        return [value]
    } else {
        return []
    }
}