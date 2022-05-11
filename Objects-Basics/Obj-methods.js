// ######## Object-methods: "this" #########

// Actions are represented in JS by functions in properties

// Method examples
let user = {
    name: "John",
    age: 30
};

user.sayHi = function () {
    alert("Hello!");
};
// We declared a function, then added it as a method and then call the method.
user.sayHi();     // Hello!

// *** A function that is a property of an object is called its method.
// Here we've got a method sayHi of the object user.

// Method Shorthand......
user = {
    sayHi: function () {
        alert("Hello!");
    }
};

// method shorthand looks better, right? ----> Hell Yeah!
user = {
    sayHi() {
        alert("Hello!");
    }
};
// NOTE: there are subtle differences related to object inheritance(to be covered later).


// ######### "this" in methods #########

let user = {
    name: "John",
    age: 30,

    sayHi() {
        //this is the "current object"
        alert(this.name);
    }
};

// user.sayHi();    // John

// experiment
let admin = user;
admin.name = "Pete";

admin.sayHi();   // Pete

// ### "this" is not bound

// no syntax error in the following
function sayHi() {
    alert(this.name);
}
// the value of this is evaluated during run-time, depending on the context
// Example:
let user = { name: "John" };
let admin = { name: "Anna" };

function sayHi() {
    alert(this.name);
}

user.say = sayHi;
admin.say = sayHi;

user.say();
admin.say();

// Calling without an object(this == undefined)
function sayHi() {
    alert(this);
}

sayHi();  // undefined

// Arrow functions have no "this"
// 
let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi();

// ######## SUMMARY #########
// 1.Functions that  are stored in object properties are called "methods".
// 2.Methods allow objects to "act" like object.doSomething().
// 3.Methods can reference the object as this.

// ########## PRACTICE-TASKS ###########

// TASK1:
let calculator = {
    read(a, b) {
        prompt(`Enter two values`)
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
