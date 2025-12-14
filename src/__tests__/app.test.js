import orderByProps from '../js/orderByProps';

describe('testing the function orderByProps', () => {
    test('the basic case', () => {
        const obj = {
            name: 'мечник',
            health: 10,
            level: 2,
            attack: 80,
            defence: 40,
        };
        const expectedResult = [
            { key: 'name', value: 'мечник' },
            { key: 'level', value: 2 },
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 },
        ];
        expect(orderByProps(obj, ['name', 'level'])).toEqual(expectedResult);
    });

    test('missing part of the keys in the sorting order', () => {
        const obj = {
            name: 'игрок',
            level: 1,
            skill: 'магия'
        };
        const expectedResult = [
            { key: 'name', value: 'игрок' },
            { key: 'level', value: 1 },
            { key: 'skill', value: 'магия' },
        ];
        expect(orderByProps(obj, ['name'])).toEqual(expectedResult);
    });

    test('sort the remaining keys alphabetically', () => {
        const obj = {
            power: 50,
            speed: 100,
            armor: 20,
        };
        const expectedResult = [
            { key: 'armor', value: 20 },
            { key: 'power', value: 50 },
            { key: 'speed', value: 100 },
        ];
        expect(orderByProps(obj, [])).toEqual(expectedResult);
    });

    test('object with numbers and strings', () => {
        const obj = {
            id: 1,
            name: 'John Doe',
            age: 30,
            email: 'john@example.com',
        };
        const expectedResult = [
            { key: 'id', value: 1 },
            { key: 'age', value: 30 },
            { key: 'email', value: 'john@example.com' },
            { key: 'name', value: 'John Doe' },
        ];
        expect(orderByProps(obj, ['id', 'age'])).toEqual(expectedResult);
    });

    test('empty object', () => {
        const obj = {};
        const expectedResult = [];
        expect(orderByProps(obj, ['field1', 'field2'])).toEqual(expectedResult);
    });

    test('checking the correct behavior in the absence of an object', () => {
        expect(() => orderByProps(null, ['field1', 'field2'])).toThrow(TypeError);
    });
});