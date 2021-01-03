$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-JS
  require('./modules/noJs')();

  // begin language
  require('./modules/lang')();

  // begin header search field
  require('./modules/header-search')();

  // begin burger and mobile menu
  require('./modules/burgerAndMenu')();

  // begin team filter
  require('./modules/teamFilter')();

  // begin phone mask
  // require('./modules/maskedinput')();

  // begin Scroll2Ancor
  // require('./modules/scroll2ancor')();

  // begin Slick slider
  require('./modules/slick')();

  // begin Popup
  // require('./modules/popup')();

});