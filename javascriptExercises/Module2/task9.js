'use strict';

function even(nums) {
    const even = [];
    for (let num of nums) {
        if (num%2===0) {
            even.push(num);
        }
    }
    return even;
}

const numbers = [2, 7, 4, 13, 19, 22, 48, 45, 24, 38];
const even_numbers = even(numbers);
console.log(numbers);
console.log(even_numbers);