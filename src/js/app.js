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

  // begin aside menu
  require('./modules/asideMenu')();

  // begin accordion
  require('./modules/faq')();
  require('./modules/price')();

  // begin Slick slider
  require('./modules/slick')();

});