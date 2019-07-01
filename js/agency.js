(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // // Collapse Navbar
  // var navbarCollapse = function() {
  //   if ($("#mainNav").offset().top > 100) {
  //     $("#mainNav").addClass("navbar-shrink");
  //   } else {
  //     $("#mainNav").removeClass("navbar-shrink");
  //   }
  // };
  // // Collapse now if page is not at top
  // navbarCollapse();
  // // Collapse the navbar when page is scrolled
  // $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict

$(document).ready(function () {
  
  $(window).resize(function() {
    let width = window.innerWidth;

    // for responsive about-image
    let aboutImage = document.getElementById('about-image').children[0];
    if (width <= 575) {
      aboutImage.setAttribute('src', 'images/about_1.jpg');
      aboutImage.setAttribute('style', 'width: 100%');
    } else {
      aboutImage.setAttribute('src', 'images/about_2.jpg');
      aboutImage.removeAttribute('style');
    }
    
    // for responsive portfolio video
    let modal = document.getElementsByClassName('modal-body');
    if (width < 576) {
      $.each( modal, function (i, m) {
        let video = m.children[1];
        video.setAttribute('width', '240');
        if (i < 2) {
          video.setAttribute('height', '140');
        } else {
          video.setAttribute('height', '320');
        }
      });
    } else if (width < 768) {
      $.each( modal, function (i, m) {
        let video = m.children[1];
        if (i < 2) {
          video.setAttribute('width', '450');
          video.setAttribute('height', '255');
        } else {
          video.setAttribute('width', '287');
          video.setAttribute('height', '385');
        }
      });
    } else {
      $.each( modal, function (i, m) {
        let video = m.children[1];
        if (i < 2) {
          video.setAttribute('width', '560');
          video.setAttribute('height', '320');
        } else {
          video.setAttribute('width', '330');
          video.setAttribute('height', '450');
        }
      });
    }

    // for responsive 
    let links = document.getElementById('about-link');
    // console.log(links);
    if (width <= 767) {
      document.getElementById('about-main').appendChild(links);
    } else {
      document.getElementById('about-body').appendChild(links);
    }
  });

  $(window).trigger('resize');
});
