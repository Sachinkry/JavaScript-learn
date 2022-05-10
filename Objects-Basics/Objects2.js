// *****  Object references and copying *****

// Primitive data types/variables store value directly.
let user = "John"
let name = user;  // "John"

// But when an object is assigned to a variable, it stores a reference to the object, not the object itself.
let person = {
    name: "John"
};
// Think of person as a sheet of paper with the address of object on it.

// ### When an object variable is copied, the reference is copied, but the object itself is not duplicated

let user1 = { name: "John" };

let admin = user1;   // copy the reference

// We can use either variable to access the object and modify its contents;

// ........Comparison by reference......
let a = {};
let b = a;  // copy the reference

alert(a == b);   // true, both variables reference the same object
alert(a === b);   // true

// But two indepedent objects are not equal, even though they look alike
let a1 = {};
let b1 = {};  // two independent objects

alert(a1 == b1);  // false

// .....Cloning & merging, Object.assign ....
let userData = {
    name: "John",
    age: 30,
};

let clone = {};

for (let key in userData) {
    clone[key] = userData[key];
}

clone.name = "Pete";   // changed the data 
alert(userData.name);  // "John"

// We can also use the method Object.assign
// Syntax:
// Object.assign(dest, [src1, src2, src3..])

// Example:
let user2 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// Copies all properties from permissions1 & permissions2
Object.assign(user2, permissions1, permissions2);

// now, user2 = {name: "John", canView: true, canEdit: true};

// If the copied property name already exists, it gets overwritten:
let user3 = { name: "John" };

Object.assign(user3, { name: "Pete" });

alert(user3.name);  // user = {name: "Pete"}

//** Using Object.assign to replace for...in loop for simple cloning:
let user4 = {
    name: "John",
    age: 30,
}

let clone = Object.assign({}, user4);

// using spread synatax for cloning
let clone1 = { ...user4 };


//  ...... Nested Cloning ........
// properties of objects can be references to other objects also.
let user5 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50,
    }
};
alert(user5.sizes.height);  // 182

let clone3 = Object.assign({}, user5);

alert(user5.sizes === clone.sizes); // true, same object ***

// user and clone share sizes
user5.sizes.width++;  //change a property from one  place
alert(clone.sizes.width);  // 51, get the result from other place

// Const objects can be modified
// side effect: objects stored as references in const variables can be modidified
const user6 = {
    name: "John"
};
user6.name = "Pete";
alert(user6.name);  // "Pete"


// ###### SUMMARY ######

// Objects are assigned and copied by reference.

// To make a real copy( a clone ), we can use Object.assign or deep cloning function such as "_.cloneDeep(obj"