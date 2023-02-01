'use strict';
/*

Coding Challenge #8

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉

Bonus:

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:

    4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together

    4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)

    4.3. Call the function with the 'totals' array

GOOD LUCK 
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
        console.log(sum);
    }
    return sum / arr.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let meal = 0; meal < bills.length; meal++) {
    // not usig the push method
    //tips[meal] = calcTip(bills[meal]);
    //totals[meal] = bills[meal] + tips[meal];

    // using the push method
    // tips.push(calcTip(bills[meal]));
    // totals.push(bills[meal] + tips[meal]);

    // recommended way, only calculating the tip once and then reusing it
    const tip = calcTip(bills[meal]);
    tips.push(tip);
    totals.push(tip + bills[meal]);

}

console.log(bills);
console.log(tips);
console.log(totals);

console.log(`Average bill total is $${calcAverage(totals)}.`);

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights: repetition ${rep} 🏋️`);
// }