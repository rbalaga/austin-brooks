/**
 * Template Name: Folio - v2.2.1
 * Template URL: https://bootstrapmade.com/folio-bootstrap-portfolio-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function ($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $("#main-nav").outerHeight() - 1;
  $(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (e) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if (window.matchMedia("(max-width:991px)").matches) {
          $(".nav-menu").hide();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (!$(".subpage-nav").length) {
      if (scroll > 200) {
        $("#main-nav").slideDown(700);
      } else {
        $("#main-nav").slideUp(700);
      }
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $(".responsive").on("click", function (e) {
    $(".nav-menu").slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function () {
    var strings = $(".typed-items").text();
    strings = $(".typed-items").data("typed-person") + "," + strings;
    strings = strings.split(",");

    typed.typed({
      strings: strings,
      typeSpeed: 100,
      loop: true,
    });
  });

  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //

  $(".services-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 4,
      },
    },
  });

  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox();
    emailjs.init("user_T6IvDOuyKIppdf3Lx5Iug");
  });

  document.getElementById("contact-form")?.addEventListener("submit", function (event) {
    $(".contact-loading").removeClass("d-none");
    $(".contact-success").addClass("d-none");
    $(".contact-error").addClass("d-none");
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    // this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm("service_1wl192m", "template_or2v66o", this).then(
      function () {
        $(".contact-loading").addClass("d-none");
        $(".contact-success").removeClass("d-none");
      },
      function (error) {
        $(".contact-loading").addClass("d-none");
        $(".contact-error").removeClass("d-none");
      }
    );
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });
})(jQuery);
