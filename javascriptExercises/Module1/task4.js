'use strict';

const name = prompt('Please enter your name:', 'Your name');

const draw = Math.floor(Math.random()*4) + 1;
let house;

switch (draw) {
  case 1:
    house = 'Gryffindor';
    break;
  case 2:
    house = 'Slytherin';
    break;
  case 3:
    house = 'Hufflepuff';
    break;
  default:
    house = 'Ravenclaw';
}
document.getElementById('body').innerHTML= `${name}, you are ${house}.`