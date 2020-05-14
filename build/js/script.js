
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// hide Loader
$(window).on('load', function () {
  $('#loading').fadeOut();
  $("body").removeClass("overflowHidden");
});
$(document).ready(function () {
  // Menu Toggle Function
  // menu open
  $("#navbar__menu").click(function (e) {
    e.preventDefault();
    $("#Menupopup").toggleClass("toggleMenu");
    $("#Menupopup .popup__container").toggleClass("scale-up-center");
    $("#Menupopup .popup__container").removeClass("scale-down-center");
    $("body").toggleClass("overflowHidden");
  }); // menu close

  $("#menu-close a, #Menupopup .popup__container ").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $("#Menupopup").toggleClass("toggleMenu");
    $("#Menupopup .popup__container").toggleClass("scale-down-center");
    $("#Menupopup .popup__container").removeClass("scale-up-center");
    $("body").toggleClass("overflowHidden");
  });
  $(".popup__menu-cont, .popup__menu-shape").click(function (e) {
    e.stopPropagation();
  }); // Investors Menu Handling

  $('.investorsMenuKey').on('click', function () {
    $('.investorsMenuContain').toggleClass('open');
    $('.menuOverLay').fadeToggle('fast'); // menu open sub menu 
    // open

    $(".popup__menu-cont .menu-item menu-item-has-children").each(function (i, el) {
      $(el).on("click", function () {
        $(el).find(".sub-menu").css("display", "block");
      });
    }); // close

    var closeDropDown = $(".popup__menu-cont .menu-item menu-item-has-children .sub-menu .closeD a");
    closeDropDown.each(function (i, el) {
      $(el).on("click", function () {
        $(el).closest(".sub-menu").css("display", "none");
      });
    });
  }); // Investors Tabs Handling

  var textDivs = $(".investorsTabItem_board_b-text:visible");
  function checkMediaFortextDivs(x,textDivss) {
       if (x.matches) { // If media query matches
        if (textDivss) {
          console.log(textDivss)
          for (var i =0; i <= textDivss.length; i++ ) {
            if (i >= 1) {
                var box = document.getElementById('customScroll' + i);
                new SimpleBar(box)
            }
          }
        }
           
       } 
   }
   var x = window.matchMedia("(min-width: 900px)")
   checkMediaFortextDivs(x,textDivs); 

  $('.investorsTabsKey').on('click', function () {
    var relatedData = $(this).attr('related-data');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.investorsTabItem').hide();
    $('.' + relatedData).fadeIn('fast');
    console.log("clicked");
    let textDivs = $(".investorsTabItem_board_b-text");
   checkMediaFortextDivs(x,textDivs);
  }); // Investors menu sticky on scroll

  if ($('.investorsData').length) {
    $(window).on('scroll', function () {
      var scrollNumb = $(window).scrollTop();
      var dataPosition = $('.investorsData').position().top;

      if (scrollNumb > dataPosition) {
        $('.investorsBCContain .investorsMenuKeyWrap').addClass('sticky');
      } else {
        $('.investorsBCContain .investorsMenuKeyWrap').removeClass('sticky');
      }
    });
  } // COUNTER FUNCTION in homepage facts SECTION


  window.addEventListener("scroll", counter);
  $(window).on('load', counter);
  var counters = $(".facts__counter--number .num");
  var countersArr = [];

  for (var i = 0; i < counters.length; i++) {
    countersArr.push(counters[i]);
  }

  function counter() {
    if ($('#facts').offset() != undefined) {
      if (pageYOffset > $('#facts').offset().top - 350) {
        countersArr.forEach(function (number, i) {
          var id = setInterval(count, 50);
          var start = 0;
          var finalVal = $(countersArr[i]).parent(".facts__counter--number").attr("num");

          function count() {
            if (start >= finalVal) {
              clearInterval(id);
            } else {
              start++;
              number.textContent = start;
            }
          }
        });
        window.removeEventListener("scroll", counter);
      }
    }
  } // ///change navbar background to gray when scroll in homepage and in all other pages  ////


  $(window).scroll(function () {
    checkMenuScrollTop();
  });
  checkMenuScrollTop();

  function checkMenuScrollTop() {
    var scroll = $(window).scrollTop();
    var dir = $("html").attr("dir");

    if ($("body").hasClass("homePage")) {
      // homepage only
      if (scroll > 550) {
        $(".navbar").addClass("navGray");
        checkNavLogo();
      } else {
        $(".navbar").removeClass("navGray");
        checkNavLogo();
      }
    } else {//other pages
      // if(dir == "rtl") {
      //     $(".navbar__logo img").attr('src', "img/icons/logoAr.png");
      // }
    }
  } // system msg alert popup


  var sysCloseIcon = $(".sys_msg_text a");
  sysCloseIcon.on("click", function () {
    sysCloseIcon.closest(".sys_msg").fadeOut();
  }); // change lang selct chevron color and logo img depend on navbar 

  var logoImg = $(".navbar").find(".navbar__logo img");
  var langArrow = $(".navbar").find(".lang_selected_arrow");

  function checkNavLogo() {
    if ($(".navbar").hasClass("navGray")) {
      $(logoImg).attr("src", $(logoImg).attr("src1"));
      $(langArrow).attr("src", $(langArrow).attr("src1"));
    } else {
      $(logoImg).attr("src", $(logoImg).attr("src2"));
      $(langArrow).attr("src", $(langArrow).attr("src2"));
    }
  }

  checkNavLogo(); // show and hide languages select dropdown in desktop 
  // $(".lang_selected").on("click", () => {  
  //    $("#langsList").fadeToggle(); 
  // })
  // $("body").click((e) => {
  //     e.stopPropagation();
  //     if ($(e.target).hasClass('lang_selected') || $(e.target).hasClass('langSelect') ||$(e.target).hasClass('lang_selected_lang') || $(e.target).hasClass('lang_selected_arrow')) {
  //         return false;  
  //     } else {
  //         $("#langsList").fadeOut();
  //     }
  // })
  // //////////////////////////

  if ($(".solutionsTabs a.active")) {
    var img = $(".solutionsTabs a.active").find("img");
    var imgNewSrc = $(img).attr("data-src");
    $(img).attr("src", imgNewSrc);
  }

  $('.careers_loc_tabs a ').each(function (i, ele) {
    $(ele).click(function () {
      $('.careers_loc_tabs a ').removeClass("active");
      $(ele).addClass("active");
      $(".careers_loc_content").css("display", "none");
      $(".careers_loc_content").each(function (i, el) {
        if ($(el).hasClass($(ele).attr("data-target"))) {
          $(el).fadeIn();
        }
      });
    });
  });
  $("#careers_loc_tabs_select").on("change", function () {
    $(".careers_loc_content").css("display", "none");
    $(".careers_loc_content").each(function (i, el) {
      if ($(el).hasClass($("#careers_loc_tabs_select").val())) {
        $(el).fadeIn();
      }
    });
  });
  $(".careers_loc_content > .careers_loc_content_head").not(".careers_loc_content_head.careers_loc_content_body").each(function (i, el) {
    $(el).on("click", function () {
      $(el).closest(".careers_loc_content").find(".careers_loc_content_body").slideToggle().css("display", "flex");
      $(el).find("img").toggleClass("open");
    });
  }); // custom input file 

  document.querySelector("html").classList.add('js');

  var fileInputs = document.querySelectorAll(".input-file"),
      buttons = document.querySelectorAll(".input-file-trigger"),
      the_returns = document.querySelectorAll(".file-return"),
      fileInputArr = _toConsumableArray(fileInputs),
      buttonsArr = _toConsumableArray(buttons),
      the_returnsArr = _toConsumableArray(the_returns);

  for (var i = 0; i < fileInputArr.length; i++) {
    $(buttonsArr[i]).on("keydown", function (event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        fileInputArr[i].focus();
      }
    });
    buttonsArr[i].addEventListener("click", function (event) {
      fileInputArr[i].focus();
      return false;
    });
    fileInputArr[i].addEventListener("change", function (event) {
      $(this).parent().parent().next().text(this.files[0].name);
    });
  } // career apply now btn scroll to form 


  $(".apply_now_btn a ").each(function (i, el) {
    $(el).on("click", function (e) {
      e.preventDefault();
      var jobName = $(el).closest(".careers_loc_content").find(".careers_loc_content_head-title h3").text().toLowerCase();
      $('html, body').animate({
        scrollTop: $(".application_form_form").offset().top
      }, 800);
      var jobPos = $(".application_form_form").find(".custom_input #Position");
      $(jobPos).val(jobName);
      if ($(el).closest(".careers_loc_content").hasClass("EGYPT")) {
        $("#loc").val("EGYPT")
      } else if ($(el).closest(".careers_loc_content").hasClass("POLAND")) {
        $("#loc").val("POLAND")
      } else if ($(el).closest(".careers_loc_content").hasClass("UAE")){
        $("#loc").val("UAE")
      }
     console.log($("#loc").val())
    });
  }); 

  $(".Languages_img img");

  function myFunction(checkMedia) {
    if (checkMedia.matches) {
      // If media query matches
      $(".Languages_img img").attr("src", $(".Languages_img img").attr("srcM"));
    } else {
      $(".Languages_img img").attr("src", $(".Languages_img img").attr("srcD"));
    }
  }

  var checkMedia = window.matchMedia("(max-width: 600px)");
  myFunction(checkMedia); //   animation on big white buttons

  $(".main_btn_white").hover(function () {
    $(this).find("span").width("1%");
    $(this).find("span").animate({
      width: "24%"
    }, 1000);
  }, function () {}); //   add title and back btn to menu after the page load

  var backSrc = $("#Menupopup").attr("backSrc");
  $("#Menupopup .menu-item_cont > .menu-item ").each(function (i, el) {
    if ($(el).hasClass("menu-item-has-children")) {
      $(el).children("a").on("click", function (e) {
        e.stopPropagation();
        $(el).children("a").next().css("display", "block");
        var liName = $(el).children("a").text();

        if ($(el).children("a").next().find("li").first().hasClass("closeD")) {} else {
          $(el).find(".sub-menu").prepend("<li>".concat(liName, "</li>"));
          $(el).find(".sub-menu").prepend(" <li class='closeD'><a onclick='$(this).closest(\".sub-menu\").css(\"display\",\"none\")'><img src='".concat(backSrc, "' alt='back icon'>Back </a></li>"));
        }
      });
    }
  }); //   accordion toggle

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      $(acc).not($(this)).removeClass("active");
      $(acc).not($(this)).find("img").removeClass("active");
      $(acc).not($(this)).next().slideUp();
      this.classList.toggle("active");
      $(this).find("img").toggleClass("active");
      var panel = this.nextElementSibling;
      $(panel).slideToggle();
    });
  } // dispay empty content in IR tabs


  if ($(".emptyCont").next().length != 0) {
    $(".emptyCont").css("display", "none");
  } else {
    $(".emptyCont").css("display", "flex");
  }

  $("#eventContent").click(function () {
    $(this).fadeOut(300);
  });
  $("#eventContent > div").click(function (e) {
    e.stopPropagation();
  });
  $("#closeEve").click(function () {
    $("#eventContent").fadeOut(300);
  });


  $("#tab_mobile").on("change", function () {
    var relatedData = $("#tab_mobile").val();
    $('.investorsTabItem').hide();
    $('.' + relatedData).fadeIn('fast');
  });


  $("select[multiple]").mousedown(function(e){
    e.preventDefault();

    var select = this;
    var scroll = select.scrollTop;

    e.target.selected = !e.target.selected;

    setTimeout(function(){select.scrollTop = scroll;}, 0);

    $(select ).focus();
}).mousemove(function(e){e.preventDefault()});


if($(".tabcontents_link .DIFFERENTIATORS_loc_link").length == 0) {
  $(".tabcontents_link .tabcontents").css("height", "100%");
}


function tabName(evt, TabContent) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(TabContent).style.display = "block";
  evt.currentTarget.className += " active";
  }

  $("#tab_mobile").on("change", () => {
      tabName(event, $("#tab_mobile").val());
  } )




    if ($(window).width() <= 767) {  
      $(".menu-item.menu-item-has-children > a").removeAttr("href");
          

    }     



   var menuCustomScroll = document.getElementById('menuCustomScroll')
   new SimpleBar(menuCustomScroll);





}); //jquery end

$(window).scroll(function(){
  inqueryPosi()
  
});

function inqueryPosi() {
  var scroll = $(window).scrollTop();
  if (scroll > $(".footer").offset().top -600 ) {
    
    $(".inquiry_links").css("position", "static");
    
  } else {
    
    $(".inquiry_links").css("position", "fixed");
    
  }
}

inqueryPosi();

$(".cert_icons").css("bottom", $(".footer_foot").css("height"))
$(window).on("resize", function() {
  $(".cert_icons").css("bottom", $(".footer_foot").css("height"))
})


var mySwiper_4 = new Swiper ('.testmonialsSlider .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0, 
  speed: 700,
  loop: $(".testmonialsSlider .swiper-container").find(".swiper-slide").length > 1 ? true : false,
  paginationClickable: true,
  watchSlidesProgress: true,
  autoplay: {
      delay: 5000,
      
  },
  navigation: {
  nextEl: '.testmonialsSlider .swiper-button-next_w',
  prevEl: '.testmonialsSlider .swiper-button-prev_w',
  }
})

$(".openCases a").on("click", function(e) {
 
  e.preventDefault();
  $(".popUp.investorsTabItem").toggleClass("openit");
//   if ($(".popUp.investorsTabItem").css("display") == "none") {
//     $(".popUp.investorsTabItem").css("display", "flex");
//     $(".investorsTabItem_board_b").fadeIn();
//   } else if ($(".popUp.investorsTabItem").css("display") == "block") {
//     $(".popUp.investorsTabItem").css("display", "none")
//   } else if ($(".popUp.investorsTabItem").css("display") == "flex") {
//     $(".popUp.investorsTabItem").css("display", "none")
//   }
})

$(".popUp.investorsTabItem").on("click", function(e) {
  e.stopPropagation();
  $(".popUp.investorsTabItem").toggleClass("openit");
})
$(".popUp.investorsTabItem .close").on("click", function(e) {
  e.stopPropagation();
  $(".popUp.investorsTabItem").toggleClass("openit");
})

$(".popUp.investorsTabItem .investorsTabItem_board").on("click", function(e) {
  e.stopPropagation();
  
})

$(".btns .ok").on("click", function(e) {
  e.preventDefault();
   console.log("hee")
   $(this).closest(".cookies").fadeOut();
 })