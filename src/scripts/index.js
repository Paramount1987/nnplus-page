// libs
window.$ = window.jQuery = require('jquery');

import Swiper from 'swiper';
//----------------------------------------------

$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true
    })
});

import '../styles/index.scss';
import './utils/index';

//import img from '../assets/file-img/01.png';

console.log('index webpack 4!! js');
const arrowF = () => {
	alert('works!!');
}

//arrowF();
