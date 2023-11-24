// ? Question-1 :Using an example, explain the difference between block,global and function scope in variables.
// !example:

//{
//  example one //here is block scope
// }
// function name(params) {
// example two //here is function scope   
// }
// example three //here is global scope

// (example one)
//1- When we use let and const declared inside a { } block cannot be accessed from outside the block 
// but if use var we can use it outside the block .
//2- inside the block scope we can nested everything

// (example two)
//1- When we use let, const and var declared inside a function scope cannot be accessed from outside the block 

// (example three)
// Global scope can be accessed from anywhere in a JavaScript program.
// global variables can overwrite window variables.
// Any function, including the window object, can overwrite your global variables and functions.
