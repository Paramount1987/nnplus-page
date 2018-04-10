// libs
//-------------------------------------------------------
window.$ = window.jQuery = require('jquery');

import Swiper from 'swiper';

require('./libs/index');
require('./libs/select2');
require('./libs/jquery.magnific-popup.min');
require('./libs/jquery.mask.min');
require('./libs/jquery.validate');
//----------------------------------------------

$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true
    });

	$('.js-example-basic-single').select2();

	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

import '../styles/index.scss';
