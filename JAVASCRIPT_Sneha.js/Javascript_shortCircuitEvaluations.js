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
 // accessing data that may not exist
//  let user = {
//     name : "Sneha", 
//     email : "sneha@gmail.com"
//  };

//  console.log(user.name); // output will be Sneha right
//  let user = null;
//  console.log(user.name);
 //TypeError: Cannot read properties of null (reading 'name'), null has no properites

 //solution to this , use && 
 let user2 = null;
 console.log(user2 && user2.name);
// it will print null, this is how we prevented the error


// one of the biggest uses :- Practical use case 3 :- Conditional Rendering (React)
let isShifted = true;
// lets say u have a function called showpics()
function showpics(){
    console.log("Here are the pictures!!!");
}
/* 
or by using arrow-function
const showpics = () => {
    console.log("hello!!");
    }
 isShifted && console.log(showpics());
 // right now the function doesnot return anything and when there is no return value, it automatically will return undefined
 */

 // so, 
 isShifted && showpics();

 // ||- OR
 // if A is useful take A, otherwise go for B
 // if A is truthy - return A
 // if A is falsy - return B

 // Imagine a website where users can set username
 let username = "Alexa";
  let displayname = username || "Guests";
   console.log(displayname);

   // or 
   let username1;
   let displayname1 = username1 || "Guests";
   console.log(displayname1);
   // here username1 is undefined so it went to guests 

//or 
let username2;
let username3;
let displayname3 = username2 || username3;
console.log(displayname3);
// undefined is the output it given me, when both are falsy
