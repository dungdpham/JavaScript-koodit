'use strict';

function concat(strings) {
    let string='';
    for (let str of strings) {
        string += str;
    }
    return string;
}

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
document.getElementById('body').innerHTML= concat(names);