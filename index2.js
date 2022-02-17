/*1. Write  code to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
 */
// let a = 5;
// let b = 6;
// let c = 7;
// let s = (a + b + c) / 2;
// let p = Math.sqrt(s * (s - a)(s - b)(s - c));
/*
2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.

*/
// let a = 5;
// let b = 10;
// if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
//   console.log(true);
// } else {
//   console.log(false);
// }
/*
3. Create a variable which concatenates two strings.
*/
let str = "Strive " + "School";
/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
*/
let x = 3;
let y = 6;
let z = -1;

if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}
/*
 5. Write code to find the average of to given integers.
 */
let d = 4;
let h = 5;
let average = (d + h) / 2;
console.log(average);

/* 
 6. Find the longest of two given strings
 */

let str1 = "aaaa";
let str2 = "bb";
if (str1.length > str2.length) {
  console.log("str1 is longer");
} else {
  console.log("str2 is longer");
}
/**
  7. Write code to check whether a value is an integer or not.
  */
console.log(typeof str1);
if (typeof d === "number") {
  console.log(true);
} else {
  console.log(false);
}

/**
   8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
   */
let num = 400;
let per = 20;
let percentage = (400 / 100) * 20;
console.log(percentage);
/**
  9. Write code to check if a given number is even or odd.
 */
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}
