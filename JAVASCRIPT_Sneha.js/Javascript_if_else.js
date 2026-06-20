// // If and else statement in javascript use with functions 
// // let's understand if and else statement through an example, we will create a result of students of a class amd  we will give them grades accordingly 
// // we take input from user and will calculate average marks of the class, basically a proper score card

// function studentResult(name){
//    let maths = Number(prompt("Enter marks of maths :"));
//    let science = Number(prompt("Enter marks of science :")); 
//    let english = Number(prompt("Enter the marks of english:"));
//    let average = (maths + science + english) / 3;
//    console.log("------------------------------");
//    console.log("The average marks of the student is :" + average);
//    console.log("------------------------------");
//    if(average >= 90){  
//     console.log("The grade of the student is A+, 😎");  
//    }
// else if(average >= 80){
//     console.log("The grade of the student is A, 😎");
// }
// else if( average >= 70){
//     console.log("The grade of the student is B, 🙂");
// }
// else 
// {
//     console.log("umm, next time!");
// }

   
// }

// studentResult("Sneha"); // here we are calling the function studentResult and passing the name of the student as an argument, so it will calculate the average marks of the student and give the grade accordingly.
 // This we need to correct it 
 // Student Result Calculator

function studentResult(name, maths, science, english) { // data types are not needed in javascript, we can directly pass the values as arguments while calling the function, but for better understanding we can use data types in comments
// using datatypes in comments will be :- 
// name: string
// maths: number
// science: number
// english: number
    let average = (maths + science + english) / 3;

    console.log("------------------------------");
    console.log("Student Name:", name);
    console.log("Maths:", maths);
    console.log("Science:", science);
    console.log("English:", english);
    console.log("Average Marks:", average);
    console.log("------------------------------");

    if (average >= 90) {
        console.log("Grade: A+ 😎");
    }
    else if (average >= 80) {
        console.log("Grade: A 😎");
    }
    else if (average >= 70) {
        console.log("Grade: B 🙂");
    }
    else {
        console.log("Grade: Needs Improvement 😅");
    }
}

studentResult("Sneha", 95, 88, 92);
// for now we have to manage with this code, after that we will learn readline
studentResult("Khushi", 85, 87, 90);
studentResult("amit", 80, 80, 80);

