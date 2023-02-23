// 1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

var x = 10;

if (x === 10) {
  console.log(0); 
} else {
  console.log(-1);
}

// 2. Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

var number = 3;

if (number < 10) {
  console.log(-1);
} else if (number > 10) {
  console.log(1);
} else if (number === 10) {
  console.log(0);
}


// 3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

var a = 5;
var b = 12;

if (a && b < 10) {
  console.log(1);
} else {
  console.log(0);
}

// 4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

var z = 200;

if (z > 9000) {
  console.log(1);
} else {
  console.log(-1);
}

// 5. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

var c = 19;

if (c < 10) {
  console.log(9);
} else if (c >= 10 && c < 20) {
  console.log(19);
} else if (c >= 20 && c < 30) {
  console.log(29);
} else {
  console.log(-1);
}

// 6. Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

var number1 = 20;
var number2 = 8;

if (number1 > 10 || number2 > 10) {
  console.log(100);
} else {
  console.log(-100);
}

// 7. Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

var negative = -200;

if (negative < 0) {
  console.log(1776);
} else {
  console.log(1979);
}

// 8. Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

var d = 100;

if (d === 100) {
  console.log(100);
} else if (d === 99) {
  console.log(99);
} else {
  console.log(0);
}


// 9. Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

var e = -2;
var f = 4;

if (e < 0 && f > 0) {
  console.log(1);
} else {
  console.log(0);
}

// 10. Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

var m = 70;

if (m > 80) {
  console.log(5);
} else if (m > 60) {
  console.log(4);
} else if (m > 40) {
  console.log(3);
} else if (m > 20) {
  console.log(2);
} else {
  console.log(1);
}