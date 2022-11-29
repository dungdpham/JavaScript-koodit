'use strict';

const n1 = +prompt('Enter 1st integer:');
const n2 = +prompt('Enter 2nd integer:');
const n3 = +prompt('Enter 3rd integer:');

document.getElementById('body').innerHTML = `Sum is ${n1+n2+n3}.<br>Product is ${n1*n2*n3}.<br>Average is ${(n1+n2+n3)/3}.`