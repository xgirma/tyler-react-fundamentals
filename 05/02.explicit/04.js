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