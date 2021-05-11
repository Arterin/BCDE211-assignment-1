// Array.prototype.every()
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
    // expected output: true

// ---------------------------------------------------------------
// Array.prototype.forEach()
const array2 = ['a', 'b', 'c'];
array2.forEach(element => console.log(element));
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

// ---------------------------------------------------------------
// Array.prototype.map()
const array3 = [1, 4, 9, 16];
const map1 = array3.map(x => x * 2);
console.log(map1);
    // expected output: Array [2, 8, 18, 32]

// ---------------------------------------------------------------
// Array.prototype.reduce()
const array4 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array4.reduce(reducer));
    // expected output: 10
console.log(array4.reduce(reducer, 5));
    // expected output: 15
