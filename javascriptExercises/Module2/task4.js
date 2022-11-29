'use strict';

const numbers = [];

let num;
do {
    num = +prompt('Enter a number:');
    if (num !== 0) {
        numbers.push(num);
    }
} while (num !== 0);

numbers.sort((a,b) => b-a);
for (let number of numbers) {
    console.log(number);
}
