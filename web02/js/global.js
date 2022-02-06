
$(document).ready(function () {

  /*-------------------- 小網MMENU --------------------*/
  $("#menu").mmenu({
    extensions: [
      "position-left", //從右邊開啟menu
      "pagedim-black", //主畫面變暗
    ],
    slidingSubmenus: false, //取消往右滑動進入下層

  });

  /*header scroll 固定*/
  $(window).scroll(function() {
      if ($(this).scrollTop() > 80){  
          $(".header").addClass("header_sticky");
      }
      else{
          $(".header").removeClass("header_sticky");
      }
  });

  /*web menu 控制*/
    $(".R_area li").hover(function () {
      $(this).contents(".list_in").toggleClass("list_open");
    });

  /* mobile footer開合*/
    $(".mtit").click(function () {
      $(".mtit").toggleClass("mtopen");
      $(".tp_area").toggleClass("tp_open");
    });


  
  /*go_top控制*/
  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 100) {
      $(".go_top").animate({
        opacity: '0.7',
      }, 1000)
    }
  });
  $(function () {
    var $win = $(window);
    var $backToTop = $('.go_top');
    // 當用戶點擊按鈕時，通過動畫效果返回頭部
    $backToTop.click(function () {
      $('html, body').animate({ scrollTop: 0 }, 200);
    });
  });


  /*footer置底*/
  var $win = $(window);
  $win
    .bind("resize", function () {
      try {
        $(".main").css(
          "min-height",
          $win.height() - $("footer").outerHeight() - $(".main").offset().top - 40
        );
      } catch (err) {}
    })
    .resize();
});


  









