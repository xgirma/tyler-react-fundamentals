let sayName = function(){
    'use strict';
    console.log(this);
    console.log('My name is ' + this.name);
};

let stacey = {
    name: 'Stacy',
    age: 25,
};

sayName(stacey);

/*
undefined
"error"
"TypeError: Cannot read property 'name' of undefined
    at sayName (anonymous.js:4:63)
    at anonymous.js:12:1
 */
