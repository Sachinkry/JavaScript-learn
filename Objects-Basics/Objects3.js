// ########## Garbage Collection ###########

// 1.Memory management in JS happens automatically.
// 2.What happens when something is not neede anymore?
// 3.How does the JS engine discover it and clean it up?

// ********** Reachability ************

// The main concept of memory management in JS is reachability.
// "Reachable values" are those that are accessible or usable somehow.
// They are guaranteed to be stored in the memory

// # Some inherently reachable values:-
// -->the current executing function, its parameters and local variables
// -->other functions on the current chain of nested calls, their local variables and parameters
// --> Global variables
// # If there's an object in global variable  referencing another object, that object is also reachable.

// *** The background process in JS engine called garbage collector monitors all objects and removes those that have become unreachable

// A Simple Example
let user = {
    name: "John"
};
// user has the reference to the object
// if the value of user is overwritten, the reference is lost
user = null;  // object reference lost
// garbage collector will delete the object and free the memory

// *** And if an object's reference is stored in two variables, and we overwrite one of the varaible, then object becomes unreachable by that variable.

// Interlinked Objects
// More Complex Example
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    }
}

let family = marry(
    { name: "John" },
    { name: "Ann" }
);
alert(family);

// ******** Internal Algorithms ********
// the basic garbage collection algorithm is called "mark & sweep"