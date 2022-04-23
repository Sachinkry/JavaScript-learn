
// Javascript tutorial- JAVASCRIPT INFO

// alert("I'm Javascript");
// alert("Let's slay 2022 together")

let message = 'Hello';

// alert(message);

// let user = "John";
// let age = "24";
// alert(user);

// let user = 'John',
//     age = 25,
// message = 'Hello';

message = 'Nice!';
// alert(message);

num = 67;
// alert(num);

const myBirthday = '18.04.1902';

// myBirthday = '01.01.1233';     .....error, can't reassign the constant
// alert(myBirthday);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ....when we need to pick  a color
let color = COLOR_ORANGE;
// alert(color);

let name = 'John',
    admin = name;
// alert(admin);

// alert("not a number" / 2);

// Strings
let str = "Hello";                           // Double quotes
let str2 = 'Single quotes are ok too';       // Single quotes
let phrase = `can embed another ${str}`;    // Backticks

//  Backtics or "Extended functionalityy qoutes" allow us to embed variables and expressions into a string by wrapping them in ${...},for example

let name1 = 'John'
// alert(`Hello, ${name1}!`);

// alert(`the result is ${1 + 2}`);

// Basic Data types
// 1. numbers
// 2. bigInt
// 3. Strings
// 4. null
// 5. undefined
// 6. objects
// 7. boolean
// 8. symbols


// INTERACTION: alert, prompt, comfirm
// alert('Hello!')

// prompt
// result = prompt(title, [default]);

// let age = prompt('How old are you?',);
// alert('Thanks!')
// alert(`You are ${age} years old!`);

// confirm
// syntax:::    result = confirm(question);
// example

// let isBoss = confirm("Are you the boss?");

// alert(isBoss);              // true if OK is pressed

// TASKS

// let name3 = prompt("What is your name?");
// alert(`Your name is ${name3}!`);


// TYPE CONVERSIONS
// String Conversion
let value = true;
// alert(typeof value);

value = String(value);
// alert(typeof value);

// Numeric Conversion
// alert('6' / '2');

let str1 = "123";
// alert(typeof str);

let num3 = Number(str);
// alert(typeof num3);

let age = Number('hello hello');

// alert(age);

// alert(Number('123'));
// alert(Number('123z'));
// alert(Number(true));
// alert(Number(false));

// Boolean Conversion
//false::   null  undefined  NaN  

// alert(Boolean(1));                 // true
// alert(Boolean(0));                 //false
// alert(Boolean("hello"));           //true
// alert(Boolean(""));                //false


// alert(Boolean("0"));                  //true
// alert((Boolean(" ")));                 //true

// BASIC OPERATORS

// let x = 1;
// x = -x;
// alert(x);             // -1, unary negation was applied

// let x = 1, y = 3;
// alert(y - x);             // 2, Binary minus subtracts values



// String catenation with binary +    ...................
let s = "my" + "string";
// alert(s);                  // mystring

// alert('1' + 2);             // "12"
// alert(2 + '3');             //"23"

// alert(2 + 3 + "1");         // "51" not "231"
// alert('1' + 3 + 2);         // "132" and not "15"


// alert(6 - '2');    // 4, converts '2' to a number
// alert('4' / '2');   // 2, converts both operands to numbers


//Numeric conversion, unary +       .....................
// let b = 1;
// alert(+b);     // 1

// let a = -2;
// alert(-a);    // -2

// alert(+true);      // 1
// alert(+false);     // 0


let apples = '2';
let oranges = '3';

// alert(apples + oranges);  // "23" , the binary plus concatenates

// alert(+apples + +oranges);   // 5

// the longer variant
// alert(Number(apples) + Number(oranges));

// VERY IMPORTANT

// let counter = 1;
// let a = ++counter;

// alert(a);        // 2

// // ............
// counter = 1;
// a = counter++;
// alert(a);         // 1


// If the result of increment/decrement is not used, there is no difference in which form to use.
// For example:

// let counter = 0;
// counter++;
// ++counter;
// alert((counter));    // 2

// let counter = 0;
// alert(++counter);  // 1

// alert(counter++);   // 0


// Increment / decrement among other operators   ...........
// let counter = 1;
// alert(2 * ++counter);    //4

//whereas
// alert(2 * counter++);     // gives value: 2




// COMMA     .........................
// Allows us to evaluate several expressions, dividing them with a comma(,). Each of them is evaluated but only the result of the last one is returned.
// For example:
// let a = (1 + 2, 3 + 4);    // notice the parenthesis

// alert(a);   // 7 (the result of 3 + 4)

// but its precedence is less than (=)
// like
// a = 1 + 2, 3 + 4 ;   // 3  ( 3+4 is ignored )


// let a = prompt("First number?");
// let b = prompt("Second number?");

// alert(a + b);     // 12
// alert(`The sum is ${+a + +b}`);

