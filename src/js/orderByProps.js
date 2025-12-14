export default function orderByProps(obj, sortOrder) {
    const result = [];

    for (let key of sortOrder) {
        if (Object.hasOwnProperty.call(obj, key)) {
            result.push({ key, value: obj[key] });
        }
    }

    let remainingKeys = Object.keys(obj).filter(k => !sortOrder.includes(k));

    remainingKeys.sort();

    for (let key of remainingKeys) {
        result.push({ key, value: obj[key] });
    }

    return result;
}