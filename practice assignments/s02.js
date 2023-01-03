const country = "Singapore";
const continent = 'Asia';
let population = 7000000;
let finlandPopulation = 6000000;
const averagePopulation = 33000000;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = true;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);

let language = "Malay";
language = "English";

// intentional error
// console.log(language);

console.log(population / 2);
console.log(population++);
console.log(population > finlandPopulation);
console.log(population > averagePopulation);

console.log(country + " is a country in " + continent + ", and its " + Math.round(population / 1000000) + " million people speak " + language + ".");