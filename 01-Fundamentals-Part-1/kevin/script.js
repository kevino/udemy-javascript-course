/* let js = 'amazing';
console.log("Kevin");
console.log("23");

let firstName = "Kevin";
console.log(firstName);



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'kevin');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer";
job = "teacher";

lastName = "Wells";
console.log(lastName);



//// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

//// assignment operators
// = (+ precedes = so x = 15)
let x = 10 + 5; // x = 15
console.log(x);

x += 10; // x = x + 10
console.log(x);

x *= 4; // x = x * 4
console.log(x);

x++; // x = x + 1
console.log(x);

x--;
x--; //x = x - 1
console.log(x);

//// comparison operators
// produce boolean values

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



const firstName = "Kevin";
const job = 'planner';
const birthYear = 1984;
const year = 2023;

const kevin = "I'm " + firstName + ', a ' + (year - birthYear) + " year old " + job + "!";
console.log(kevin);

const kevinNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(kevinNew);

console.log(`Just a regular string!`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
with multiple
lines`);



const age = 15;

if (age >= 18) {
    console.log('Sarah can start her driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah isn't old enough to start her driving license. Wait another ${yearsLeft} years.`);
}

// called an if-else control structure
// controlling which code js will execute

// else block is optional

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// any variable declared inside a code-block (like an if statement) is not accessible outside of that code block
// variables must be declared outside first to be accessible

// if (condition)
// condition must be true or false



// Lesson 20: Type conversion and coercion

// conversion is when we manually convert from one to another
// coercion is when JS converts without prompting from the coder

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log('I am ' + 23 + ' years old.');
// + operator forces a coercion from number to string



// -,*,/ operators triggers a string to number coercion
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('24' / '2');

let n = '1' + 1;
n = n - 1;

console.log(typeof n, n);



// Lesson 21: Truthy and Flasy Values

// Values that will become true or false during conversion
// falsy values: 0, '', undefined, null, NaN, False
// everything else is true

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 100;

// in a logical expression, JS will convert Number or String variables to a Boolean. 0 = falsy value so it's false.
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log(`Yay, height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}



// Lesson 22: Equality Operators == v. ===

const age = 18;
if (age === 18) console.log(`You just became and adult.`);

// === returns a boolean value
// = is an assignment operator, === is a comparison operator

// === is strict, does not perform type coercion
// == is loose, performs type coercion.

// '18' == 18 is TRUE
// '18' === 18 is FALSE

// general rule, use === as a default to avoid bugs

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`Cool, 23 is my favourite number too.`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number.`);
} else {
    console.log(`Number isn't 7 or 23 :(`);
}

// different operator, != (loose) and !== (strict)
if (favourite !== 25) {
    console.log(`Why not 23?`);
}


// Lesson 23: Boolean logic
// and, or, not operators

// A and B
// &&
// True when both A and B are true

// A or B
// ||
// True when either A or B, or both, are true

// Not A
// !
// Inverts the value for A

// Lesson 24: Logical operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision; // usually done in the if statement

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah can drive!`);
// } else {
//     console.log(`Somoene else should drive.`);
// }

const isTired = true;

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah can drive!`);
} else {
    console.log(`Somoene else should drive.`);
}



// Lesson 26: The switch Statement

const day = 'saturday';


switch (day) {
    case 'monday': // day === monday, if true then:
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory videos.`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos.`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend.`);
        break;
    default:
        console.log(`Not a valid day.`);
        break;
}

if (day === 'monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
    console.log(`Prepare theory videos.`);
} else if (day === ('wednesday' || 'thursday')) {
    console.log(`Write code examples`);
} else if (day === 'friday') {
    console.log(`Record videos.`);
} else if (day === ('saturday' || 'sunday')) {
    console.log(`Enjoy the weekend.`);
} else {
    console.log(`Not a valid day.`)
}


// Lesson 27: Statements and Expressions

// an expression is a piece of code that produces a value
// eg
// 3 + 2
// 1931
// true && false && !false

// a statement is a bigger piece of code that is executed and doesn't produce a value on its own
// eg
// the switch statement
// an if else statment
// if (23>10) {
//    const str = `23 is larger than 10.`;
// }
// statements end in a semicolon

// important because JS expects expresions or statments in different places
// template literals, ${someting}, can only take expressions


// Lesson 28: The conditional (ternary) operator

const age = 23;
age >= 18 ? console.log(`I like wine.`) : console.log(`I like water.`);

// syntax
// condition expression ? if statement : else statement;

const drinkChoice = age >= 18 ? 'wine' : 'water';
console.log(`I like to drink ${drinkChoice}!`);

// as an if block its much longer

let drinkChoice2; // must be defined outside the if block to be available later, outside of the if statement.
if (age >= 18) {
    drinkChoice2 = 'wine';
} else {
    drinkChoice2 = 'water';
}
console.log(`I like to drink ${drinkChoice2}!`);

// can be used in a template literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}!`);

// not a replacement of if/else


// Lesson 29: Coding Challenge

// Lesson 30: JS Releases. ES5, ES6+ and ESNext

// First JS version was in 1995, called Mocha, developed by Netscape
// Java in the name is a marketing tactic
// ES1 (ECMA script 1) released in 1997. First standardised version.
// ES5 released in 2009 with lots of new features
// ES6 (aka ES2015) released in 2015. Single largest update
// Now on a yearly release cycle (ES2016, ES2017, etc)

// Must be backwards compatible to ES1.
//
// almost never removes a feature
// new versions dont break old code

// ESNext: future versions of JS



*/
