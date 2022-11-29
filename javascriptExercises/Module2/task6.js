'use strict';

function dice_roll() {
    return Math.floor(Math.random()*6) + 1;
}

const ul = document.createElement('ul');
ul.id = 'ulist';
document.body.appendChild(ul);

let isSix=false;
while (!isSix) {
    const n = dice_roll();
    document.getElementById('ulist').innerHTML += `<li>${n}</li>`;
    if (n===6) {
        isSix=true;
    }
}