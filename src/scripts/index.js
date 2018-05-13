import '../styles/index.scss';
// libs
//-------------------------------------------------------
window.$ = require('jquery');

window.jQuery = window.$;

require('./libs/index');

// utils
//----------------------------------------------
require('./utils/index');

//----------------------------------------------
$(document).ready(() => {
  /* global Swiper */
  const swiper = new Swiper('.js-swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    freeMode: true,
  });
});
