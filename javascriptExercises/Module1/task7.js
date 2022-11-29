'use strict';

let rolls, sum=0;

do {
    rolls = +prompt('How many times should I roll the dice?', 'Integer > 0');
} while (rolls<1 || !Number.isInteger(rolls));

for (let i=0; i<rolls; i++) {
    sum += Math.floor(Math.random()*6)+1;
    //console.log(sum);
}

document.getElementById('body').innerHTML= `Sum of dice rolls is ${sum}.`;