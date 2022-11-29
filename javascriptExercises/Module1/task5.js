'use strict';

let year;

do {
    year = +prompt('Please enter a year:', 'Integer >= 0');
} while (year<0 || !Number.isInteger(year));

if ((year%4===0 && year%100!==0) || year%400===0) {
    document.getElementById('body').innerText= `${year} is a leap year.`
} else {
    document.getElementById('body').innerText= `${year} is not a leap year.`
}