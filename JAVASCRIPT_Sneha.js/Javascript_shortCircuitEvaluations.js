// Short-Circuit Evaluations in js
// We use logical operators :- && AND ,  || :- OR, ?? :- Nullish Coalescing 
// Javascript evaluates from left to right, but it stops when the answer is already decided and we call it Short-Circuiting 

// && :- It runs when all the conditions are truthy
console.log(true && "Hello"); // First statement is true so it will check second and print the second one 
console.log(false && "hello"); // first statement is false so it will never check the second one, alright and it will print the false statement 
//Real values
console.log(10 && 20); // checks 10, as 10 is truthy, it will check 20 and return 20 as an output
console.log('' && 20);// print an empty character 
console.log(0 && 20); // prints 0
console.log(true && false);// False
console.log(true&& 0);//print 0
console.log(null && true);
// Summarizing, if both are true, it will print 2nd statement 
// if first is false, it will not check the second one and will print the first one, whether it is an empty string or 0 or false or null


// Understading its practical use case 1
// conditional rendering:-
let isloggedin = true;
 isloggedin && console.log("Show Dashboard");

 let isentered = false;
 isentered && console.log("guests have arrived");

 //if the variable is true, console.log() will print only then

 //practical use case 2 :- prevent error 
 