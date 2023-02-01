// JS Section 2

// Lesson 32: Activating strict mode

'use strict';

/*

// must be first line of code, applies to the entire script
// helps aoid accidental errors
// it forbids us from doing some things
// creates visible errors for things that would normally be silent

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // intentional error. generates "Uncaught ReferenceError: hasDriverLicense is not defined"
if (hasDriversLicense) console.log(`I can drive.`);

// reserves some variable names for future use
// interface, private



// Lesson 33: Functions

// like a variable for a collection of code

function logger() {
    console.log(`My name is Kevin.`);
}

// invoking, running, calling the function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(3, 8);
console.log(appleJuice);

console.log(fruitProcessor(4, 2));

const appleOrangeJuice = fruitProcessor(1, 8);
console.log(appleOrangeJuice);

// functions have parameters, they become arguments when using actual values

// "Don't Repeat Yourself"
// "DRY code"



// Lesson 34: Function declarations v. Expressions

// Function declaration
function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    // return age;
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
// declarations can be called before they are defined


// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
// expressions cant be called before they are defined

// functions are just values, can be stored in a variable

// personal choice which to use

// Lesson 35: Arrow function
// added in ES6. shorter and faster

// Arrow function (a kind of function expression)
// no curly braces, return is implicit
// good for simple one liner functions
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

// multi line example
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age;
    // return retirement; // can only be omitted in one liner functions
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, "Kevin"));
console.log(yearsUntilRetirement(1980, "Bob"));

// the longer and more parameters used in an arrow function, the less useful it is compared to a function expression



// Lesson 36: Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}



function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 4));


// Lesson 37: Reviewing Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement; // return will immediately escape the function
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1984, 'Kevin'));
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Bob'));



// Lesson 38 : Coding Challenge #1

// Lesson 39: Introduction to Arrays

// arrays are a data structure. A container we can throw in multiple variables

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// literal syntax for array declaration
const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

// Can use the Array function instead of square brackets
const years = new Array(1991, 1984, 2008, 2020);

// zero based, counting from 0
console.log(friends[0], friends[2]);

// not zero based, counting from 1
console.log(friends.length);

// can use an expression (something that produces a value) in the square brackets
console.log(friends[friends.length - 1]);

// mutate the array
friends[2] = 'Jay';
console.log(friends);

// even if the array is declared with a const, it can be mutated. it is not a primitive value. only primitive values can't be mutated after being declared by const
// can't replace the entire array, only values

// not all data need to be the same type
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);


// Lesson 40 Basic Array Operations (Methods)

// methods are like array operations

const friends = ['Michael', 'Steven', 'Peter'];

// push is a method (a kind of function) adds elements to the end of an array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// the unshift method adds elements to the beginning of an array
friends.unshift('John');
console.log(friends);

// pop method the opposite of the push method. removes the last element of the array
friends.pop(); // no argument needed
const popped = friends.pop();
console.log(friends);
console.log(popped);

// shift removes the first element
friends.shift(); //no arguemnt needed
console.log(friends);

// indexOf gets the index number of an element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // doesn't exist, returns -1

// indexOf alternative
// includes returns boolean
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // tests with strict equality. 23 the string is different from 23 the numnber
console.log(friends.includes(23)); // will work

if (friends.includes('Steven')) {
    console.log(`You have a friend called Steven.`);
}


// Coding Challene 6

// Lesson 42: Introduction to Objects

// Another data structure, in addition to arrays

// in arrays, the individual data can't be given names, only index numbers

// object literal syntax (using curly braces)
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

// the object _jonas_ has 5 properties

// use arrays for more ordered, structured data, objects better for other uses
// objects can be in any order


// Lesson 43: Dot v. Bracket Notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

// using bracket retrieval allows us to put an expression in the brackets

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// above can't be done with dot notation

const interestedIn = prompt(`What property do you want to retrieve? Choose between firstName, lastName, age, job, friends.`);
console.log(interestedIn);

console.log(jonas[interestedIn]);

// trying to access a property for an object that doesn't exist returns `undefined`

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Invalid request. Choose between firstName, lastName, age, job, friends.`);
}

// adding new properties to an object

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Mini Challenge
// Jonas has 3 friends and his best friend is called Michael.

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is named ${jonas.friends[0]}.`);


// Lesson 44: Object Methods

// can add functions to objects because they are values

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    hasDriversLicense: true,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // we dont need to pass properties of the object in the function declaration. they are available within the object by using the `this` keyword. `this` points to object that is calling the method/function (ie before the dot notation).
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? 'has' : "doesn't have"} a driver's liense.`;
    }
}

// functions attached to an object is called a method

// console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

// rather than re-executing the function every time it is run, we can store the value

//by requesting the age property of the object, it calls the calcAge method within the object. this works because line 345 creates the age property
console.log(jonas.age);

// Mini Chalenge
// Jonas is a 46 year old teacher and he has a drivers license.

console.log(jonas.getSummary());

// arrays are special kinds of objects. can call builtin methods on them like objects

// Lesson 45: Coding Challenge #7 (#3 of part 2)



// Lesson 46: Iteration: The for loop

// for loop is a control structure (like if/else)

// loops are fundamental part of every language

// for loop is a loop that has a counter

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights: repetition ${rep} 🏋️`);
}
// for(initial value of a counter; the loop will continue running while this is true; how we increase the counter after each run)

// rep++ is the same as `rep = rep + 1`

// Lesson 47: Looping Arrays, Breaking, Continuing

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ["Michael", 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    // reading from the jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    types[i] = typeof jonas[i];
    //could also do types.push(typeof jonas[i]);
}


console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break statements
// continue is to exit the current iteration of the loop and continue to the next one
// break exits out of the entire loop

// for (let i = 0; i < jonas.length; i++) {
//     // reading from the jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // filling types array
//     types[i] = typeof jonas[i];
//     //could also do types.push(typeof jonas[i]);
// }

console.log(`---- ONLY STRINGS ----`);
for (let i = 0; i < jonas.length; i++) {
    // checks if the array item is a string, if not, then skip the iteration but keep going with the next increment
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log(`---- BREAK WITH NUMBER ----`);
for (let i = 0; i < jonas.length; i++) {
    // checks if the array item is a number. when the first number is encountered, exit the for loop immediately.
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

// Lesson 48: Looping backwards and loops in loops

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ["Michael", 'Peter', 'Steven']
];

// looping backwards, from id 4 to 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting Exercise ${exercise}. `);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise #${exercise}. Lifting rep #${rep}. 🏋️`);
    }
}

*/

// Lesson 49: The while loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights: repetition ${rep} 🏋️`);
// }

// the same as a while loop

let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights: repetition ${rep} 🏋️`);
    rep++;
}

// more versatile than the for loop, doesnt need a counter

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}

// use a while loop when not using a counter, when you dont know how many times it will run