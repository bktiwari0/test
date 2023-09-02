!(function (e) {
  "use strict";
  function a() {
    if (e(".main-header").length) {
      var a = e(window).scrollTop(),
        t = e(".main-header"),
        n = e(".scroll-to-top");
      a >= e(".main-header").height()
        ? (t.addClass("fixed-header"), n.fadeIn(300))
        : (t.removeClass("fixed-header"), n.fadeOut(300));
    }
  }
  if (
    (a(),
    e(".main-header li.dropdown ul").length &&
      (e(".main-header li.dropdown").append(
        '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
      ),
      e(".main-header li.dropdown .dropdown-btn").on("click", function () {
        e(this).prev("ul").slideToggle(500);
      }),
      e(".fullscreen-menu .navigation li.dropdown > a").on(
        "click",
        function () {
          e(this).next("ul").slideToggle(500);
        }
      ),
      e(".navigation li.dropdown > a").on("click", function (e) {
        e.preventDefault();
      }),
      e(
        ".main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a"
      ).on("click", function (e) {
        e.preventDefault();
      })),
    e(".mobile-menu").length)
  ) {
    e(".mobile-menu .menu-box").mCustomScrollbar();
    var t = e(".main-header .nav-outer .main-menu").html();
    e(".mobile-menu .menu-box .menu-outer").append(t),
      e(".sticky-header .main-menu").append(t),
      e(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
        e(this).toggleClass("open"), e(this).prev("ul").slideToggle(500);
      }),
      e(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
        e(this).toggleClass("open"),
          e(this).prev(".mega-menu").slideToggle(500);
      }),
      e(".mobile-nav-toggler").on("click", function () {
        e("body").addClass("mobile-menu-visible");
      }),
      e(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
        "click",
        function () {
          e("body").removeClass("mobile-menu-visible");
        }
      );
  }
  if (
    (e(".search-box-outer").length &&
      (e(".search-box-outer").on("click", function () {
        e("body").addClass("search-active");
      }),
      e(".close-search").on("click", function () {
        e("body").removeClass("search-active");
      })),
    e(".hidden-bar,.fullscreen-menu").length)
  ) {
    var n = e(".hidden-bar"),
      o = e(".nav-toggler"),
      s = e(".hidden-bar-closer,.close-menu");
    e(".hidden-bar-wrapper").mCustomScrollbar(),
      o.on("click", function () {
        e("body").addClass("visible-menu-bar"), n.addClass("visible-sidebar");
      }),
      s.on("click", function () {
        e("body").removeClass("visible-menu-bar"),
          n.removeClass("visible-sidebar");
      });
  }
  if (e(".hidden-bar").length) {
    (n = e(".hidden-bar")),
      (o = e(".nav-toggler")),
      (s = e(".hidden-bar-closer"));
    e(".hidden-bar-wrapper").mCustomScrollbar(),
      o.on("click", function () {
        n.addClass("visible-sidebar");
      }),
      s.on("click", function () {
        n.removeClass("visible-sidebar");
      });
  }
  var i, r, l, c, d, m;
  if (
    ((i = e(".hidden-bar .side-menu"))
      .find(".dropdown")
      .children("a")
      .append(function () {
        return '<button type="button" class="btn expander"><i class="icon fa fa-angle-right"></i></button>';
      }),
    i.find(".dropdown").children("ul").hide(),
    i.find(".btn.expander").each(function () {
      e(this).on("click", function () {
        return (
          e(this).parent().parent().children("ul").slideToggle(),
          e(this).parent().toggleClass("current"),
          e(this).find("i").toggleClass("fa-angle-right fa-angle-down"),
          !1
        );
      });
    }),
    e(".custom-select-box").length &&
      e(".custom-select-box")
        .selectmenu()
        .selectmenu("menuWidget")
        .addClass("overflow"),
    e(".parallax-scene-1").length)
  ) {
    var u = e(".parallax-scene-1").get(0);
    new Parallax(u);
  }
  if (e(".parallax-scene-2").length)
    (u = e(".parallax-scene-2").get(0)), new Parallax(u);
  if (e(".parallax-scene-3").length)
    (u = e(".parallax-scene-3").get(0)), new Parallax(u);
  if (e(".parallax-scene-4").length)
    (u = e(".parallax-scene-4").get(0)), new Parallax(u);
  if (
    (e(".paroller").length &&
      e(".paroller").paroller({
        factor: 0.2,
        factorLg: 0.4,
        type: "foreground",
        direction: "horizontal",
      }),
    e(".filter-list").length && e(".filter-list").mixItUp({}),
    e(".count-box").length &&
      e(".count-box").appear(
        function () {
          var a = e(this),
            t = a.find(".count-text").attr("data-stop"),
            n = parseInt(a.find(".count-text").attr("data-speed"), 10);
          a.hasClass("counted") ||
            (a.addClass("counted"),
            e({ countNum: a.find(".count-text").text() }).animate(
              { countNum: t },
              {
                duration: n,
                easing: "linear",
                step: function () {
                  a.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                  a.find(".count-text").text(this.countNum);
                },
              }
            ));
        },
        { accY: 0 }
      ),
    e(".main-slider-carousel").length &&
      e(".main-slider-carousel").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        loop: !0,
        margin: 0,
        nav: !0,
        autoHeight: !0,
        smartSpeed: 500,
        autoplay: 6e3,
        navText: [
          '<span class="flaticon-back"></span>',
          '<span class="flaticon-arrow-pointing-to-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          800: { items: 1 },
          1024: { items: 1 },
          1200: { items: 1 },
        },
      }),
    e(".banner-carousel").length &&
      e(".banner-carousel").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        loop: !0,
        margin: 0,
        nav: !0,
        smartSpeed: 700,
        autoHeight: !0,
        autoplay: !0,
        autoplayTimeout: 1e4,
        navText: [
          '<span class="fa fa-long-arrow-left"></span> prev',
          'next<span class="fa fa-long-arrow-right"></span>',
        ],
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1024: { items: 1 } },
      }),
    e(".single-item-carousel").length &&
      e(".single-item-carousel").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        smartSpeed: 500,
        autoplay: 4e3,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          600: { items: 1 },
          800: { items: 1 },
          1024: { items: 1 },
        },
      }),
    e(".testimonial-carousel").length &&
      e(".testimonial-carousel").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        smartSpeed: 500,
        autoplay: 4e3,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          600: { items: 1 },
          800: { items: 2 },
          1024: { items: 2 },
        },
      }),
    e(".two-item-carousel").length &&
      e(".two-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 500,
        autoplay: 4e3,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          600: { items: 1 },
          800: { items: 2 },
          1024: { items: 2 },
        },
      }),
    e(".three-item-carousel").length &&
      e(".three-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 500,
        autoplay: 4e3,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          600: { items: 1 },
          800: { items: 2 },
          1024: { items: 3 },
        },
      }),
    e(".services-carousel").length &&
      e(".services-carousel").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        center: !0,
        smartSpeed: 500,
        autoplay: 4e3,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          600: { items: 2 },
          800: { items: 2 },
          1024: { items: 3 },
        },
      }),
    e(".clock-wrapper").length &&
      ((r = new Date()),
      (l = (r.getHours() / 12) * 360 + (r.getMinutes() / 60) * 30),
      (c = (r.getMinutes() / 60) * 360 + (r.getSeconds() / 60) * 6),
      (d = (r.getSeconds() / 60) * 360),
      (m = [
        "@-webkit-keyframes rotate-hour{from{transform:rotate(" +
          l +
          "deg);}to{transform:rotate(" +
          (l + 360) +
          "deg);}}",
        "@-webkit-keyframes rotate-minute{from{transform:rotate(" +
          c +
          "deg);}to{transform:rotate(" +
          (c + 360) +
          "deg);}}",
        "@-webkit-keyframes rotate-second{from{transform:rotate(" +
          d +
          "deg);}to{transform:rotate(" +
          (d + 360) +
          "deg);}}",
        "@-moz-keyframes rotate-hour{from{transform:rotate(" +
          l +
          "deg);}to{transform:rotate(" +
          (l + 360) +
          "deg);}}",
        "@-moz-keyframes rotate-minute{from{transform:rotate(" +
          c +
          "deg);}to{transform:rotate(" +
          (c + 360) +
          "deg);}}",
        "@-moz-keyframes rotate-second{from{transform:rotate(" +
          d +
          "deg);}to{transform:rotate(" +
          (d + 360) +
          "deg);}}",
      ].join("")),
      (document.getElementById("clock-animations").innerHTML = m)),
    e(".progress-line").length &&
      e(".progress-line").appear(
        function () {
          var a = e(this),
            t = a.data("width");
          e(a).css("width", t + "%");
        },
        { accY: 0 }
      ),
    e(".quantity-spinner").length &&
      e("input.quantity-spinner").TouchSpin({ verticalbuttons: !0 }),
    e(".sponsors-carousel").length &&
      e(".sponsors-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 500,
        autoplay: true,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 2 },
          600: { items: 3 },
          800: { items: 4 },
          1024: { items: 5 },
        },
      }),
    e(".time-countdown").length &&
      e(".time-countdown").each(function () {
        var a = e(this),
          t = e(this).data("countdown");
        a.countdown(t, function (a) {
          e(this).html(
            a.strftime(
              '<div class="counter-column"><span class="count">%D</span>Days</div> <div class="counter-column"><span class="count">%H</span>Hours</div>  <div class="counter-column"><span class="count">%M</span>Minutes</div>  <div class="counter-column"><span class="count">%S</span>Seconds</div>'
            )
          );
        });
      }),
    e(".clock-wrapper").length &&
      (function () {
        var e = new Date(),
          a = (e.getHours() / 12) * 360 + (e.getMinutes() / 60) * 30,
          t = (e.getMinutes() / 60) * 360 + (e.getSeconds() / 60) * 6,
          n = (e.getSeconds() / 60) * 360,
          o = [
            "@-webkit-keyframes rotate-hour{from{transform:rotate(" +
              a +
              "deg);}to{transform:rotate(" +
              (a + 360) +
              "deg);}}",
            "@-webkit-keyframes rotate-minute{from{transform:rotate(" +
              t +
              "deg);}to{transform:rotate(" +
              (t + 360) +
              "deg);}}",
            "@-webkit-keyframes rotate-second{from{transform:rotate(" +
              n +
              "deg);}to{transform:rotate(" +
              (n + 360) +
              "deg);}}",
            "@-moz-keyframes rotate-hour{from{transform:rotate(" +
              a +
              "deg);}to{transform:rotate(" +
              (a + 360) +
              "deg);}}",
            "@-moz-keyframes rotate-minute{from{transform:rotate(" +
              t +
              "deg);}to{transform:rotate(" +
              (t + 360) +
              "deg);}}",
            "@-moz-keyframes rotate-second{from{transform:rotate(" +
              n +
              "deg);}to{transform:rotate(" +
              (n + 360) +
              "deg);}}",
          ].join("");
        document.getElementById("clock-animations").innerHTML = o;
      })(),
    e(".shop-page .image-carousel").length &&
      e(".shop-page .thumbs-carousel").length)
  ) {
    var f = e(".shop-page .image-carousel"),
      p = e(".shop-page .thumbs-carousel"),
      g = !1;
    f
      .owlCarousel({
        loop: !0,
        items: 1,
        margin: 0,
        nav: !1,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>',
        ],
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
      })
      .on("changed.owl.carousel", function (e) {
        g ||
          ((g = !1),
          p.trigger("to.owl.carousel", [e.item.index, 500, !0]),
          (g = !1));
      }),
      p
        .owlCarousel({
          loop: !0,
          margin: 20,
          items: 1,
          nav: !0,
          navText: [
            '<span class="icon fa fa-angle-left"></span>',
            '<span class="icon fa fa-angle-right"></span>',
          ],
          dots: !1,
          center: !1,
          autoplay: !0,
          autoplayTimeout: 5e3,
          responsive: {
            0: { items: 2, autoWidth: !1 },
            400: { items: 3, autoWidth: !1 },
            600: { items: 4, autoWidth: !1 },
            900: { items: 5, autoWidth: !1 },
            1e3: { items: 4, autoWidth: !1 },
          },
        })
        .on("click", ".owl-item", function () {
          f.trigger("to.owl.carousel", [e(this).index(), 500, !0]);
        })
        .on("changed.owl.carousel", function (e) {
          g ||
            ((g = !0),
            f.trigger("to.owl.carousel", [e.item.index, 500, !0]),
            (g = !1));
        });
  }
  (e(".quantity-spinner").length &&
    e("input.quantity-spinner").TouchSpin({ verticalbuttons: !0 }),
  e(".tabs-box").length &&
    e(".tabs-box .tab-buttons .tab-btn").on("click", function (a) {
      a.preventDefault();
      var t = e(e(this).attr("data-tab"));
      if (e(t).is(":visible")) return !1;
      t
        .parents(".tabs-box")
        .find(".tab-buttons")
        .find(".tab-btn")
        .removeClass("active-btn"),
        e(this).addClass("active-btn"),
        t.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0),
        t
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab"),
        e(t).fadeIn(300),
        e(t).addClass("active-tab");
    }),
  e(".accordion-box").length &&
    e(".accordion-box").on("click", ".acc-btn", function () {
      var a = e(this).parents(".accordion-box"),
        t = e(this).parents(".accordion");
      if (
        (!0 !== e(this).hasClass("active") &&
          e(a).find(".accordion .acc-btn").removeClass("active"),
        e(this).next(".acc-content").is(":visible"))
      )
        return !1;
      e(this).addClass("active"),
        e(a).children(".accordion").removeClass("active-block"),
        e(a).find(".accordion").children(".acc-content").slideUp(300),
        t.addClass("active-block"),
        e(this).next(".acc-content").slideDown(300);
    }),
  e(".lightbox-image").length &&
    e(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: { media: {} },
    }),
  e("#contact-form").length &&
    e("#contact-form").validate({
      rules: {
        username: { required: !0 },
        email: { required: !0, email: !0 },
        phone: { required: !0 },
        subject: { required: !0 },
        message: { required: !0 },
      },
    }),
  e(".scroll-to-target").length &&
    e(".scroll-to-target").on("click", function () {
      var a = e(this).attr("data-target");
      e("html, body").animate({ scrollTop: e(a).offset().top }, 1500);
    }),
  e(".wow").length) &&
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
    }).init();
  e(window).on("scroll", function () {
    a();
  }),
    e(window).on("load", function () {
      e(".preloader").length && e(".preloader").delay(200).fadeOut(500);
    });
})(window.jQuery);
