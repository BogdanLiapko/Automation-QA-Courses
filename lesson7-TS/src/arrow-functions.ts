const arrowFunc = (arr: number[] | string[]): number => {
    return arr.reduce((sum: number, string) => sum + Number(string), 0);
};

const arrNum: number[] = [10, 20, 30, 40, 50];
const arrStr: string[] = ['10', '20', '30'];

console.log('Number Array Sum:', arrowFunc(arrNum));
console.log('String Array Sum:', arrowFunc(arrStr));
