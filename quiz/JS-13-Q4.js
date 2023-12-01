//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// exampel

//*var can reassigned and redeclaration
var names = "morteza";
var names = "ali";
console.log(names);
//
var lastName = "ebrahimi"
lastName = "kia";
console.log(lastName);



// todo:arrow function
//*arrow function simple and shorter than regular functoin way to create functions.when we use arrow function, this mathod can not worked correct,this always points to the same place where it is but in the arrow function points to the window.

function regularFunc(x,y) {
    return x + y;
}
//
let arrowFunc = (x,y) => x + y;


// todo:template string instead of "" and ''
//*A string literal is the thing that you, a human writing or reading code, can recognize as the sequence "..." or '...'.
let name = 'morteza';
let last = "ebrahimi";
console.log(name);
console.log(last);
//*But I do not understand the difference between those.

// todo:destructuring

//*object destructuring
const food = {
    localFood : "shole",
    northFood : "fesenjoon",
    aghilFood : "falafel",
    isDelicious : true,
    prise : 99
}
const {localFood,northFood,aghilFood,isDelicious,prise} = food;
console.log(` im sorry i know ${aghilFood} is not a food is a Culture.`);
//! In the object, the order of destruction does not matter.

//*array destructuring
const arrayFood = ["shole","fesenjon","falafel", true, 99] ;
const [firstFood,secondFood,thirdFood,isDeliciouss,prises] = arrayFood
console.log(` im sorry i know ${thirdFood} is not a food is a Culture.`);
//! In the array, the order of destruction is important.
