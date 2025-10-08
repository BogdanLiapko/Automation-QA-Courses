function func (arr: number[] | string[]): number {
    let sum = 0;
    for (const item of arr) {
        sum += Number(item);
    }
    return sum;
}

const arrNum1: number[] = [10, 20, 30, 40, 50];
const arrStr1: string[] = ['10', '20', '30'];

console.log('Number Array Sum:', func(arrNum1));
console.log('String Array Sum:', func(arrStr1));
