$(function () {
  $('.mdi-menu').click(function () {
    $('.link-wrap').toggleClass('visible');
  });

  $('.blog-wrap').hover(
    function () {
      $('.blog-wrap').not(this).addClass('fade');
      $(this).addClass('hover');
    },
    function () {
      $(this).removeClass('hover');
      $('.blog-wrap').removeClass('fade');
    }
  );

  // PHONE ON MOBILE
  $('#tel').on('click', function () {
    console.log('clicked');
    if (isMobile) {
      console.log($(this));
      $(this).attr('href', 'tel:19053470880');
    }
  });

  // STOP YOUTUBE
  // $('.modal').on('hide.bs.modal', function () {
  // 	$(this).find('iframe').attr('src', $(this).find('iframe').attr('src'));
  // });
  // $('.slick-prev').on('click', function () {
  // 	$(this).siblings('.slick-list').find('iframe').attr('src', $(this).siblings('.slick-list').find('iframe').attr('src'));
  // });
  // $('.slick-next').on('click', function () {
  // 	$(this).siblings('.slick-list').find('iframe').attr('src', $(this).siblings('.slick-list').find('iframe').attr('src'));
  // });
});
