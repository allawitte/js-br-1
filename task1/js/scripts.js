'use strict';
const images = [
    './i/airmax.png',
    './i/airmax-jump.png',
    './i/airmax-on-foot.png',
    './i/airmax-playground.png',
    './i/airmax-top-view.png'
];
var img = document.getElementById('currentPhoto');
let counter = 0;

setInterval(function(){
    img.src = images[counter];
    img.alt = images[counter].match(/[a-z-{*}]+\./)[0].replace('.','');
    counter ++;
    counter = counter < 5 ? counter : 0;
    console.log(counter, img.alt);
}, 5000);

/**
 * Created by Alla on 6/30/2017.
 */
