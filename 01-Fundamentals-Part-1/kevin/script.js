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
*/

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// test