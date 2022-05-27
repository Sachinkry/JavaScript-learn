// ###### Constructor, operator "new" ########

// constructor function have two conventions 
// 1. they are named with capital letter first
// 2. they should be executed only with "new" operator

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);     // Jack
alert(user.isAdmin);  // false

// new function() {....}
let user1 = new function() {
    this.name = "John";
    this.name = false;

    // some other code
}

// this constructor can't be called again because it's not saved anywhere


// omitting parantheses
let user2 = new User;
// same as
let user2 = new User();


// methods in constructor
function User(name) {
    this.name = name;

    this.sayHi = function(){
        alert("My name is " + this.name);
    };
}

let john = new User("John");

john.sayHi();    // My name is John

// <<<<<<<<<<<< SUMMARY >>>>>>>>>>>>>

// Constructors are regular functions with a common agreement to name them with capital letter first

//  they are called using 'new' operator. 
// such a call implies a creation of an object which is assigned to this and then 'this' is modified
// constructors help us create dynamic objects

// ########### TASKS ##############
function Calculator() {
    let a, b;
    this.read = function() {
        prompt(`Write two numbers(a,b):`,a,b);
        return {a,b}
    }

    this.sum = function() {
        return a + b;
    }

    this.mul = function() {
        return a * b;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );