global.name = "Girma";

let sayName = function(){
    console.log('My name is ' + this.name);
};

let stacey = {
    name: 'Stacy',
    age: 25,
};

sayName(stacey);

// My name is Girma
