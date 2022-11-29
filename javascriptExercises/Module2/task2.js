'use strict';

const names = [];
const num = +prompt('Enter the number of participants:');

for (let i=1; i<=num; i++) {
    names.push(prompt(`Enter the name of ${i}. participant:`));
}
names.sort();

const ol = document.createElement('ol');
ol.id = 'olist';
document.body.appendChild(ol);
for (let name of names) {
    document.getElementById('olist').innerHTML += `<li>${name}</li>`;
}
