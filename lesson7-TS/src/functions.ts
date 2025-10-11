function func (arr: number[] | string[]): number {
    const validNumbers: number[] = [];
    for (const item of arr) {
        const num = Number(item);
        if (!isNaN(num)) {
            validNumbers.push(num);
        }
    }
    return validNumbers.reduce((acc, curr) => acc + curr, 0);
}

const arrNum1: number[] = [10, 20, 30, 40, 50];
const arrStr1: string[] = ['10', '20', '30', 'abc', '40xyz'];

console.log('Number Array Sum:', func(arrNum1));
console.log('String Array Sum:', func(arrStr1));
