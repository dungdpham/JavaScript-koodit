'use strict';

const target = document.getElementById('target');
const trigger = document.getElementById('trigger');

trigger.addEventListener('mouseover', function(evt) {
    target.src = "img/picB.jpg";
    trigger.addEventListener('mouseout', function(evt) {
        target.src = "img/picA.jpg";
    })
});
