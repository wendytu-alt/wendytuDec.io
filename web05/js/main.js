/*-------------------- 內容js設定 --------------------*/

$(window).on("load resize", function() {  
  // ft();/*FOOT置底*/
  // cardH() /*卡片區塊高度*/
})


$(function(){

  /*卡片翻轉設定*/
	if ($(window).width() < 769) {  
    //小網//
    $('#controlCard1').click(function(){
    $('#controlCard1').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard2').click(function(){
      $('#controlCard2').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard3').click(function(){
      $('#controlCard3').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard4').click(function(){
      $('#controlCard4').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard5').click(function(){
      $('#controlCard5').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard6').click(function(){
      $('#controlCard6').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard7').click(function(){
      $('#controlCard7').toggleClass('applyflip');
    }.bind(this));	
	}else{
    //大網//
    $('#controlCard1').hover(function(){
    $('#controlCard1').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard2').hover(function(){
      $('#controlCard2').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard3').hover(function(){
      $('#controlCard3').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard4').hover(function(){
      $('#controlCard4').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard5').hover(function(){
      $('#controlCard5').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard6').hover(function(){
      $('#controlCard6').toggleClass('applyflip');
    }.bind(this));
    $('#controlCard7').hover(function(){
      $('#controlCard7').toggleClass('applyflip');
    }.bind(this));
	
	}

  /*小網menu開合*/
  $(".menuIc").click(function(){
    $(".menuIc").toggleClass("on");
    $(".navM").slideToggle(200)
  })
  $(".navM li a").click(function(){
    $(".menuIc").removeClass("on");
    $(".navM").slideUp(400);
  })

  /*圖表開合*/
  $(".control").click(function(){
    $(this).parents(".bi_chartBx").toggleClass("on");
    $(this).siblings(".bi_chartBx .chartBlock").slideToggle();

  })

  /*qa開合*/
  $(".q_item").click(function(){
    $(this).parent(" li").toggleClass("on");
    $(this).siblings(".a_item").slideToggle()

  })
  /*popup小提醒文字開合*/
  $(".noteBx  h5 ").click(function(){
     $(this).parents(".noteBx").toggleClass("on");
     $(this).siblings(".note").slideToggle(200)
  })

});

  //錨點滑動
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
    $('html, body').animate({
        scrollTop: target.offset().top - 100
    }, 1000);
    return false;
        }
    }
    });
});

  




 $(document).ready(function () {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  /*banner輪播*/
  var swiper = new Swiper(".bannerSwiper", {
      pagination: {
        el: ".bannerPagination",
        clickable: true,
      },
      navigation: {
          nextEl: ".bannerNext",
          prevEl: ".bannerPrev",
      },
  });

  /*存股步驟輪播*/
  var swiper = new Swiper(".stepSwiper", {
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".stockSwiper", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".stockNext",
          prevEl: ".stockPrev",
        },
        thumbs: {
          swiper: swiper,
        },
        autoHeight: true,
  });

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
  {
    /*以下內容for ie*/ 
    /*輪播*/

    /*三大優勢卡片輪播*/
    var swiper = new Swiper(".Cardsy1swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".Cardsy1Pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".Cardsy1Next",
          prevEl: ".Cardsy1Prev",
      },
    });

      /*投資心法區域卡片輪播*/
    var swiper = new Swiper(".Cardsy2swiper", {
        slidesPerView: 4.2,
            spaceBetween: 30,
        pagination: {
          el: ".Cardsy2Pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".Cardsy2Next",
          prevEl: ".Cardsy2Prev",
      },
    });

  }else{

    /*三大優勢卡片輪播*/
    var swiper = new Swiper(".Cardsy1swiper", {
        spaceBetween: 20,
        pagination: {
          el: ".Cardsy1Pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".Cardsy1Next",
          prevEl: ".Cardsy1Prev",
      },
      breakpoints: {
          767: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
    });

      /*投資心法區域卡片輪播*/
    var swiper = new Swiper(".Cardsy2swiper", {
        spaceBetween: 20,
        pagination: {
          el: ".Cardsy2Pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".Cardsy2Next",
          prevEl: ".Cardsy2Prev",
      },
      breakpoints: {
          1023: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4.2,
            spaceBetween: 30,
          },
        },
    });
  }

})


