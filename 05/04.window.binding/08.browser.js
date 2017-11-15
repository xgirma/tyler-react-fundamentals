window.name = "Girma";

let sayName = function(){
    'use strict';
    console.log('My name is ' + this.name);
};

let stacey = {
    name: 'Stacy',
    age: 25,
};

sayName(stacey);

/*
Uncaught TypeError: Cannot read property 'name' of undefined
    at sayName (<anonymous>:5:38)
    at <anonymous>:13:1
 */
