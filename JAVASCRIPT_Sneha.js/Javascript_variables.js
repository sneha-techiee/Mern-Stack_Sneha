/* Javscript has three distinct types of variables
which are:- var, let and const 

*/
var a = 10; // var is a global variable and can be re-declared and updated anywhere in the program 
// var is re-declared, let me give an example 
var a =15;
// var is updated
console.log(a); //output will be 15 because var is updated and re-declared, but it is not recommended to use var becausae it can lead to unexpected behavior and bugs in the code. It is better to use let and const for variable declaration in modern JavaScript. 
// lets see how it causes errors when we use var
function varTest(){
    var x = 1;
    if(true){

        var x = 3; // this x is the same as the x declared above because var is function scoped, so it can be re-declared and updated within the same function scope
        // this will not create a new variable x, but will update the exisitng x variable declared above and now it will print 3 instead of 1
    console.log(x); // output will be 3
    console.log("This is the value of x inside the if block: " + x); // output will be 3, + x is used to concatenate the string and the value of x, so it will print "This is the value of x inside the if block: 3"
    }
    // but we have to call the function to see the output
    
}
varTest(); // put varTest outside the function to see the output of the function, if we put it inside the function it will not work because it will be a local variable and it will not be accessible outside the function. and one more reason, it will cause an error because it will be a recursive function and it will call itself indefinitely and it will cause a stack overflow error.
let b = 20; // let is a block-scoped variable and can be updated but not re-declared within the same scope
// Now, let is block-scoped, let me give an example
function letTest(){
    let y = 1;
    if(true){
        let y =3;
        console.log(y); // output will be 3 because let is block-scoped, so it will create a new variable y within the if block and it will not affect the y variable declared above, so it will print 3 instead of 1
    }
    console.log(y); // output will be 1 because let is block-scoped, so it will create a new variable y within the if block and it will not affect the y variable declared above, so it will print 1 instead of 3
}
letTest(); // here it will print 3 because let is block-scoped, so it will create a new variable y within the if block and it will not affect the y variable declared above, so it will print 3 instead of 1
// Because let is block-scoped, JavaScript creates a new variable that exists only inside {}.
/* var ignores {} blocks. , if block if{}
A junior characterizes var as more 'flexible' than let because reassignments always work. A senior says the lecture shows var can cause bugs by leaking out of blocks. The senior's perspective aligns with the lecture.

Your Answer: TRUE

Status: INCORRECT

Explanation: Incorrect answer. Selected answer(s): TRUE. The senior's perspective is correct because var is function-scoped and can be re-declared and updated within the same function scope, which can lead to unexpected behavior and bugs in the code. On the other hand, let is block-scoped and cannot be re-declared within the same scope, which helps to prevent such issues. Therefore, the statement "var ignores {} blocks" is true, and the senior's perspective aligns with the lecture.
let respects {} blocks.*/
const c = 30;// const is block-scopped variable and cannot be updated or re-declared within the same scope 
// block-scopped variable is a variable that is only accessible within the block of code in which it is defined


// Time to understand const :- We can understand this through an example

function constTest(){
const z =1;
console.log(z);

// const z =3;
console.log(z); // output will be an error, SyntaxError: Identifier 'z' has already been declared because const is block-scoped and cannot be re-declared withtin the same scope, so it will throw an error when we try to re-declare the variable z within the same function scope.
}
console.log(constTest());

// Also, while building a project, make sure to use let(10%) and const (80-90%) 
const API_KEY = "123344445";
const OPENAI_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";  // these are constants because they are not going to change throughout the program, so it is better to use const for these variables to prevent accidental re-assignment and to make the code more readable and maintainable.    



//Exercise on variables 
// Create variables:

// name
// age
// college
// branch
// sgpa
// isStudent

const name = "Sneha";
const age = 19;
let college = "Chandigarh group of colleges";
let branch = "B.Tech CSE";
let sgpa = 8.86;
const isStudent = true;


// undefined
let x;
console.log(x)
// it will give u undefined, because u have declared it but haven't assigned any value.
