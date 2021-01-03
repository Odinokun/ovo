module.exports = function() {

  // begin remove no-js class
  $('.team-menu__item').on('click', function (e) {
    if ($(this).hasClass('active')) {
      e.preventDefault();
      $('.team-menu').toggleClass('open');
    } else {
      $('.team-menu__item').removeClass('active');
      $(this).addClass('active');
      $('.team-menu').removeClass('open');
    }
  })
  // end remove no-js class

};