//                          DAY 5
//              ****     FUNCTIONS     ****

// function showMessage(){
//     alert('Hello everyone!');
// }

// ...........
// function name(parameter1, parameter2, .... parameterN){

//     ...body...

// }

// *** Our new function can be called by its name: showMessage();***

// Local variables ****
// A variable declared inside a function is only visible inside that funtion.
// For example:
// ...................
// function showMessage() {
//     let message = "Hello, I'm JavaScript!";   // local variable

//     alert(message);
// }

// showMessage();    // Hello, I'm JavaScript

// alert(message);   // Error!!!  The variable is local to the function
// ...................


// The function has full access to the outer variable. It can modify it as well.

// ...................

// let userName = 'John';

// function showMessage(){
//     userName = "Bob";  // changed the outer variable

//     let message = 'Hello' + userName;
//     alert(message);
// }

// alert(userName);   // John    : Before the function call

// showMessage();

// alert(userName);   // Bob     : the value was modified by the function

// ...................

//       Parameters
// We can pass arbitrary data to functions using parameters.
// function showMessage(from, text) {
//     alert(from + ':' + text);
// }

// showMessage('Ann', 'Hello!');        // Ann: Hello!(*)
// showMessage('Anne', "What's up?");    // Ann: What's up(**)

// ...................

// function showMessage(from, text) {
//     from = '*' + from + '*';       // make 'from' look nicer

//     alert(from + ':' + text);
// }

// let from ="Ann";

// showMessage(from, 'Hello!');      //  *Ann*: Hello

// // the value of 'from' is the same, the function modified a local variable

// alert(from);            // Ann

// ...................

// **** A parameter is a variable listed inside the paranthesis in the function declaration(it's a declaration time term) ****

// **** An argument is the value that is passed to the function when it is called(it's a call time term) ****

// ...................
// Default values
// ****If a function is called, but an argument is not provided, then the corresponding value becomes undefined. ****

// function showMessage(from, text = "no text given") {
//     alert(from + ': ' + text);
// }

// showMessage('Ann');       // Ann: no text given

// this is also possible
// function showMessage(from, text = anotherFunction()){
//     // anotherFunction() only executed if no text given
//     // its result becomes the value of text
// }
// ...................

// function showMessage(text) {
//     //......

//     if (text === undefined) {
//         text = 'empty message';
//     }

//     alert(text);
// }

// showMessage();    // empty message
// showMessage('boom!')  // boom!

// ...................

// function showCount(count) {
//     // if count is undefined or null, show "unknown"
//     alert(count ?? "unknown");
// }

// showCount(0);      // 0
// showCount(null);   // unknown
// showCount();     // unknown

// ................ Returning a value ....................
// function sum(a, b) {
//     return a + b;
// }

// let result = sum(1, 2);
// alert(result);   // 3
// result = sum(4, 5);
// alert(result);

// ...................

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Do you have permission from your parents?');
//     }
// }

// let age = prompt('How old are you?', 18);

// if (checkAge(age)) {
//     alert("Access granted");
// } else {
//     alert("Access denied!");
// }

// ...................

// It is possible to use return without a value. That causes the function to exit immediately.

// for example

// function showMovie(age) {
//     if( !checkAge(age))  {
//         return;
//     }          

//     alert("Showing you the movie");
//     //.......
// }

// ...................

// function doNothing(){
//     return;
// }
// alert( doNothing() === undefined);  //true

// ...................

// Never Add a newline b/w return and the value
// return (
//     some + long + expression
//     + or +
//     whatever * f(a) + f(b)
// )
//  and it will work just as we expect it to.
//..........................

// TASK 1
// let age = prompt('age?');
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did your parents allow you?')
// }
// checkAge();


// TASK 2

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// let small = min(4, 5);
// alert(small);


// TASK 3

// let x;
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt(`Enter a number:`);
let n = prompt("Enter power to number");

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);

} else {
    alert(pow(x, n));
}
