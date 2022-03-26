$(function () {
  let navHeight = $('header').height();
  // $('#intro').css('paddingTop', navHeight);
  var isMobile;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }

  // NAV POSITION
  $(window).on('scroll', function () {
    var pos = $(window).scrollTop();
    var pos2 = pos + navHeight;

    // ACTION BRAND NAME
    // if (isMobile && pos >= $('nav').height()) {
    //   $('.navbar-brand .description').fadeOut('slow');
    //   $('header').addClass('scrolled');
    // }
    if (pos >= $('nav').height()) {
      $('.navbar-brand .description').fadeOut('slow');
      $('header').addClass('scrolled');
    } else {
      $('.navbar-brand .description').fadeIn('slow');
      $('header').removeClass('scrolled');
    }

    // Link Highlighting
    if (pos2 > $('#home').offset().top) {
      highlightLink('home');
    }
    if (pos2 > $('#about').offset().top) {
      highlightLink('about');
    }
    if (pos2 > $('#experience').offset().top) {
      highlightLink('experience');
    }
    if (
      pos2 > $('#portfolio').offset().top ||
      pos + $(window).height() === $(document).height()
    ) {
      highlightLink('portfolio');
    }
    // if (pos2 > $('#resume').offset().top) {
    //   highlightLink('resume');
    // }
    // if (
    //   pos2 > $('#contact').offset().top ||
    //   pos + $(window).height() === $(document).height()
    // ) {
    //   highlightLink('contact');
    // }
  });

  function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $('nav')
      .find('[dest="' + anchor + '"]')
      .addClass('active');
  }

  // EVENT HANDLERS
  // $('.btn-link').click(function () {
  //   $(this)
  //     .find('.fa')
  //     .each(function () {
  //       if ($(this).hasClass('active')) {
  //         $(this).removeClass('active');
  //       } else {
  //         $(this).addClass('active');
  //       }
  //     });
  //   $(this)
  //     .closest('.card')
  //     .siblings()
  //     .find('.fa')
  //     .each(function () {
  //       if ($(this).hasClass('fa-chevron-down')) {
  //         if (!$(this).hasClass('active')) {
  //           $(this).addClass('active');
  //         }
  //       } else {
  //         if ($(this).hasClass('active')) {
  //           $(this).removeClass('active');
  //         }
  //       }
  //     });
  // });
  $('.nav-link').click(function () {
    var anchor = $(this).attr('dest');
    // $('.link-wrap').removeClass('visible');

    // $('.nav-link').removeClass('active');
    // $('nav')
    // .find('[dest="' + anchor + '"]')
    // .addClass('active');

    $('html, body').animate(
      {
        scrollTop: $('#' + anchor).offset().top - 61,
      },
      400
    );
  });
});
