'use strict';

let number, isPrime=true;
do {
    number = +prompt('Please enter a number:', 'Integer > 1');
} while (number<=1 || !Number.isInteger(number));

for (let i=2; i<=Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime=false;
        break;
    }
}

if (isPrime) {
    document.getElementById('body').innerHTML= `${number} is a prime number.`;
} else {
    document.getElementById('body').innerHTML= `${number} is not a prime number.`;
}