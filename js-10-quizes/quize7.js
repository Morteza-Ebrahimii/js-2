//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

//!  Answer:
const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
function moreThan6(num) {
    return array.filter((num) => num.length > 6).every((num) => num.length < 10);
} console.log(moreThan6());