/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* They are are 4 main data types
which are:-
NUMBER:- just as the name inscribed, these data types can be any number from the lowest to the highest irrespective of whether its a negative number or positive one. it can also be in form a decimal place E.g(4.56), sometimes we can perform some operations that cannot produce an output E.g(50/0 or -2/0), in this case if it was a positive operation, it will return its outcome as +INFINITY, but if its a negative operation, it will return its output as -INFINITY, also we have some operations that are impossible E.g(infinity * 0 or console.log +2) this will return its output as NaN meaning NOT A NUMBER
STRING:- while string is a set of characters, they are basically a text or letters, strings can be delimited by ", ', or ` they are written inside one of this symbols and cannot be used together meaning if you are using a double quotation, it has to end in a doble quotation and same with the others, strings can also contain an unlimited set of characterers in contrary to this, a string can also be an empty string in this case its a string that has 0 length, no characters but its still a string and thuis is how we define an empty string ("")
BOOLEAN;- A Boolean is a datatype that returns either of two values i.e. true or false, If you need to know “yes” or “no” about something, then you would want to use the boolean function. It sounds extremely simple, but booleans are used all the time in JavaScript programming, and they are extremely useful. Anything that needs to be “on” or “off”, “yes” or “no”, “true” or “false”, or which just has a temporary purpose, is usually a good fit for booleans.
UNDEFINED AND NULL:- although their meaning might sound the same but there is a subtle difference between undefined and null, UNDEFINED means a variable has been declared but has not been assigned a value while NULL is an assignment value, it can be assigned to a variable as a representation of no value. to break it down a little more, a null is usually implemented on purpose while an undefined is often an error
 */

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/* to keep it simple and short Variables are like a named containers used for storing data */

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

// let firstNumber = 12;
// let secondNumber = 20;
// let sumOfNumber = firstNumber + secondNumber;
// console.log(sumOfNumber);

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

// let x = 12;
// console.log(x);

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

// const name = "John Doe";
/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

// let givenNumber = 12;
// let x = 12;
// let subtractionBetweenNumber = givenNumber - x;
// console.log(subtractionBetweenNumber);

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

// let name1 = "john";
// let name2 = "John";
// let isNameEqual = name1 === name2;
// console.log(isNameEqual);
// console.log(name1.toLowerCase() === name2.toLowerCase());
/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

// let x = 1;
// if (x === 1) {
//   x = "one";
//   console.log(x);
// }
/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

let x = 9;
let y = 10;
let isXGreaterThanY = x > y;
if (x > y) {
  console.log(isXGreaterThanY);
} else {
  isXGreaterThanY = false;
  console.log(isXGreaterThanY);
}
// in ternary form

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
