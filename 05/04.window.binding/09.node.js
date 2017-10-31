global.name = "Girma";

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
TypeError: Cannot read property 'name' of undefined
    at sayName (/Users/no12579/WebstormProjects/tyler-react-fundamentals/05/04.window.binding/09.node.js:5:37)
    at Object.<anonymous> (/Users/no12579/WebstormProjects/tyler-react-fundamentals/05/04.window.binding/09.node.js:13:1)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:389:7)
    at startup (bootstrap_node.js:149:9)

 */
