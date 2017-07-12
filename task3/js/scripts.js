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
const imgAmount = images.length;
var counter = 0;

function next() {
    counter++;
    counter = counter < imgAmount ? counter : 0;
    img.src = images[counter];
}

function prev() {
    counter--;
    counter = counter >= 0 ? counter : imgAmount-1;
    img.src = images[counter];
}

nextBtn.onclick = next;
prevBtn.onclick = prev;

/**
 * Created by Alla on 6/30/2017.
 */
