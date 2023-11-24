// According to your js11 session, write a code that shows why we shouldn't use var?

//1------------------------------
var age = 22
// a big program here
var age = 23
console.log(age);

//2-------------------------------
if (true) {
    var name = "morteza"
    console.log(name);
}
 var name = "ali"
console.log(name);

//3--------------------------------
 for (var i = 0; i <= 4; i++) {
    console.log(i);
 }
 console.log(i);

 //4------------------------------
 console.log(a);
 var a; 
 a = 3 //there is if use var give us (undifind), but if use let return error
 