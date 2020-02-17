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



    // COUNTER FUNCTION in homepage facts SECTION
   
    window.addEventListener("scroll", counter);
    $(window).on('load', counter);

    var counters = $(".facts__counter--number .num");
    var countersArr = [];
    for(var i =0; i < counters.length; i++) {
        countersArr.push(counters[i]);
    }
    // var finalVals = $(".facts__counter--number").attr("num");
    // var finalValsArr = [];
    // for(var i =0; i < finalVals.length; i++) {
    //     finalValsArr.push(finalVals[i]);
    // }

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


// change lang selct chevron color depend on navbar 
    $(".navbar.navGray").find(".navbar__logo img").attr("src", "./img/home/logo.png");
    $(".navbar.navGray").find(".lang_selected_arrow").attr("src", "./img/home/down_b.png");


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
            $(".navbar__logo img").attr('src', "img/home/logo.png");
            $(".lang_selected_arrow").attr('src', "./img/home/down_b.png");
            // if(dir == "rtl") {
            //     $(".navbar__logo img").attr('src', "img/icons/logoAr.png");
            // }
        } else {
            $(".navbar").removeClass("navGray");
            $(".navbar__logo img").attr('src', "img/home/logo-w.png");
            $(".lang_selected_arrow").attr('src', "./img/home/down_w.png");
            // if(dir == "rtl") {
            //     $(".navbar__logo img").attr('src', "img/icons/logoAr2.png");
            // }
        }
    }  else { //other pages
        if(dir == "rtl") {
            $(".navbar__logo img").attr('src', "img/icons/logoAr.png");
        }
    }
}

// //////////////////////////


if ($(".solutionsTabs a.active"))  { 
    var img = $(".solutionsTabs a.active").find("img");
    var imgNewSrc = $(img).attr("data-src");
    $(img).attr("src",imgNewSrc )
}










    
});



