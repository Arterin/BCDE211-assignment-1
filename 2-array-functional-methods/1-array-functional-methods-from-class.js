// Array.every()
const isNumber = (currentValue) => typeof currentValue == 'number';
const a1 = [1, 30, 39, 29, 10, 13];
console.log(a1.every(isNumber));
    // expected output: true

// ---------------------------------------------------------------
// Array.forEach()
const a2 = ['bird', 'cow', 'cat'];
a2.forEach(element => console.log(element));
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

// ---------------------------------------------------------------
// Array.map()
const a3 = [2, 8, 18, 32];
const map1 = a3.map(x => x * 2);
console.log(map1);
    // expected output: Array [4, 16, 36, 64]

// ---------------------------------------------------------------
// Array.reduce()
const a4 = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(a4.reduce(reducer));
    // expected output: 15
console.log(a4.reduce(reducer, 5));
    // expected output: 20
