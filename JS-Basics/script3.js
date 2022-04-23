// .....................     DAY 4    ..........................

//                    LOOPS: while and for

//  The "while" loop...................
// let i = 0;
// while (i < 3) {            // shows 0, then 1, then 2
//     alert(i);
//     i++;
// }

// A single execution of the loop body is called an iteration.

// let i = 3;
// while (i) {        // when i becomes 0, the condition becomes falsy, and the loop stops.
//     alert(i);
//     i--;
// }

// let i = 3;
// while (i) alert(--i);


// The "do...while" loop...
// let i = 0;
// do{
//     alert(i);
//     i++;
// } while(i < 3);


//                      The "for" loop

// for(let i = 0; i < 3; i++){
//     alert(i);
// }

// for(let i = 0; i < 3; i++){
//         alert(i);        // 0, 1, 2
// }
// alert(i);      // error,  no such variable


// Breaking the loop

// let sum = 0;
// while (true) {
//     let value = +prompt("Enter a number");

//     if (!value) break;

//     sum += value;
// }
// alert('Sum:' + sum);


// Continue to the next iteration

// for (let i = 0; i < 10; i++){
//     // if true, skip the remaining part of the body
//     if(i % 2 == 0) continue;

//     alert(i);     // 1, then 3, 5, 7, 9
// }

// for (let i = 0; i < 10; i++) {

//     if (i % 2) {
//         alert(i);
//     }
// }

// Labels for break/continue

// for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//         let input = prompt(`Value at coords ( ${i}, ${j} )`, '');

//     }
// }

// alert('Done!');


// outer: for (let i = 0; i < 3; i++) {

//     for (j = 0; j < 3; j++) {

//         let input = prompt(`Value at coords (${i},${j})`);

//         // if an empty string or canceled, then break out of both loops
//         if (!input) break outer;


//         // do something with the value.......

//     }
// }

// alert('Done!')


//    TASK 1
// for (let i = 2; i <= 10; i++) {

//     if (i % 2 == 0) alert(i);

// }

//    TASK 2
// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

//      TASK 3
// let num = prompt("Enter a number:");
// while ((num < 100) || (num === null)) {

//     num = prompt('Enter a number:');


// }

// if ((num < 100) || (num === null) || (num === '')) {
//     prompt('Enter a number:')
// } else {
//     prompt('Enter a number:')
// }

//       TASK 4
// let n = prompt('Enter a positive number:');

// nextPrime:
// for (let i = 2; i <= n; i++) {

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     alert(i);

// }

//...................................................................//                          DAY 5

// A switch statement can replace multiple if checks.

// let a = 2 + 2;

// switch (a) {
//     case 3:
//         alert('Too small');
//         break;
//     case 4:
//         alert('Exactly!');
//         break;
//     case 5:
//         alert('Too big');
//         break;
//     default:
//         alert("I don't know such values");
// }


// Any expression can be switch/case argument
// let a = "1";
// let b = 0;

// switch (+a) {
//     case b + 1:
//         alert("this runs, because +a is 1, exactly equals b + 1");
//         break;

//     default:
//         alert("this doesn't run");

// }

//Grouping of "case"
// Several variants of case which share the same code can be grouped.

// let a = 3;
// switch (a) {
//     case 4:
//         alert('Right!');
//         break;

//     case 3:            // Grouped two cases
//     case 5:
//         alert('Wrong!');
//         alert("Why don't you take a math class?");
//         break;

//     default:
//         alert('The result is strange. Really.');
// }

// Type matters
// Let's emphasize that the equality check is always strict. The values must be of the same type to match.

// let arg = prompt("Enter a value?");
// switch (arg) {
//     case '0':
//     case '1':
//         alert('One or zero');
//         break;

//     case '2':
//         alert('Two');
//         break;

//     case 3:
//         alert('Never executes!');
//         break;
//     default:
//         alert('An unknown value');

// }


//         TASK 1
// if (browser === 'Edge') {

//     alert("You've got the Edge!");

// } else if ((browser === "Chrome")
//         || (browser === "Firefox")
//         || (browser === "Safari") 
//         || (browser === "Opera")) {

//     alert("Okay we support these browsers too");

// } else {
//     alert("We hope that this page looks ok!");
// }

let a = +prompt('a?');

switch (a) {

    case 0:
        alert(0);
        break;

    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert('2,3');
        break;

}