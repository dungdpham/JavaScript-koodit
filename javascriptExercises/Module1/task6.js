'use strict';

const answer = confirm('Should I calculate the square root?');

if (answer) {
  const number = +prompt('Enter a number:');
  if (number<0) {
    document.getElementById('body').innerHTML= 'The square root of a negative number is not defined.';
  } else {
    document.getElementById('body').innerHTML= `The square root of ${number} is ${Math.sqrt(number).toFixed(5)}.`;
  }
} else document.getElementById('body').innerHTML= 'The square root is not calculated.'