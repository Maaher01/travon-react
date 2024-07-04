(function ($) {
  "use strict";
  /*=================================
      JS Index Here
    ==================================*/
  /*
    01. On Load Function
    02. Preloader
    03. Mobile Menu Active
    04. Sticky fix
    05. Scroll To Top
    06. Set Background Image, Color & Mask
    07. Global Slider
    08. Custom Animaiton For Slider
    09. Ajax Contact Form
    10. Search Box Popup
    11. Magnific Popup
    12. Section Position
    13. Filter
    14. Counter Up
    15. AS Tab
    16. Shape Mockup
    17. Countdown
    18. Progress Bar Animation
    19. Nice Select
    20. Rating Toggle
    00. Right Click Disable
  */
  /*=================================
      JS Index End
  ==================================*/
  /*

  /*---------- 01. On Load Function ----------*/
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });

  /*---------- 02. Preloader ----------*/
  if ($(".preloader").length > 0) {
    $(".preloaderCls").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".preloader").css("display", "none");
      });
    });
  }

  /*---------- 03. Mobile Menu Active ----------*/
  $.fn.asmobilemenu = function (options) {
    var opt = $.extend(
      {
        menuToggleBtn: ".ot-menu-toggle",
        bodyToggleClass: "ot-body-visible",
        subMenuClass: "ot-submenu",
        subMenuParent: "ot-item-has-children",
        subMenuParentToggle: "ot-active",
        meanExpandClass: "ot-mean-expand",
        appendElement: '<span class="ot-mean-expand"></span>',
        subMenuToggleClass: "ot-open",
        toggleSpeed: 400,
      },
      options
    );

    return this.each(function () {
      var menu = $(this); // Select menu

      // Menu Show & Hide
      function menuToggle() {
        menu.toggleClass(opt.bodyToggleClass);

        // collapse submenu on menu hide or show
        var subMenu = "." + opt.subMenuClass;
        $(subMenu).each(function () {
          if ($(this).hasClass(opt.subMenuToggleClass)) {
            $(this).removeClass(opt.subMenuToggleClass);
            $(this).css("display", "none");
            $(this).parent().removeClass(opt.subMenuParentToggle);
          }
        });
      }

      // Class Set Up for every submenu
      menu.find("li").each(function () {
        var submenu = $(this).find("ul");
        submenu.addClass(opt.subMenuClass);
        submenu.css("display", "none");
        submenu.parent().addClass(opt.subMenuParent);
        submenu.prev("a").append(opt.appendElement);
        submenu.next("a").append(opt.appendElement);
      });

      // Toggle Submenu
      function toggleDropDown($element) {
        if ($($element).next("ul").length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).next("ul").slideToggle(opt.toggleSpeed);
          $($element).next("ul").toggleClass(opt.subMenuToggleClass);
        } else if ($($element).prev("ul").length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).prev("ul").slideToggle(opt.toggleSpeed);
          $($element).prev("ul").toggleClass(opt.subMenuToggleClass);
        }
      }

      // Submenu toggle Button
      var expandToggler = "." + opt.meanExpandClass;
      $(expandToggler).each(function () {
        $(this).on("click", function (e) {
          e.preventDefault();
          toggleDropDown($(this).parent());
        });
      });

      // Menu Show & Hide On Toggle Btn click
      $(opt.menuToggleBtn).each(function () {
        $(this).on("click", function () {
          menuToggle();
        });
      });

      // Hide Menu On out side click
      menu.on("click", function (e) {
        e.stopPropagation();
        menuToggle();
      });

      // Stop Hide full menu on menu click
      menu.find("div").on("click", function (e) {
        e.stopPropagation();
      });
    });
  };

  $(".ot-menu-wrapper").asmobilemenu();

  /*---------- 04. Sticky fix ----------*/
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 500) {
      $(".sticky-wrapper").addClass("sticky");
    } else {
      $(".sticky-wrapper").removeClass("sticky");
    }
  });

  /*---------- 05. Scroll To Top ----------*/
  // progressAvtivation
  if ($(".scroll-top").length > 0) {
    var scrollTopbtn = document.querySelector(".scroll-top");
    var progressPath = document.querySelector(".scroll-top path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 750;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(scrollTopbtn).addClass("show");
      } else {
        jQuery(scrollTopbtn).removeClass("show");
      }
    });
    jQuery(scrollTopbtn).on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  }

  /*---------- 06. Set Background Image, Color & Mask ----------*/

  //Background Image
  // if ($("[data-bg-src]").length > 0) {
  //   $("[data-bg-src]").each(function () {
  //     var src = $(this).attr("data-bg-src");
  //     $(this).css("background-image", "url(" + src + ")");
  //     $(this).removeAttr("data-bg-src").addClass("background-image");
  //   });
  // }

  if ($("[data-bg-color]").length > 0) {
    $("[data-bg-color]").each(function () {
      var color = $(this).attr("data-bg-color");
      $(this).css("background-color", color);
      $(this).removeAttr("data-bg-color");
    });
  }

  if ($("[data-mask-src]").length > 0) {
    $("[data-mask-src]").each(function () {
      var mask = $(this).attr("data-mask-src");
      $(this).css({
        "mask-image": "url(" + mask + ")",
        "-webkit-mask-image": "url(" + mask + ")",
      });
      $(this).addClass("bg-mask");
      $(this).removeAttr("data-mask-src");
    });
  }

  /*----------- 07. Global Slider ----------*/
  $(".ot-carousel").each(function () {
    var asSlide = $(this);

    // Collect Data
    function d(data) {
      return asSlide.data(data);
    }

    // Custom Arrow Button
    var prevButton =
        '<button type="button" class="slick-prev"><i class="' +
        d("prev-arrow") +
        '"></i></button>',
      nextButton =
        '<button type="button" class="slick-next"><i class="' +
        d("next-arrow") +
        '"></i></button>';

    // Function For Custom Arrow Btn
    $("[data-slick-next]").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $($(this).data("slick-next")).slick("slickNext");
      });
    });

    $("[data-slick-prev]").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $($(this).data("slick-prev")).slick("slickPrev");
      });
    });

    // Check for arrow wrapper
    if (d("arrows") == true) {
      if (!asSlide.closest(".arrow-wrap").length) {
        asSlide.closest(".container").parent().addClass("arrow-wrap");
      }
    }

    asSlide.slick({
      dots: d("dots") ? true : false,
      fade: d("fade") ? true : false,
      arrows: d("arrows") ? true : false,
      speed: d("speed") ? d("speed") : 1000,
      asNavFor: d("asnavfor") ? d("asnavfor") : false,
      autoplay: d("autoplay") == false ? false : true,
      infinite: d("infinite") == false ? false : true,
      slidesToShow: d("slide-show") ? d("slide-show") : 1,
      slidesToScroll: d("slide-scroll") ? d("slide-scroll") : 1,
      adaptiveHeight: d("adaptive-height") ? true : false,
      centerMode: d("center-mode") ? true : false,
      autoplaySpeed: d("autoplay-speed") ? d("autoplay-speed") : 8000,
      centerPadding: d("center-padding") ? d("center-padding") : "0",
      focusOnSelect: d("focuson-select") == false ? false : true,
      pauseOnFocus: d("pauseon-focus") ? true : false,
      pauseOnHover: d("pauseon-hover") ? true : false,
      variableWidth: d("variable-width") ? true : false,
      vertical: d("vertical") ? true : false,
      verticalSwiping: d("vertical") ? true : false,
      swipeToSlide: d("swipe-slide") ? false : true,
      prevArrow: d("prev-arrow")
        ? prevButton
        : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
      nextArrow: d("next-arrow")
        ? nextButton
        : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
      rtl: $("html").attr("dir") == "rtl" ? true : false,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            arrows: d("xl-arrows") ? true : false,
            dots: d("xl-dots") ? true : false,
            slidesToShow: d("xl-slide-show")
              ? d("xl-slide-show")
              : d("slide-show"),
            centerMode: d("xl-center-mode") ? true : false,
            centerPadding: "0",
          },
        },
        {
          breakpoint: 1400,
          settings: {
            arrows: d("ml-arrows") ? true : false,
            dots: d("ml-dots") ? true : false,
            slidesToShow: d("ml-slide-show")
              ? d("ml-slide-show")
              : d("slide-show"),
            centerMode: d("ml-center-mode") ? true : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: d("lg-arrows") ? true : false,
            dots: d("lg-dots") ? true : false,
            slidesToShow: d("lg-slide-show")
              ? d("lg-slide-show")
              : d("slide-show"),
            centerMode: d("lg-center-mode") ? d("lg-center-mode") : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: d("md-arrows") ? true : false,
            dots: d("md-dots") ? true : false,
            slidesToShow: d("md-slide-show") ? d("md-slide-show") : 1,
            centerMode: d("md-center-mode") ? d("md-center-mode") : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: d("sm-arrows") ? true : false,
            dots: d("sm-dots") ? true : false,
            slidesToShow: d("sm-slide-show") ? d("sm-slide-show") : 1,
            centerMode: d("sm-center-mode") ? d("sm-center-mode") : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: d("xs-arrows") ? true : false,
            dots: d("xs-dots") ? true : false,
            slidesToShow: d("xs-slide-show") ? d("xs-slide-show") : 1,
            centerMode: d("xs-center-mode") ? d("xs-center-mode") : false,
            centerPadding: 0,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });

  /*----------- 08. Custom Animaiton For Slider ----------*/
  $("[data-ani-duration]").each(function () {
    var durationTime = $(this).data("ani-duration");
    $(this).css("animation-duration", durationTime);
  });

  $("[data-ani-delay]").each(function () {
    var delayTime = $(this).data("ani-delay");
    $(this).css("animation-delay", delayTime);
  });

  $("[data-ani]").each(function () {
    var animaionName = $(this).data("ani");
    $(this).addClass(animaionName);
    $(".slick-current [data-ani]").addClass("ot-animated");
  });

  $(".ot-carousel").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(slick.$slides).find("[data-ani]").removeClass("ot-animated");
      $(slick.$slides[currentSlide]).find("[data-ani]").addClass("ot-animated");
    }
  );

  $("#dealSlide2").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /*----------- 09. Ajax Contact Form ----------*/
  var form = ".ajax-contact";
  var invalidCls = "is-invalid";
  var $email = '[name="email"]';
  var $validation =
    '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'; // Must be use (,) without any space
  var formMessages = $(".form-messages");

  function sendContact() {
    var formData = $(form).serialize();
    var valid;
    valid = validateContact();
    if (valid) {
      jQuery
        .ajax({
          url: $(form).attr("action"),
          data: formData,
          type: "POST",
        })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          formMessages.removeClass("error");
          formMessages.addClass("success");
          // Set the message text.
          formMessages.text(response);
          // Clear the form.
          $(form + ' input:not([type="submit"]),' + form + " textarea").val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          formMessages.removeClass("success");
          formMessages.addClass("error");
          // Set the message text.
          if (data.responseText !== "") {
            formMessages.html(data.responseText);
          } else {
            formMessages.html(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    }
  }

  function validateContact() {
    var valid = true;
    var formInput;

    function unvalid($validation) {
      $validation = $validation.split(",");
      for (var i = 0; i < $validation.length; i++) {
        formInput = form + " " + $validation[i];
        if (!$(formInput).val()) {
          $(formInput).addClass(invalidCls);
          valid = false;
        } else {
          $(formInput).removeClass(invalidCls);
          valid = true;
        }
      }
    }
    unvalid($validation);

    if (
      !$($email).val() ||
      !$($email)
        .val()
        .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
    ) {
      $($email).addClass(invalidCls);
      valid = false;
    } else {
      $($email).removeClass(invalidCls);
      valid = true;
    }
    return valid;
  }

  $(form).on("submit", function (element) {
    element.preventDefault();
    sendContact();
  });

  /*---------- 09. Popup Sidemenu ----------*/
  //function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
  // Sidebar Popup
  //   $($sideMunuOpen).on("click", function (e) {
  //     e.preventDefault();
  //     $($sideMenu).addClass($toggleCls);
  //   });
  //   $($sideMenu).on("click", function (e) {
  //     e.stopPropagation();
  //     $($sideMenu).removeClass($toggleCls);
  //   });
  //   var sideMenuChild = $sideMenu + " > div";
  //   $(sideMenuChild).on("click", function (e) {
  //     e.stopPropagation();
  //     $($sideMenu).addClass($toggleCls);
  //   });
  //   $($sideMenuCls).on("click", function (e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     $($sideMenu).removeClass($toggleCls);
  //   });
  // }
  // popupSideMenu(
  //   ".sidemenu-wrapper",
  //   ".sideMenuToggler",
  //   ".sideMenuCls",
  //   "show"
  // );

  document.addEventListener("DOMContentLoaded", function () {
    const sideMenuWrapper = document.querySelector(".sidemenu-wrapper");
    const sideMenuToggler = document.querySelector(".sideMenuToggler");
    const closeBtn = document.querySelector(".closeButton");

    closeBtn.addEventListener("click", () => {
      sideMenuWrapper.style.right = "-120rem";
    });

    sideMenuToggler.addEventListener("click", () => {
      sideMenuWrapper.style.right = "0";
    });

    // search box popup
    function popupSearchBox(searchBox, searchOpen, searchClose, toggleClass) {
      document
        .querySelector(searchOpen)
        .addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(searchBox).classList.add(toggleClass);
        });

      document.querySelector(searchBox).addEventListener("click", function (e) {
        e.stopPropagation();
        document.querySelector(searchBox).classList.remove(toggleClass);
      });

      document
        .querySelector(searchBox)
        .querySelector("form")
        .addEventListener("click", function (e) {
          e.stopPropagation();
          document.querySelector(searchBox).classList.add(toggleClass);
        });

      document
        .querySelector(searchClose)
        .addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          document.querySelector(searchBox).classList.remove(toggleClass);
        });
    }

    popupSearchBox(
      ".popup-search-box",
      ".searchBoxToggler",
      ".searchClose",
      "show"
    );

    //mobile sidebar
    // const bars = document.querySelector(".fa-bars");
    // const closeMobileSidebar = document.querySelector(".ot-menu-toggle");
    // const otWrapper = document.querySelector(".ot-menu-wrapper");

    // bars.addEventListener("click", () => {
    //   otWrapper.style.left = "0";
    // });

    // closeMobileSidebar.addEventListener("click", () => {
    //   otWrapper.style.left = "-65rem";
    // });
  });

  /*---------- 10. Search Box Popup ----------*/
  // function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
  //   $($searchOpen).on("click", function (e) {
  //     e.preventDefault();
  //     $($searchBox).addClass($toggleCls);
  //   });
  //   $($searchBox).on("click", function (e) {
  //     e.stopPropagation();
  //     $($searchBox).removeClass($toggleCls);
  //   });
  //   $($searchBox)
  //     .find("form")
  //     .on("click", function (e) {
  //       e.stopPropagation();
  //       $($searchBox).addClass($toggleCls);
  //     });
  //   $($searchCls).on("click", function (e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     $($searchBox).removeClass($toggleCls);
  //   });
  // }
  // popupSarchBox(
  //   ".popup-search-box",
  //   ".searchBoxToggler",
  //   ".searchClose",
  //   "show"
  // );

  /*----------- 11. Magnific Popup ----------*/
  /* magnificPopup img view */
  // $(".popup-image").magnificPopup({
  //   type: "image",
  //   gallery: {
  //     enabled: true,
  //   },
  // });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /* magnificPopup video view */
  $(".popup-content").magnificPopup({
    type: "inline",
    midClick: true,
  });

  /*---------- 12. Section Position ----------*/
  // Interger Converter
  function convertInteger(str) {
    return parseInt(str, 10);
  }

  $.fn.sectionPosition = function (mainAttr, posAttr) {
    $(this).each(function () {
      var section = $(this);

      function setPosition() {
        var sectionHeight = Math.floor(section.height() / 2), // Main Height of section
          posData = section.attr(mainAttr), // where to position
          posFor = section.attr(posAttr), // On Which section is for positioning
          topMark = "top-half", // Pos top
          bottomMark = "bottom-half", // Pos Bottom
          parentPT = convertInteger($(posFor).css("padding-top")), // Default Padding of  parent
          parentPB = convertInteger($(posFor).css("padding-bottom")); // Default Padding of  parent

        if (posData === topMark) {
          $(posFor).css("padding-bottom", parentPB + sectionHeight + "px");
          section.css("margin-top", "-" + sectionHeight + "px");
        } else if (posData === bottomMark) {
          $(posFor).css("padding-top", parentPT + sectionHeight + "px");
          section.css("margin-bottom", "-" + sectionHeight + "px");
        }
      }
      setPosition(); // Set Padding On Load
    });
  };

  var postionHandler = "[data-sec-pos]";
  if ($(postionHandler).length) {
    $(postionHandler).imagesLoaded(function () {
      $(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
    });
  }

  /*----------- 13. Filter ----------*/
  $(".filter-active").imagesLoaded(function () {
    var $filter = ".filter-active",
      $filterItem = ".filter-item",
      $filterMenu = ".filter-menu-active";

    if ($($filter).length > 0) {
      var $grid = $($filter).isotope({
        itemSelector: $filterItem,
        filter: "*",
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1,
        },
      });

      // filter items on button click
      $($filterMenu).on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });

      // Menu Active Class
      $($filterMenu).on("click", "button", function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $(this).siblings(".active").removeClass("active");
      });
    }
  });

  $(".masonary-active").imagesLoaded(function () {
    var $filter = ".masonary-active",
      $filterItem = ".filter-item",
      $filterMenu = ".filter-menu-active";

    if ($($filter).length > 0) {
      var $grid = $($filter).isotope({
        itemSelector: $filterItem,
        filter: "*",
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1,
        },
      });
    }
    $('[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
      $($filter).isotope({
        filter: "*",
      });
    });
  });

  // Active specifix
  $(".filter-active-cat1").imagesLoaded(function () {
    var $filter = ".filter-active-cat1",
      $filterItem = ".filter-item",
      $filterMenu = ".filter-menu-active";

    if ($($filter).length > 0) {
      var $grid = $($filter).isotope({
        itemSelector: $filterItem,
        filter: ".cat1",
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1,
        },
      });

      // filter items on button click
      $($filterMenu).on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });

      // Menu Active Class
      $($filterMenu).on("click", "button", function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $(this).siblings(".active").removeClass("active");
      });
    }
  });

  /*----------- 14. Counter Up ----------*/
  // $(".counter-number").counterUp({
  //   delay: 10,
  //   time: 700,
  // });

  /*---------- 15. AS Tab ----------*/
  $.fn.asTab = function (options) {
    var opt = $.extend(
      {
        sliderTab: false,
        tabButton: "button",
      },
      options
    );

    $(this).each(function () {
      var $menu = $(this);
      var $button = $menu.find(opt.tabButton);

      // Append indicator
      $menu.append('<span class="indicator"></span>');
      var $line = $menu.find(".indicator");

      // On Click Button Class Remove and indecator postion set
      $button.on("click", function (e) {
        e.preventDefault();
        var cBtn = $(this);
        cBtn.addClass("active").siblings().removeClass("active");
        if (opt.sliderTab) {
          $(slider).slick("slickGoTo", cBtn.data("slide-go-to"));
        } else {
          linePos();
        }
      });

      // Work With slider
      if (opt.sliderTab) {
        var slider = $menu.data("asnavfor"); // select slider

        // Select All button and set attribute
        var i = 0;
        $button.each(function () {
          var slideBtn = $(this);
          slideBtn.attr("data-slide-go-to", i);
          i++;

          // Active Slide On load > Actived Button
          if (slideBtn.hasClass("active")) {
            $(slider).slick("slickGoTo", slideBtn.data("slide-go-to"));
          }

          // Change Indicator On slide Change
          $(slider).on(
            "beforeChange",
            function (event, slick, currentSlide, nextSlide) {
              $menu
                .find(opt.tabButton + '[data-slide-go-to="' + nextSlide + '"]')
                .addClass("active")
                .siblings()
                .removeClass("active");
              linePos();
            }
          );
        });
      }

      // Indicator Position
      function linePos() {
        var $btnActive = $menu.find(opt.tabButton + ".active"),
          $height = $btnActive.css("height"),
          $width = $btnActive.css("width"),
          $top = $btnActive.position().top + "px",
          $left = $btnActive.position().left + "px";

        $line.get(0).style.setProperty("--height-set", $height);
        $line.get(0).style.setProperty("--width-set", $width);
        $line.get(0).style.setProperty("--pos-y", $top);
        $line.get(0).style.setProperty("--pos-x", $left);

        if ($($button).first().position().left == $btnActive.position().left) {
          $line.addClass("start").removeClass("center").removeClass("end");
        } else if (
          $($button).last().position().left == $btnActive.position().left
        ) {
          $line.addClass("end").removeClass("center").removeClass("start");
        } else {
          $line.addClass("center").removeClass("start").removeClass("end");
        }
      }
      linePos();
    });
  };

  // Call On Load
  if ($(".trip-tab").length) {
    $(".trip-tab").asTab({
      sliderTab: true,
      tabButton: ".trip-card",
    });
  }
  // Call On Load
  if ($(".testi-box-tab").length) {
    $(".testi-box-tab").asTab({
      sliderTab: true,
      tabButton: ".tab-btn",
    });
  }

  /*----------- 16. Shape Mockup ----------*/
  $.fn.shapeMockup = function () {
    var $shape = $(this);
    $shape.each(function () {
      var $currentShape = $(this),
        shapeTop = $currentShape.data("top"),
        shapeRight = $currentShape.data("right"),
        shapeBottom = $currentShape.data("bottom"),
        shapeLeft = $currentShape.data("left");
      $currentShape
        .css({
          top: shapeTop,
          right: shapeRight,
          bottom: shapeBottom,
          left: shapeLeft,
        })
        .removeAttr("data-top")
        .removeAttr("data-right")
        .removeAttr("data-bottom")
        .removeAttr("data-left")
        .parent()
        .addClass("shape-mockup-wrap");
    });
  };

  if ($(".shape-mockup")) {
    $(".shape-mockup").shapeMockup();
  }
  if ($(".world-map .dot")) {
    $(".world-map .dot").shapeMockup();
  }

  /*----------- 17. Countdown ----------*/

  $.fn.countdown = function () {
    $(this).each(function () {
      var $counter = $(this),
        countDownDate = new Date($counter.data("offer-date")).getTime(), // Set the date we're counting down toz
        exprireCls = "expired";

      // Finding Function
      function s$(element) {
        return $counter.find(element);
      }

      // Update the count down every 1 second
      var counter = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Check If value is lower than ten, so add zero before number
        days < 10 ? (days = "0" + days) : null;
        hours < 10 ? (hours = "0" + hours) : null;
        minutes < 10 ? (minutes = "0" + minutes) : null;
        seconds < 10 ? (seconds = "0" + seconds) : null;

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(counter);
          $counter.addClass(exprireCls);
          $counter.find(".message").css("display", "block");
        } else {
          // Output the result in elements
          s$(".day").html(days);
          s$(".hour").html(hours);
          s$(".minute").html(minutes);
          s$(".seconds").html(seconds);
        }
      }, 1000);
    });
  };

  if ($(".countdown-list").length) {
    $(".countdown-list").countdown();
  }

  /*----------- 18. Progress Bar Animation ----------*/
  $(".progress-bar").waypoint(
    function () {
      $(".progress-bar").css({
        animation: "animate-positive 1.8s",
        opacity: "1",
      });
    },
    { offset: "75%" }
  );

  /*----------- 19. Nice Select ----------*/

  if ($(".nice-select").length) {
    $(".nice-select").niceSelect();
  }

  /*----------- 20. Rating Toggle ----------*/
  $(".rating-select .stars a").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(this).siblings().removeClass("active");
      $(this).parent().parent().addClass("selected");
      $(this).addClass("active");
    });
  });

  /*----------- 00. Right Click Disable ----------*/
  //   window.addEventListener(
  //     "contextmenu",
  //     function (e) {
  //       // do something here...
  //       e.preventDefault();
  //     },
  //     false
  //   );

  /*----------- 00. Inspect Element Disable ----------*/
  // document.onkeydown = function (e) {
  //   if (event.keyCode == 123) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
  //     return false;
  //   }
  // };
})(jQuery);
