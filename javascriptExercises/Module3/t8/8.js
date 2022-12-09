'use strict';

const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', function(evt) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    console.log(num1, num2, operation);
    if (operation==='add') {
        result.innerHTML = `${num1} + ${num2} = ${num1+num2}`;
    } else if (operation==='sub') {
        result.innerHTML = `${num1} - ${num2} = ${num1-num2}`;
    } else if (operation==='multi') {
        result.innerHTML = `${num1} x ${num2} = ${num1*num2}`;
    } else if (operation==='div') {
        result.innerHTML = `${num1} : ${num2} = ${Number(num1/num2).toFixed(3)}`;
    }
})

