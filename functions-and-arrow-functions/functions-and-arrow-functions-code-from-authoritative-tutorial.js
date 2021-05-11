// Function declaration.
function myFunc(theObject) {
    theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)

// ---------------------------------------------------------------
// Function expression without name.
const square = function(number) { return number * number };
var x = square(4);// x gets the value 16

// ---------------------------------------------------------------
// Function expression with name.
const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };
console.log(factorial(3));

// ---------------------------------------------------------------
// Arrow function vs function expression.
var a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

var a2 = a.map(function(s) { return s.length; });
console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);
console.log(a3); // logs [8, 6, 7, 9]
