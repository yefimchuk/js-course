/*

class PowerArray extends Array {
    isEmpty() {
        return this.length ;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
console.log(Symbol.species); // 10, 50
console.log(filteredArr.isEmpty()); // fal*/

/*
class Mammal {
    constructor(name) {
        this.name = name;
        _
    }

// Non-static method
    eat() {
        console.log(this.name + " eats");
    }

// static method
    static sleep() {
        console.log(this.name + " sleeps");
    }
}

class Cat extends Mammal {
// not writing any constructor relying on the default one.
    walk() {
        console.log(this.name + " walks");
    }
}

let cat = new Cat("kitty");

// Cat class own method - Works
cat.walk(); // kitty walks
// Non static method of parent class - Works
cat.eat(); // kitty eats
// Static method of parent class - Error!!
cat.sleep(); // Error : not a function
*/
/*
let obj = {

}
console.log(obj)*/

/*
class Rabbit {}
class Rabbit2 {}
let rabbit = new Rabbit();
let rabbit2 = new Rabbit2();

// is it an object of Rabbit class?
console.log( rabbit instanceof Rabbit2 ); // true
*/

/*
class Rabbit{}

//a
let die = ({}).toString.call(new Rabbit()) // Uncaught SyntaxError: Unexpected token '.'
console.log(die)
//but below works fine (Note : I haven't set Symbol.toStringTag - but I guess that shouldn't give the error)
//b
Object.prototype.toString.call(new Rabbit())// "[object Object]"
//c
var s = {}.toString;
s.call(new Rabbit())//"[object Object]"
//d
console.log(Object.prototype.toString.call(new Rabbit()) === {}.toString.call(new Rabbit())) // returns true*/


/*
try{
    s.call(new Rabbit())//"[object Object]"
}
catch (err)
{
    console.log(err)
}
window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
    badFunc(); // Whoops, something went wrong!
}

readData();
*/
