// FOR NODE.JS
if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./storage');
}
// localstorage
localStorage.setItem('name', 'Mike')
localStorage.setItem('age', '9012');
//console.log(localStorage);
    // Object information.

console.log(localStorage.getItem('name'));
    // Mike
console.log(localStorage.getItem('age'));
    // 9012

// Preserving type.
localStorage.setItem('n1', JSON.stringify(42));
console.log(localStorage.getItem('n1'));
    // 42
console.log(typeof localStorage.getItem('n1'));
    // String.

console.log(JSON.parse(localStorage.getItem('n1')));
    // 42
console.log(typeof JSON.parse(localStorage.getItem('n1')));
    // Number.
