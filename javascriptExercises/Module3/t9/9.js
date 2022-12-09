'use strict';

const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', function(evt) {
    const text = document.getElementById('calculation').value;
    const cal = text.split(/[+-/*]+/);
    const num1 = parseFloat(cal[0]);
    const num2 = parseFloat(cal[1]);
    console.log(cal, num1, num2);
    if (text.includes('+')) {
        result.innerHTML = `Result = ${num1+num2}`;
    } else if (text.includes('-')) {
        result.innerHTML = `Result = ${num1-num2}`;
    } else if (text.includes('*')) {
        result.innerHTML = `Result = ${num1*num2}`;
    } else if (text.includes('/')) {
        result.innerHTML = `Result = ${num1/num2}`;
    }
})