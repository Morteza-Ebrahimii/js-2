//? 6. write a reduce method to get the sum of all array items

//! Answer:
const arr = [31, 1, 7, 12, 27];
const sum = arr.reduce((num1,num2) => {
return num1 +=num2
});
console.log(sum);