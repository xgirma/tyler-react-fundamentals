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
