$(function () {
  let navHeight = $('header').height();
  $('#intro').css('paddingTop', navHeight);
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
    if (pos2 > $('#about').offset().top) {
      highlightLink('about');
    }
    if (pos2 > $('#experience').offset().top) {
      highlightLink('experience');
    }
    if (pos2 > $('#portfolio').offset().top) {
      highlightLink('portfolio');
    }
    // if (pos2 > $('#resume').offset().top) {
    //   highlightLink('resume');
    // }
    if (
      pos2 > $('#contact').offset().top ||
      pos + $(window).height() === $(document).height()
    ) {
      highlightLink('contact');
    }
  });

  function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $('nav')
      .find('[dest="' + anchor + '"]')
      .addClass('active');
  }

  // EVENT HANDLERS
  $('.btn-link').click(function () {
    $(this)
      .find('.fa')
      .each(function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        } else {
          $(this).addClass('active');
        }
      });
    $(this)
      .closest('.card')
      .siblings()
      .find('.fa')
      .each(function () {
        if ($(this).hasClass('fa-chevron-down')) {
          if (!$(this).hasClass('active')) {
            $(this).addClass('active');
          }
        } else {
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
          }
        }
      });
  });
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

  // SLICK SLIDER
  $('.slider').slick();
  $('.modal').on('shown.bs.modal', function () {
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

// TYPING EFFECT
window.onload = function () {
  // TYPING EFFECT 1
  function typingEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = '';
    let i = 0;
    let timer = setInterval(function () {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        let element = document.querySelector('#typewrite');
        let dataType = element.getAttribute('data-type');
        if (dataType) {
          // TYPING EFFECT 2
          new txtType(element, JSON.parse(dataType));
        }
        clearInterval(timer);
      }
    }, speed);
  }

  const manualTyping = document.querySelector('.manual');
  typingEffect(manualTyping, 300);

  // TYPING EFFECT 2
  let txtType = function (el, dataType) {
    this.dataType = dataType;
    this.el = el;
    this.loopNum = 0;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  txtType.prototype.tick = function () {
    let i = this.loopNum % this.dataType.length;
    let fullTxt = this.dataType[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };
};
