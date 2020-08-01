
$(function(){
  $('.slider_inner').slick({
    arrows: true,
    asNavFor: '.thumbs'
  });
   $('.thumbs').slick({
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider_inner',
    focusOnSelect: true, 
    dots: true,
  });


$('.header__menu-btn').on('click', function(){
  $('.menu ul').slideToggle();
});

});

