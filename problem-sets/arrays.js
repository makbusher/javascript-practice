// # 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

var words = ["apple", "orange", "pear"];
words.push("kiwi", "pineapple");
console.log(words);

// # 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

var letters = ["a", "b", "c", "d"];
letters[1] = 32;
console.log(letters);

// # 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

var numbers = [1, 2, 3, 4, 5];
var i = 0; 
while (i < numbers.length) {
  console.log(numbers[i]);
  i += 1;
}

// # 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

var numbers = [2];
numbers.push(3, 4, 5);
console.log(numbers);

// # 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

var strings = ["great", "awesome", "excellent"];
strings[2] = strings[2].toUpperCase();
console.log(strings)

// # 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

var names = ["Lillith", "Merida", "Silas"];
var index = 0;
while (index < names.length) {
  console.log(names[index]);
  index += 1;
}

// # 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

var strings = ["dog", "cat"];
strings.push("rabbit");
console.log(strings);

// # 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

var numbers = [32, 33, 34, 35, 36];
numbers[0] = numbers[0] * 10;
console.log(numbers);

// # 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

var numbers = [16, 39];
var i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i += 1;
}

// # 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

var countries = ["Albania", "Senegal", "Egypt"];
countries.push("Ethiopia");
console.log(countries);