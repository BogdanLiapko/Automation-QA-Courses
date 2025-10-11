const arrowFunc = (arr: number[] | string[]): number => {
    return arr
        .map(item => Number(item))
        .filter(num => !isNaN(num))
        .reduce((sum, current) => sum + current, 0);
};

const arrNum: number[] = [10, 20, 30, 40, 50];
const arrStr: string[] = ['10', '20', '30', 'abc', '40xyz'];

console.log('Number Array Sum:', arrowFunc(arrNum));
console.log('String Array Sum:', arrowFunc(arrStr));
