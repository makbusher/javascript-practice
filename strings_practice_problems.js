// # 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

var firstName = "Mark";
var lastName = "Smith";

console.log(firstName + " " + lastName);

// # 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

var firstName = "Lee";
var lastName= "Green";

console.log(`${firstName} ${lastName}`);

// # 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

// const prompt = require("prompt-sync")({sigint:true}); 
// var word = prompt("Please enter a word:");

// if (word === "marco") {
//   console.log("polo");
// }

// # 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

var color1 = "blue";
var color2 = "green";
var color3 = "purple";

console.log("I like the colors " + color1 + ", " + color2 + ", and " + color3 + "!");

// # 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

var color1 = "blue";
var color2 = "green";
var color3 = "purple";

console.log(`I like the colors ${color1}, ${color2}, and ${color3}!`);

// # 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

// const prompt = require("prompt-sync")({sigint:true});
// var name = prompt("What is your name?");

// if (name !== "Santa") {
//   console.log("You're not Santa.");
// }

// # 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

var bookTitle = "The Night Circus";
var bookAuthor = "Erin Morgenstern";

console.log("The book is called " + bookTitle + " and it is written by the author " + bookAuthor + ".");

// # 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

var bookTitle = "The Night Circus";
var bookAuthor = "Erin Morgenstern";

console.log(`The book is called ${bookTitle} and it is written by the author ${bookAuthor}`);

// # 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

const prompt = require("prompt-sync")({sigint:true});
var password = prompt("Please enter a password");

if (password === "Joshua") {
  console.log("Shall we play a game?");
} else {
  console.log("Access Denied");
}

// # 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

var city1 = "Chicago";
var city2 = 'San Diego';
var city3 = "Seattle";

console.log(city1 + ", " + city2 + ", and " + city3 + " are all major US cities");

