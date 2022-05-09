// Objects are complex data types that store key-value pair of data

// Empty objects..........
let user = new Object();  // "object constructor" syntax

let user2 = {};    // "object literal" syntax

// Literals and properties..................

let user3 = {       // an object
    name: "John",
    age: 30
};

// Getting access to property value of the object
alert(user3.name);      // John
alert(user3.age);       // 30

// Adding new properties
user3.isAdmin = true;

// Delete a property 
delete (user3.age);

// Multiword property names
let user4 = {
    name: "John",
    age: 20,
    "likes birds": true,  // multiword property name must be quoted
};

// For multiword properties, the dot access doesn't work:
// this would give a synatx error
user4.likes birds = true

// instead use square bracket notation

let user5 = {};

user5["likes birds"] = true;    // set

alert[user5["likes birds"]];     // true

delete user5["likes birds"];     // delete


// Computed properties ..............
// using square brackets in an object literal, when creating an object

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5 // name of the property is taken from the variable fruit
};

alert(bag.apple);  // 5 if fruit = "apple"

// more complex expressions inside square brackets
let fruit1 = "apple";
let bag1 = {
    [fruit + 'Computers']: 5
};

alert(bag1.appleComputers);  // 5

// Property value Shorthand...............
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        //  ..... other properties
    };
}

let user6 = makeUser("John", 30);
alert(user6.name);   // John 


// "in" property
let banda = { age: 30 };

// let key = "age"
alert("age" in user);   // true

// special case
let obj = {
    test: undefined
};

alert(obj.test);  // it's undefined
alert("test" in obj);   // true


// "for...in" loop
for (key in object) {
    // executes the body for each key among object properties
}

//example
let user7 = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // keys
    alert(key);  // name, age, isAdmin
    // values for the keys
    alert(user7[key]);   // John, 30, true 
}

