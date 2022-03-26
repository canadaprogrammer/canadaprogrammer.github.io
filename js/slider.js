$(function () {
  // SLICK SLIDER
  $('.slider').slick();
  console.log($('.modal'));
  $('.modal').on('shown.bs.modal', function (event) {
    console.log(event.relatedTarget);
    $('.slider').slick('setPosition');
    $('.modal-slider-wrap').addClass('open');
  });

  $('.resume-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
