let Person = function(name, age){
    return {
        name: name,
        age: age,
        sayName: function(){
            console.log(this.name);
        },
        mother: {
            name: 'Stacey',
            sayName: function(){
                console.log(this.name);
            }
        }
    };
};

let jim = Person('Jim', 42);
jim.sayName();
jim.mother.sayName();

// Jim
// Stacey