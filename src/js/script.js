   // hide Loader

$(window).on('load', function () {

    $('#loading').fadeOut();
    $("body").removeClass("overflowHidden");

});


$( document ).ready(function() {


    // Menu Toggle Function

    // menu open
    $("#navbar__menu").click(function(e){
        e.preventDefault()
        console.log("clicked");
        $("#Menupopup").toggleClass("toggleMenu");
        $("#Menupopup .popup__container").toggleClass("scale-up-center");
        $("#Menupopup .popup__container").removeClass("scale-down-center");
        $("body").toggleClass("overflowHidden");
    });

    // menu close
    $("#menu-close a, #Menupopup .popup__container ").click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $("#Menupopup").toggleClass("toggleMenu");
        $("#Menupopup .popup__container").toggleClass("scale-down-center");
        $("#Menupopup .popup__container").removeClass("scale-up-center");
       $("body").toggleClass("overflowHidden");
    });

    $(".popup__menu-cont, .popup__menu-shape").click(function(e) {
        e.stopPropagation();
    })


    // Investors Menu Handling
    $('.investorsMenuKey').on('click', function() {
        $('.investorsMenuContain').toggleClass('open');
        $('.menuOverLay').fadeToggle('fast');

    // menu open sub menu 

    // open
    $(".popup__menu-cont .menu-item menu-item-has-children").each((i, el) => {
        $(el).on("click", () => {
            $(el).find(".sub-menu").css("display","block")
        })
    })

    // close
    var closeDropDown = $(".popup__menu-cont .menu-item menu-item-has-children .sub-menu .closeD a")
    closeDropDown.each((i, el) => {
        $(el).on("click", () => {
            $(el).closest(".sub-menu").css("display","none")
        })
    })


    });
    // Investors Tabs Handling
    $('.investorsTabsKey').on('click', function() {
        var relatedData = $(this).attr('related-data');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.investorsTabItem').hide();
        $('.' + relatedData).fadeIn('fast');
    });
    // Investors menu sticky on scroll
    if($('.investorsData').length) {
        $(window).on('scroll', function() {
            var scrollNumb = $(window).scrollTop();
            var dataPosition = $('.investorsData').position().top;
            if(scrollNumb > dataPosition) {
                $('.investorsBCContain .investorsMenuKeyWrap').addClass('sticky')
            } else {
                $('.investorsBCContain .investorsMenuKeyWrap').removeClass('sticky')
            }
        });
    }
    
    // COUNTER FUNCTION in homepage facts SECTION
    window.addEventListener("scroll", counter);
    $(window).on('load', counter);
    var counters = $(".facts__counter--number .num");
    var countersArr = [];
    for(var i =0; i < counters.length; i++) {
        countersArr.push(counters[i]);
    }
    function counter(){
        if( $('#facts').offset() != undefined) {
            if(pageYOffset > ( $('#facts').offset().top - 350 )){  
                countersArr.forEach(function( number, i ){
                    var id = setInterval(count,50);
                    var start = 0;
                    var finalVal =  $(countersArr[i]).parent(".facts__counter--number").attr("num");
                    function count(){
                        if(start >= finalVal){
                            clearInterval(id);
                        }else{
                            start++;
                            number.textContent = start;
                        }
                    }        
                })
    
                window.removeEventListener("scroll", counter);
            }  
        }
       
    }

    
    // ///change navbar background to gray when scroll in homepage and in all other pages  ////
$(window).scroll(function() {    
    checkMenuScrollTop();
});
checkMenuScrollTop();

function checkMenuScrollTop() {
    var scroll = $(window).scrollTop();
    var dir = $("html").attr("dir");
    
    if ($("body").hasClass("homePage")) { // homepage only
        if (scroll > 550) {
            $(".navbar").addClass("navGray");
            checkNavLogo()
            
        } else {
            $(".navbar").removeClass("navGray");
            checkNavLogo()
           
        }
    }  else { //other pages
        if(dir == "rtl") {
            $(".navbar__logo img").attr('src', "img/icons/logoAr.png");
        }
    }
}


// system msg alert popup
var sysCloseIcon = $(".sys_msg_text a");
sysCloseIcon.on("click", () => {
    sysCloseIcon.closest(".sys_msg").fadeOut()
})


// change lang selct chevron color and logo img depend on navbar 
var logoImg = $(".navbar").find(".navbar__logo img");
var langArrow = $(".navbar").find(".lang_selected_arrow");
    function checkNavLogo() {
        if ($(".navbar").hasClass("navGray")) {   
            $(logoImg).attr("src", $(logoImg).attr("src1"));
            $(langArrow).attr("src", $(langArrow).attr("src1"));
        }else {
            $(logoImg).attr("src", $(logoImg).attr("src2"));
            $(langArrow).attr("src", $(langArrow).attr("src2"));
        }
    }
    checkNavLogo();
    


// show and hide languages select dropdown in desktop 
$(".lang_selected").on("click", () => {  
   $("#langsList").fadeToggle(); 
})
$("body").click((e) => {
    e.stopPropagation();
    if ($(e.target).hasClass('lang_selected') || $(e.target).hasClass('langSelect') ||$(e.target).hasClass('lang_selected_lang') || $(e.target).hasClass('lang_selected_arrow')) {
        return false;  
    } else {
        $("#langsList").fadeOut();
        
    }
    
})


// //////////////////////////


if ($(".solutionsTabs a.active"))  { 
    var img = $(".solutionsTabs a.active").find("img");
    var imgNewSrc = $(img).attr("data-src");
    $(img).attr("src",imgNewSrc )
}


$('.careers_loc_tabs a ').each((i , ele) => {
    $(ele).click(() => {
        $('.careers_loc_tabs a ').removeClass("active");
        $(ele).addClass("active");
        $(".careers_loc_content").css("display", "none");
        $(".careers_loc_content").each((i, el) => {
            if($(el).hasClass($(ele).attr("data-target"))) {
                $(el).fadeIn();
            }
        })
    })
})

$("#careers_loc_tabs_select").on("change", () => {
    console.log($("#careers_loc_tabs_select").val());
    $(".careers_loc_content").css("display", "none");
    $(".careers_loc_content").each((i, el) => {
        if($(el).hasClass($("#careers_loc_tabs_select").val())) {
            $(el).fadeIn();
        }
    })
} )



$(".careers_loc_content > .careers_loc_content_head").not(".careers_loc_content_head.careers_loc_content_body").each((i, el) => {
    $(el).on("click", () => {
        console.log($(el).closest(".careers_loc_content").find("careers_loc_content_body"));
        $(el).closest(".careers_loc_content").find(".careers_loc_content_body").slideToggle().css("display", "flex");
        $(el).find("img").toggleClass("open");
    })     
})


// custom input file 
document.querySelector("html").classList.add('js');
var fileInputs  = document.querySelectorAll( ".input-file" ),  
    buttons     = document.querySelectorAll( ".input-file-trigger" ),
    the_returns = document.querySelectorAll(".file-return"),
    fileInputArr = [...fileInputs],
    buttonsArr = [...buttons],
    the_returnsArr = [...the_returns];   

    for (var i = 0; i < fileInputArr.length; i++) {
        console.log(fileInputArr[i])
        $(buttonsArr[i]).on( "keydown", function( event ) {  
            if ( event.keyCode == 13 || event.keyCode == 32 ) {  
                fileInputArr[i].focus();  
            }  
        });
        buttonsArr[i].addEventListener( "click", function( event ) {  
            console.log( buttonsArr[i])
           fileInputArr[i].focus();
           return false;
        });  
        fileInputArr[i].addEventListener( "change", function( event ) {  
            console.log($(this).parent().next())
            $(this).parent().next().text($(this).val()); 
        });  
    }




    // career apply now btn scroll to form 
    $(".apply_now_btn a ").each((i, el) => {
        $(el).on("click", (e) => {
            e.preventDefault();
         var jobName =   $(el).closest(".careers_loc_content").find(".careers_loc_content_head-title h3").text().toLowerCase();
         $('html, body').animate({
            scrollTop: $(".application_form_form").offset().top
        }, 800);
        var select = $(".application_form_form").find(".custom_selectbox #Position");
        $(select).find("option").each( (i , el) => {
            $(el).removeAttr('selected')
            if ($(el).val().toLowerCase() == jobName) {
                $(el).attr('selected','selected');
            }
        })

        })
    })


    // var swiperFractionDiv = $(".swiper-pagination.swiper-pagination-fraction");
    // var swiperSpanText =  swiperFractionDiv.find("span").text();

    // swiperSpanText = ( "0" + swiperSpanText)


$(".Languages_img img")

function myFunction(checkMedia) {
    if (checkMedia.matches) { // If media query matches
        $(".Languages_img img").attr("src", $(".Languages_img img").attr("srcM"))
    } else {
        $(".Languages_img img").attr("src", $(".Languages_img img").attr("srcD"))
    }
  }
  
  var checkMedia = window.matchMedia("(max-width: 600px)")
  myFunction(checkMedia)


//   animation on big white buttons
  $(".main_btn_white").hover(function () {
          $(this).find("span").width("1%");
          $(this).find("span").animate({
              width : "24%"
          },1000)
          
      }, function () {
          
      }
  );

      //   add title and back btn to menu after the page load
      var backSrc =  $("#Menupopup").attr("backSrc");
      $("#Menupopup .menu-item_cont > .menu-item ").each( (i,el) => {
          if ($(el).hasClass("menu-item-has-children")) {
              $(el).children("a").on("click", (e) => {
                  e.stopPropagation();
                  $(el).children("a").next().css("display", "block");
                  var liName = $(el).children("a").text();
                  if ( $(el).children("a").next().find("li").first().hasClass("closeD")) {
                  } else {
                      $(el).find(".sub-menu").prepend(`<li>${liName}</li>`)
                      $(el).find(".sub-menu").prepend(` <li class='closeD'><a onclick='$(this).closest(".sub-menu").css("display","none")'><img src='${backSrc}' alt='back icon'>Back </a></li>`)
                  }
  
              })
          }
      } )
  
  
    
  
  


    
}); //jquery end



