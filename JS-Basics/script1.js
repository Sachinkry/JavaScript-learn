// ........................  DAY 3  .......................
// alert(2 > 1);
// alert(2 == 1);
// alert(2 != 1);

let a = 0;
// alert(Boolean(a));      // false

let b = "0";
// alert(Boolean(b));         // true


// alert(a == b);             // true



// A regular equality check == has a problem. It cannot differentiate 0 from false:

// alert(0 == false);        // true

// alert('' == false);       // true

// ...... A strict equality operator === checks the equality without type conversion........

// alert(0 === false);       // false


// Strict non-equality operator:  !==

//....There's a non-intutive behavior when null or undefined are compared to other values.........

// alert(null === undefined);    // false

// alert(null == undefined);    // true

// alert(null > 0);     // false
// alert(null == 0);    // false
// alert(null >= 0);    // true

// alert(undefined > 0);      // false
// alert(undefined < 0);      // false
// alert(undefined == 0);     // false

// true;   false  ; false ; true ; false ; false ; false 

// .................................................................

// CONDITIONAL BRANCHING: IF, '?'

// The "if" statement.......................
// let year = prompt('In which year was ECMAScript-2015 specification published?');

// if (year == 2015) {
//     alert('You are right!');
// }

// if (year == 2015) {
//     alert('You are right! \nYou are so smart');
// }
// else {
//     alert("How can you be so wrong?");
// }

// Conditional operator '?' ....................

// let accessAllowed;
// let age = prompt("How old are you?");

// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

// alert(accessAllowed);

// .... Conditional operator or "question mark" is called ternary operator bcoz it has three operands.
// SYNTAX:::   let result = condition ? value1 : value2;

// let accessAllowed = (age > 18)? true: false;
// or
// let accessAllowed = age > 18;

// ...   Multiple '?'     ...........

// let age = prompt('age?', 18)

// let message = (age < 3) ? 'Hi, baby!' :
//     (age < 18) ? 'Hello!' :
//         (age < 100) ? 'Greetings!' :
//             'What an unusual age!';

// alert(message);

// Non-traditional use of '?'

// let company = prompt('Which company created JavaScript?');
// (company == 'Netscape') ?
//     alert("Right!") : alert("Wrong!");

// TASK 1....
// let guess = prompt("What's the official name of JavaScript?");
// if (guess == 'ECMAScript') {
//     alert('Right!');
// } else {
//     alert('You dont know? \n "ECMAScript"!');
// }

// TASK 2  .....
// let number = prompt('Enter an integer:');
// if (number > 0) {
//     alert(1);
// } else if (number == 0) {
//     alert(0);
// } else {
//     alert(-1);
// }

// TASK 3 ....
// let result = (a + b < 4) ? 'Below' : 'Over';

// TASK 4
// let message = (login == 'Employee') ? 'Hello' :
//     (login == 'Director') ? 'Greetings' :
//         (login == '') ? 'No login' :
//             '';


//...................................................................

//                         LOGICAL OPERATORS
// There are four: 
// ||        OR
// &&        AND
// !         NOT
// ??        Nullish Coalescing

//                       ****    OR    ****
// alert(true || true);    // true
// alert(false || true);   // true
// alert(true || false);   // true
// alert(false || false);  // false

// **** If an operand is not a boolean, it's converted to a boolean for the evaluation. **********

// if(1 || 0){
//     alert('truthy!');
// }

// let hour = prompt('Enter hour:');

// if (hour < 10 || hour > 18) {
//     alert('The office is closed.')
// }

// ****  A chain of OR || returns the first truthy value or the last one if no truthy value is found.   ****

// alert(1 || 0);                  // 1 (1 is truthy)
// alert(null || 1);               // 1 (1 is the first truthy value)
// alert(null || 0 || 1);          // 1 (the first truthy value)
// alert(null || undefined || 0);  // 0 (all falsy, returns the last value)

// **** An interesting use of OR: ****
// true || alert("not printed");    // will not show modal window
// false || alert('printed');       // will show 'printed'

//                    ****     AND     ****

// 1. It evaluates from left to right.
// **** 2. AND returns the first falsy value(i.e. all were truthy)   or returns the last value if none were found.  ****

// // alert(1 && 0);                  // 0
// alert(1 && 5);                  // 5

// alert(null && 5);               // null
// alert(0 && 'no matter what');   // 0

// alert(1 && 2 && null && 3);     // null
// alert(1 && 2 && 3);             // 3, the last one

// *** Precedence of AND && is higher than OR ||  ***


//                   ****       ! NOT     ****

// syntax::: result = !value;

// It accepts a single argument, converts it to a boolean type, and returns the inverse value.

// alert(!true);     // false
// alert(!0);        // true

// **** A double NOT !! is sometimes used for converting to a boolean type:
// alert(!!"non-empty string");     // true
// alert(!!null);                   // false

// ******** The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||


// if (age < 14 && age > 90)

// if (!(age >= 14) && !(age <= 90) )


// ........     MAJOR TASK     .........

// let login = prompt("Who's is there?");

// if (login === 'Admin') {

//     let password = prompt('Password?');

//     if (password === 'TheMaster') {
//         alert('Welcome!');
//     } else if (password === null) {
//         alert('Canceled');
//     } else {
//         alert('Wrong password!');
//     }

// } else if (login === null) {
//     alert('Canceled');
// } else {
//     alert("I don't know you!");
// }


// ....... NULIISH COALESCING OPERATOR'??'  .........

// The result of  a ?? b is:
// ***  if a is defined, then a, 
// ***  if a isn't defined, then b.

// ****  In other words, ?? returns the first argument if it's not null/undefined. Otherwise, the second one.   ****

let user;
// alert(user ?? "Anonymous");    // Anonymous (user not defined)

user = 'John';
// alert(user ?? "Anonymous");    // John (user defined)


// We can also use a sequence of ?? to select the first value from a list that isn't null/undefined........



