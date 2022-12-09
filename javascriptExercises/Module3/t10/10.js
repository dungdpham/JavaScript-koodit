'use strict';

const form = document.getElementById('source');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const first = document.querySelector('input[name=firstname]').value;
    const last = document.querySelector('input[name=lastname]').value;
    console.log(first, last);
    document.getElementById('target').innerHTML = `Your name is ${first} ${last}`
})