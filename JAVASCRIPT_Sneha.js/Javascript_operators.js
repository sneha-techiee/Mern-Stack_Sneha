// == checks values only, javascript coverts the operands to the same type before making the comparison, for example, if we compare a string and a number, javascript will convert the string to a number before making the comparison
// === checks values and types both, for example 5 === "5" will return false because the types are different, even though the values are same but one is number and other is string
// operators in javascript
// 1. Arithmetic Operators, lets understand these through an example, we will create a simple calculator that will perform basic arithmetic operations like addition, subtraction, multiplication and division
function calculator(num1, num2) {
    // if u want to take any number of arguments in a function then we can use rest operator, lets see how
    /* function calculator(...nums){
console.log("Enter operator : +, -, *, /");
prompt is not recognised in node.js, we will learn readline module to take input from the user, lets see how readline works in javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

        readline.question("Enter operator: ", (operator) => {   
if(operator === "+"}

console.log(`Addition is ${result}`);
the above statement means the same as console.log('Addition is :' + result)

*/
}
