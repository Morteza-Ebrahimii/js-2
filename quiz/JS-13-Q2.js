// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:
function outerFunc(x) {
    return function innerFunc(y) {
        return x + y;
    }
}
const result = outerFunc(2)
console.log(result(3));