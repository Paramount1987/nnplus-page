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
  const swiper = new Swiper('.swiper-container', {
    loop: true,
  });

  $('.js-example-basic-single').select2();

  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
  });
  $(document).on('click', '.popup-modal-dismiss', (e) => {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
