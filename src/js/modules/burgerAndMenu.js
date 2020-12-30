module.exports = function() {

  // begin burger and mobile menu
  $('#burger').on('click', function (e){
    e.preventDefault();
    $(this).find(".burger__icon").toggleClass("active");
    $("#m-header__menu").toggleClass("active");
  });
  // end burger and mobile menu

};