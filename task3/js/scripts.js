'use strict';
const images = [
    './i/breuer-building.jpg',
    './i/guggenheim-museum.jpg',
    './i/headquarters.jpg',
    './i/IAC.jpg', './i/new-museum.jpg'
];
var nextBtn = document.getElementById('nextPhoto');
var prevBtn = document.getElementById('prevPhoto');
var img = document.getElementById('currentPhoto');
var counter = 0;

function next() {
    counter++;
    counter = counter < 5 ? counter : 0;
    img.src = images[counter];
}

function prev() {
    counter--;
    counter = counter >= 0 ? counter : 4;
    img.src = images[counter];
}

nextBtn.onclick = next;
prevBtn.onclick = prev;

/**
 * Created by Alla on 6/30/2017.
 */
