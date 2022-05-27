// A primitive
// - is a value of primitive type
// - 7 primitive types: strings, numbers, booleans, bigint, symbol, null and undefined

// An object 
// - is capable of storing multiple values as properties
// - functions are objects

// one of the best thing about objects is that we can store a function as one of its properties.

// #### A primitive as an object
// JS allows access to methods and properties of primitives(strings, numbers, boolean, symbols)

//  Example:
let str = "Hello!";

alert(str.toUpperCase());   // HELLO!

// What happens over here:
// 1. this str is primitive, so an object is created that knows the value of the string and has useful methods like toUpperCase().

// 2. that method runs and returns a new string ("HELLO!")

// 3. the special object is destroyed leaving the str alone
// .................

// Objects are always truthy inside if

// null/undefined have no methods 