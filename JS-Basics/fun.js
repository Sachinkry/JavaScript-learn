//..........Topic...............
//Example


// Setup



// Only change code below this line

//*****************************************

// //..........Access array data..............
// //Example
// var ourArray = [50, 60, 70];
// var ourData = ourArray[0]

// // Setup
// var myArray = [50, 60, 70];

// // Only change code below this line
// var myData = myArray[0];
// alert(myData);

//*****************************************

// // ..........Modify array data.............
// //Example
// var ourArray = [50, 60, 70];
// ourArray[0] = 45;

// // Setup
// var myArray = [50, 60, 70];

// // Only change code below this line

// alert(ourArray[0]);

//*****************************************

//..........Objects...............
//Example 1
// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// // Only change code below this line

// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends": 0
// };

// myDog["bark"] = "woof!"  // add properties 
// console.log(myDog.bark);
// delete myDog.legs;
// console.log(myDog.legs);

//Example 2

// function phoneticLookup(val) {
//     var result = "";
//     var lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston"
//     };
//     result = lookup[val];

//     return result;
// }
// // Only change code below this line
// console.log(phoneticLookup("alpha"));

// Example 3
// // setup 
// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };

// function checkObj(checkProp) {
//     // Your code here
//     if (myObj.hasOwnProperty(checkProp)) {
//         return myObj[checkProp];
//     } else {
//         return "Not Found";
//     }

// }
// // Test here
// console.log(checkObj("ift"));

// Example 4
// setup
// let cars = [{
//     "234": {
//         "color": "purple",
//         "type": "minivan",
//         "registration": new Date('2017-01-03'),
//         "capacity": 7
//     }
// },

// {
//     "235": {
//         "color": "red",
//         "type": "station wagon",
//         "registration": new Date('2018-03-03'),
//         "capacity": 5
//     }
// }
// ]

// var carDataCopy = JSON.parse(JSON.stringify(cars));


// function updateCarData(id, prop, value) {
//     // if (cars[0][id].hasOwnProperty(prop)) {
//     //     delete cars[0][id][prop];
//     //     // console.log(cars[0][id][prop]);
//     // }
//     cars[0][id][prop] = value;
// }

// var newData = updateCarData(234, "typo", "roadstar");

// console.log(cars);

//*****************************************

//******** Prevent object Mutation *****
// Example 
// function freezeObj() {
//     "use strict";
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };

//     Object.freeze(MATH_CONSTANTS);

//     try {
//         MATH_CONSTANTS.PI = 88;
//     } catch (ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }

// const PI = freezeObj();

// console.log(PI);

//*****************************************

// *****  Destructuring ********
// example 1
var voxel = { x: 3.5, y: 70, z: 800 };

// old way
var a = voxel.x;  //a = 3.5
var b = voxel.y;  //b = 70
var c = voxel.z;  //c = 800

// new way: destructuring

const { x: a, y: b, z: c } = voxel;