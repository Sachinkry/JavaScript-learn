// DESTRUCTURING OBJECTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const personalInformation = {
    firstName: "Dylan",
    lastName: "Israel",
    city: "Austin",
    state: "Texas",
    zipcode: "73301"
};

const { firstName: fn, lastName: ln } = personalInformation;

// console.log(`${fn} ${ln}`);

// DESTRUCTURING ARRAYS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let names = ["Dylan", "Coding God", "Israel"];

// destructuring by index
let [firstName, middleName, lastName] = ["Dylan", "Coding God", "Israel"];

console.log(firstName);        // Dylan
console.log(`${middleName}: ${lastName}`);

// we can also overwrite values:
firstName = "Sachin"
console.log(`${middleName}: ${firstName}`);  // Coding God: Sachin

// OBJECT LITERALS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function addressMaker(city, state) {
    const newAddress = { newCity: city, newState: state };
    // with object literal
    const newAddress1 = { city, state };

    console.log(newAddress);
    console.log(newAddress1);
}

addressMaker("Delhi-NCR", "New Delhi");


// FOR OF LOOPS  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}

console.log(total);

// for of loop : challenge $$$$$$$$$$$$

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris" },
    { name: "Kate", city: "Sydney" },
];

for (const student of students) {
    console.log(`${student.name} lives in ${student.city}`);
}

// SPREAD OPERATOR  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Arrays
let contacts = ["Mary", "Joel", "Raj"];

// let personalFriends = contacts;
let personalFriends = ["David", ...contacts];

contacts.push("John");

console.log(contacts);  // ["Mary", "Joel", "Raj",, "John"]
// console.log(personalFriends); // ["Mary", "Joel", "Raj",, "John"]

// Why is this: contacts and personalFriends having same value. 
// Because we're assigning a reference of contacts to personalFriends. 

// Spread operator is used to solve this: line: 75

// line 75: we are making a copy of the object
console.log(personalFriends); // ['David', 'Mary', 'Joel', 'Raj']

// Objects
let person = {
    name: "Jay",
    city: "Jalandhar",
    lang: "C++",
}

let employee = {
    ...person,
    salary: 50000,
    position: "Developer Advocate"
}

console.log(person);
console.log(employee);


// REST OPERATOR >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// it allows us to add as many arguments as we want to a function, quite cool, isn't it?

function add(...nums) {
    console.log(nums);
}

add(4, 5, 6, 7, 7, 8);

// includes()  >>>>>>>>>>>>>>>>>>>>>>>>>>>>

let numArray = [1, 2, 3, 4, 5, 6];

console.log(numArray.includes(3));  // true
console.log(numArray.includes(8));  // false


// padStart() & padEnd() >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// they allow us to add values to start and end of a string depending on the length of the string.

let example = 'Dylan';
let exampleTwo = 'Dylan Huges';

console.log(example.padStart(10, 'a'));  // aaaaaDylan
console.log(exampleTwo.padStart(10, 'a'));  // Dylan Huges : because there is no room left

console.log(example.padEnd(10, 'a'));  // Dylanaaaaa
console.log(exampleTwo.padEnd(10, 'a'));  // Dylan Huges

// challenge

let exampleThree = 'YouTube.com/CodingTutorials360';

console.log(exampleThree.padStart(100).length); // 100
console.log(exampleThree.padEnd(1));  // will ignore this line of code


// FETCH   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
    });


fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "POST",
    body: JSON.stringify({
        postId: 1,
        name: "Dylan",
        emal: "dylansemail231@gmail.com",
        body: "That was dope!"
    })
})
    .then(response => response.json())
    .then(data => console.log(data));


// challenge $$$$$$$$$$$$$$$
fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data));



// Async and await >>>>>>>>>>>>>>>>>>>>>>>>>>>>
const apiUrl = "https://api.chucknorris.io/jokes/random";

async function printJoke() {
    const joke = await fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.value);

    console.log(joke);
}

printJoke();