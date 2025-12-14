import orderByProps from './orderByProps.js';

const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

const result = orderByProps(obj, ['name', 'level']);

console.log('Исходный объект:', obj);
console.log('Результат сортировки:');
result.forEach((item, index) => {
    console.log(`${index + 1}. ${item.key}: ${item.value}`);
});

console.log('\n--- Дополнительные примеры ---\n');

const character = {
    name: 'Артур',
    class: 'Рыцарь',
    health: 150,
    mana: 50,
    strength: 18,
    agility: 12,
    intelligence: 8,
};

console.log('Персонаж, отсортированный по классу и имени:');
const sortedCharacter = orderByProps(character, ['class', 'name']);
sortedCharacter.forEach(prop => {
    console.log(`  ${prop.key}: ${prop.value}`);
});

console.log('\nВсе свойства по алфавиту:');
const alphabetical = orderByProps(character, []);
alphabetical.forEach(prop => {
    console.log(`  ${prop.key}: ${prop.value}`);
});
