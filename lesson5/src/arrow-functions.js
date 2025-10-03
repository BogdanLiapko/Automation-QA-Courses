const sumArray = (arr) => {
    return arr.reduce((acc, val) => acc + Number(val), 0);
};

const numberArray = [10, 20, 30, 40, 50];
const stringArray = ['10', '20', '30'];

console.log('Number Array Sum:', sumArray(numberArray));
console.log('String Array Sum:', sumArray(stringArray));

