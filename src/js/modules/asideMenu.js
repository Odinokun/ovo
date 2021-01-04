module.exports = function() {

  // begin aside menu
  $('.aside-nav__btn').on('click', function(e) {
    e.preventDefault();
    $('.aside-nav').addClass('active');
  });

  $('.aside-nav__close').on('click', function(e) {
    e.preventDefault();
    $('.aside-nav').removeClass('active');
  });
  // end aside menu

};