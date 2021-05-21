// FOR NODE.JS
if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./storage');
}

// localstorage
localStorage.setItem('myCat', 'Tom');
const cat = localStorage.getItem('myCat');
console.log(cat);

localStorage.removeItem('myCat');
    // myCat is gone :(

localStorage.clear();
    // clear everything