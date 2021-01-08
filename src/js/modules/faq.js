module.exports = function() {

  // begin faq accordion
  $('.faq__question').on('click', function (){
    let item = $(this).parent('.faq__row');

    $(this).toggleClass('active');
    $(item).find('.faq__answer').slideToggle();
  })
  // end faq accordion

};