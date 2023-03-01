// # 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

var person = {firstName: "Mark", lastName: "Smith", email: "marksmith@email.com"};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

// # 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

var people = [
  {firstName: "Lily", lastName: "Greene"},
  {firstName: "Jake", lastName: "Jackson"},
  {firstName: "Grace", lastName: "Warner"}
];

console.log(people[0].firstName + " " + people[0].lastName);

// # 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

var menu = {hamburger: 6, fries: 3, iceCream: 2};
menu["soda"] = 2;
console.log(menu);

// # 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

var book = {title: "Gods of Jade and Shadow", author: "Silvia Moreno-Garcia", pages: 338, language: "English"};
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.language);

// # 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

var books = [
  {title: "The Cave Dwellers", author: "Christina McDowell"},
  {title: "Parable of the Sower", author: "Octavia Butler"},
  {title: "Gods of Jade and Shadow", author: "Silvia Moreno-Garcia"}
];
console.log(books[2].author);

// # 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

var stateCapitals = {Indiana: "Indianapolis", Illinois: 'Springfield', Montana: "Helena"};
stateCapitals["Washington"] = "Olympia";
console.log(stateCapitals);

// # 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

var laptop = {brand: "Apple", model: "MacBook Pro", year: 2016};
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.year);

// # 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

var laptops = [
  {brand: "Apple", model: "MacBook Pro"},
  {brand: "Microsoft", model: "Surface"},
  {brand: "Dell", model: "XPS 13"}
];

console.log(laptops[1].model);

// # 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

var definitions = {prolific: "(of a plant, animal, or person) producing much fruit or foliage or many offspring", integrity: "the quality of being honest and having strong moral principles; moral uprightness"};

definitions["unification"] = "the process of being united or made into a whole";
console.log(definitions);

// # 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

var shirt = {brand: "Nike", color: "red", size: "large"};
console.log(shirt.size);
console.log(shirt.color);
console.log(shirt.brand);