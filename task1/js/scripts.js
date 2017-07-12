'use strict';
const images = [
    './i/airmax.png',
    './i/airmax-jump.png',
    './i/airmax-on-foot.png',
    './i/airmax-playground.png',
    './i/airmax-top-view.png'
];
const imgAmount = images.length;
var img = document.getElementById('currentPhoto');
img.src = images[0];
let counter = 1;

setInterval(function(){
    img.src = images[counter];
    img.alt = images[counter].match(/[a-z-{*}]+\./)[0].replace('.','');
    counter ++;
    counter = counter < imgAmount ? counter : 0;
}, 5000);

/**
 * Created by Alla on 6/30/2017.
 */
