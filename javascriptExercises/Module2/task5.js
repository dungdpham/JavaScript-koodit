'use strict';

const nums = [];

let num;
do {
    num = +prompt('Please enter a number:');
    if (!nums.includes(num)) {
        nums.push(num);
    } else {
        console.log(`Number ${num} has previously been given.`);
        break;
    }
    num = '';
} while (!nums.includes(num));

nums.sort((a, b) => a-b);

for (let n of nums) {
    console.log(n);
}
