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