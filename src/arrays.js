const strings = ['apple', 'pear', 'banana'];
strings.forEach(s => console.log('String:', s));
const upper = strings.map(strings => strings.toUpperCase());
console.log('Upper register:', upper);
const filteredStrings = strings.filter(s => s.length > 5);
console.log(filteredStrings);

console.log('--------------');
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => console.log('Number:', n));
const squares = numbers.map(n => n * n);
console.log('Squares :', squares);

console.log('--------------');
const bools = [true, false, true];
bools.forEach(b => console.log('Boolean:', b));
const inverted = bools.map(b => !b);
console.log('Inverted:', inverted);

console.log('--------------');
const mixed = [42, 'text', true, null];
mixed.forEach(el => console.log('Any:', el));
const types = mixed.map(el => typeof el);
console.log('Types:', types);

console.log('--------------');
const strings_numbers = strings.concat(numbers);
console.log(strings_numbers);

console.log('--------------');
strings_numbers.sort();
console.log(strings_numbers);

console.log('--------------');
const found = numbers.find((element) => element > 3);
console.log(found);

console.log('--------------');
console.log(strings.includes('pear'));

console.log('--------------');
console.log(strings.join());

console.log('--------------');
const arr = [1, 2, 5, 6].reduce((acc, item) => acc + item, 0);
console.log(arr);
