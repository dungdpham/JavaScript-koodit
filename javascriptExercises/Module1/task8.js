'use strict';

let start, end;
do {
    start = +prompt('Enter start year:', 'Integer >= 0');
} while (start<0 || !Number.isInteger(start));
do {
    end = +prompt('Enter end year:', `Integer > ${start}`);
} while (end<=start || !Number.isInteger(end));

for (let i=start; i<=end; i++) {
    if ((i%4===0 && i%100!==0) || i%400===0) {
        document.getElementById('ulist').innerHTML += `1`;
    }
}