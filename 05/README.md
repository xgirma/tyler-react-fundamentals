# This keyword
The `this` keyword allows us to use function indifferent context. 

    Implicit binding
    Explicit binding
    new Binding
    window Binding
    
The first thing you need to ask when you see `this` keyword is:

    `where is this function invoked?`
    
We do not know what the `this` keyword is until it is invoked. 

## Implicit binding
Implicit binding is the most common.

```javascript
let me = {
    name: 'Girma',
    age: 25,
    sayName: function(){
        console.log(this.name); // console.log(me.name)
    }
};

me.sayName();
```   
> Implicit binding says: when you call a function, when the function is invoked, look to the left of the dot, and that is the `this` keyword is 
going to reference.


```javascript
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
```
## Explicit binding with .call .apply and .bind
In the previous example, `me.sayName()` we are calling a method in our object, we know `me` is what the `this` keyword is
referencing. What if we take out the `sayName` function outside of the object? 

### .call

> We need to call the global function in the context of the object.

> Every function has the .call property.

Now we want to call the `sayName` function in the context of `stacey` object. 

```javascript
let sayName = function(){
    console.log('My name is ' + this.name);
};

let stacey = {
    name: 'Stacy',
    age: 25,
};

sayName.call(stacey);

// My name is Stacy
```
In this example the `.call` is explicitly stating what the `this` keyword is by `the first` argument we passed to the
`call` function. 

The very first argument you pass to the `.call` function is the context, and anything other following arguments after 
that passed a regular JavaScript argument. In the following example we are calling the `sayName` function in the context 
of `stacey` and pass two normal arguments to it.

```javascript
let sayName = function(lang1, lang2){
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ' and ' + lang2);
    // console.log('My name is ' + stacey.name + ' and I know ' + lang1 + ' and ' + lang2);
};

const languages = ['JavaScript', 'Ruby', 'Python'];

let stacey = {
    name: 'Stacy',
    age: 25,
};

sayName.call(stacey, languages[1], languages[2]);

// My name is Stacy and I know Ruby and Python
``` 

### .apply

Instead of passing `arg1`, `arg2` ec tra we pass `languages` and it gets parsed for us. That is what the `.apply` 
function does. 

> `.apply` is the same as `.call`. using `.apply` instead of passing arguments one by one, you can pass in an array of
arguments and it is going to parse it for us. 

```javascript
let sayName = function(lang1, lang2){
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ' and ' + lang2);
    // console.log('My name is ' + stacey.name + ' and I know ' + lang1 + ' and ' + lang2);
};

const languages = ['JavaScript', 'Ruby', 'Python'];

let stacey = {
    name: 'Stacy',
    age: 25,
};

sayName.apply(stacey, languages);

// My name is Stacy and I know Ruby and Python
```

### .bind
`.bind` is almost exactly the same as `.call` except one thing, `.bind` return us a new `sayName` function instead of
invoking the existing `sayName` function. 

```javascript
let sayName = function(lang1, lang2){
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ' and ' + lang2);
    // console.log('My name is ' + stacey.name + ' and I know ' + lang1 + ' and ' + lang2);
};

const languages = ['JavaScript', 'Ruby', 'Python'];

let stacey = {
    name: 'Stacy',
    age: 25,
};

const newFunction = sayName.bind(stacey, languages[0], languages[1]);

newFunction();

// My name is Stacy and I know Ruby and Python
```

## new Binding
We are creating a constructor function, to indicate that we start the function name with *capital letter*.

> when the `new` key word is used JavaScript will create a new object for us and save it as `this={}`. It is a little bit
fancier than a regular object. 

```javascript
const Animal = function(color, name, type){
    this.color = color;
    this.name = name;
    this.type = type;
};

let zebra = new Animal('black and white', 'Zorro', 'Zebra');
console.log(zebra.color, ' ', zebra.name, ' ', zebra.type);
let donkey = new Animal('brown', 'tommy', 'Donkey');
console.log(donkey.color, ' ', donkey.name, ' ', donkey.type);

// black and white   Zorro   Zebra
// brown   tommy   Donkey
``` 
When a function is invoked with the `new` keyword, the `this` keyword inside the function is bound to the new object
being constructed. 

## window Binding
What if we want to invoke `sayName` function without specifying what the `this` keyword is? With out using `.call`, `.apply`, 
`.bind` or the `new`. 

```javascript
let sayName = function(){
    console.log('My name is ' + this.name);
};

let stacey = {
    name: 'Stacy',
    age: 25,
};

sayName(stacey);

// My name is undefined 
```
`Undefined`. What is happening is if you invoke a function (`sayName`) that have a `.this` keyword, but that does not have any thing
to the left of the dot (`sayName()`) then the `this` key word default to the `window` object. 

`strict` + `this` => undefined

```javascript
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
```

global var + `this` => works 

```javascript
window.name = "Girma";

let sayName = function(){
    console.log('My name is ' + this.name);
};

let stacey = {
    name: 'Stacy',
    age: 25,
};

sayName(stacey);

// "My name is Girma"
```

global var + `this` + `strict` => undefined

```javascript
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
```