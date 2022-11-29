'use strict';

const names = [];

for (let i=1; i<=6; i++) {
    names.push(prompt(`Enter the ${i}. dog's name:`));
}
names.sort();
names.reverse();

const ul = document.createElement('ul');
ul.id='ulist';
document.body.appendChild(ul);
for (let name of names) {
    document.getElementById('ulist').innerHTML += `<li>${name}</li>`;
}
