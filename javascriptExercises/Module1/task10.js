'use strict';

let dice, eye, count=0;
do {
    dice = +prompt('Number of dice:', 'Integer > 0');
} while (dice<1 || !Number.isInteger(dice));
do {
    eye = +prompt('Sum of the eyes:', `${dice} <= Integer <= ${dice*6}`);
} while (eye<dice || eye>dice*6 || !Number.isInteger(eye));

for (let i=0; i<10000; i++) {
    let sum=0;
    for (let j=0; j<dice; j++) {
        sum += Math.floor(Math.random()*6)+1;
    }
    if (eye===sum) {
      count++;
    }
}

document.getElementById('body').innerHTML= `Probability to get sum ${eye} with ${dice} dice 
is ${Number(count/10000).toFixed(4)*100} %.`