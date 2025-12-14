import orderByProps from '../js/orderByProps.js';

test('orderByProps handles basic case correctly', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    expect(orderByProps(obj, ['name', 'level'])).toEqual([
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 }
    ]);
});

test('orderByProps sorts properties not mentioned in the sort array alphabetically', () => {
    const obj = { x: 1, y: 2, z: 3 };
    expect(orderByProps(obj, ['y'])).toEqual([
        { key: 'y', value: 2 },
        { key: 'x', value: 1 },
        { key: 'z', value: 3 },
    ]);
});

test('orderByProps works with an empty object', () => {
    const obj = {};
    expect(orderByProps(obj, [])).toEqual([]);
});

test('orderByProps respects custom sorting when no keys match', () => {
    const obj = { a: 1, b: 2 };
    expect(orderByProps(obj, ['c', 'd'])).toEqual([
        { key: 'a', value: 1 },
        { key: 'b', value: 2 }
    ]);
});

test('orderByProps preserves original values from the input object', () => {
    const obj = { foo: 'bar', baz: null };
    expect(orderByProps(obj, ['foo'])).toEqual([
        { key: 'foo', value: 'bar' },
        { key: 'baz', value: null }
    ]);
});

test('orderByProps ignores non-existing keys provided in the sort order', () => {
    const obj = { one: 1, two: 2 };
    expect(orderByProps(obj, ['one', 'three'])).toEqual([
        { key: 'one', value: 1 },
        { key: 'two', value: 2 }
    ]);
});

test('orderByProps does not mutate the input object', () => {
    const obj = { name: 'Alice', age: 30 };
    const originalObj = JSON.parse(JSON.stringify(obj));
    orderByProps(obj, []);
    expect(obj).toStrictEqual(originalObj);
});