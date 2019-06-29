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
    let aboutImage = document.getElementById('about-image').children[0];
    if (width <= 360) {
      aboutImage.setAttribute('src', 'images/about_1.jpg');
    } else {
      aboutImage.setAttribute('src', 'images/about_2.jpg');
    }

    let links = document.getElementById('about-link');
    console.log(links);
    if (width >= 576 && width < 717) {
      links.classList.add('col-lg-12');
      links.setAttribute('style', 'margin-top: 1rem;');
      document.getElementById('about-main').appendChild(links);
    } else {
      links.classList.remove('col-lg-12');
      links.removeAttribute('style');
      document.getElementById('about-body').appendChild(links);
    }
  });

  $(window).trigger('resize');
});
