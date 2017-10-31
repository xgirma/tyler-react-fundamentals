let sayNameMixin = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    };
};

let me = {
    name: 'Tola'
};

let you = {
    name: 'Girma'
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName();
you.sayName();

// Tola
// Girma