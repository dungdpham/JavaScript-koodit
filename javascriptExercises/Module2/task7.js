'use strict';

function dice_roll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = +prompt('Please enter the number of sides on the dice:');

const ul = document.createElement('ul');
ul.id = 'ulist';
document.body.appendChild(ul);

let isMax=false;
while (!isMax) {
    const n = dice_roll(sides);
    document.getElementById('ulist').innerHTML += `<li>${n}</li>`;
    if (n===sides) {
        isMax=true;
    }
}