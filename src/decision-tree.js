const a = 5;
const b = 10;

if (a < b) {
    console.log('a is less than b');
}

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is not greater than b');
}

if (a === b) {
    console.log('a is equal to b');
} else if (a < b) {
    console.log('a is less than b');
} else {
    console.log('a is greater than b');
}

if (a > b || a === b ) {
    console.log('1st condition is true');
} else if (a < b && a !== b) {
    console.log('1st condition is false');
} else {
    console.log('All conditions are false');
}
