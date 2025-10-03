function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

const numberArray = [10, 20, 30, 40, 50];
const stringArray = ['10', '20', '30'];

console.log('Number Array Sum:', sumArray(numberArray));
console.log('String Array Sum:', sumArray(stringArray));
