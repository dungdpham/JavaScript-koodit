'use strict';

const li1 = document.createElement('li');
li1.innerHTML = 'First item';

const li2 = document.createElement('li');
li2.innerHTML = 'Second item';

const li3 = document.createElement('li');
li3.innerHTML = 'Third item';

const ul = document.getElementById('target');
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

li2.classList.add('my-item');

