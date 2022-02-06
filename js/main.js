
/*-------------------- 側邊選單 --------------------*/
$(function(){
  // 判斷展開方向
  var menu_deriction = $('#pageMenu').attr('data-from');
  if (menu_deriction == '') {
    $('.page').addClass('show-left');
  }
  if (menu_deriction == 'right') {
    $('.page').addClass('show-right');
  }
  if (menu_deriction == 'up') {
    $('.page').addClass('show-up');
  }

  // 側邊選單展開收合
  $('.pageMenu-btn').click(function () {
    $('.page').addClass('openmenu');
  });
  $('.page_cover').click(function () {
    // 關閉摺疊
    $('#pageMenu .hasSub').find('ul').slideUp(200);
    $('#pageMenu').find('.open').removeClass('open');
    $('.page').removeClass('openmenu');
  });
  /* 側邊選單_resize關閉 */
  $(window).on('resize', function () {
    $('.page').removeClass('openmenu');
  });

  // 折疊的選單
  $('#pageMenu .hasSub').children('ul').slideUp();
  $('#pageMenu .hasSub').append('<button></button>');
  $('#pageMenu .hasSub button').click(function() {
    var folder = $(this).parent('li.hasSub');// 父層li
    //未展開
    if( folder.hasClass('open') == false ){
      // 選單展開
      folder.children('ul').slideDown(200);
      folder.addClass('open');
      // 隔壁有展開選單要收合
      // 隔壁有展開選單的子層要收合
      folder.siblings('.open').find('ul').slideUp(200);
      folder.siblings('.open').find('.open').removeClass('open');
      folder.siblings('.open').removeClass('open');
    }else { //已展開
      // 選單收合
      folder.find('ul').slideUp(200);
      folder.removeClass('open');
      // 這個li 子層內有展開選單要收合
      folder.find('.hasSub.open').removeClass('open');
    }
  });
});


/*-------------------- 內容js設定 --------------------*/

$(window).on("load resize", function() {  
  ft();/*FOOT置底*/
})
/*footer 置底*/
function ft() {
    var $wH = $(window).outerHeight();
    var $hH = $("header").outerHeight();
    var $fH = $("footer").outerHeight();
    // var $curH = $(".curveDeco").outerHeight()

    $(".main").css('min-height', $wH - $hH );
}



$(function(){

  /*banner輪播區塊 */
  // const items = document.querySelectorAll('.slider-item')
        const items = document.querySelectorAll('.slider-item');//輪播class
        const itemCount = items.length; //itemCount 輪播圖數量
        const nextItem = document.querySelector('.next');  //下一張輪播
        const previousItem = document.querySelector('.previous');  //一張輪播
        let count = 0;  //目前輪播數值

        function showNextItem() {
            items[count].classList.remove('active'); // 原本的移除active //目前輪播數值0

            if (count < itemCount - 1) {   //目前輪播數值 0 ++
                count++;
            } else {
                count = 0;
            }

            items[count].classList.add('active');  //目前輪播數值 0 ++的該class + active (產生動畫效果)
            console.log(count);
        }

        function showPreviousItem() {
            items[count].classList.remove('active');

            if (count > 0) {
                count--;
            } else {
                count = itemCount - 1;
            }

            items[count].classList.add('active');
            // Check if working...
            console.log(count);
        }


        function keyPress(e) {    //鍵盤控制 左右切換
            e = e || window.event;

            if (e.keyCode == '37') {
                showPreviousItem();
            } else if (e.keyCode == '39') {
                showNextItem();
            }
        }

        nextItem.addEventListener('click', showNextItem);
        previousItem.addEventListener('click', showPreviousItem);
        document.addEventListener('keydown', keyPress); // 鍵盤離開時執行動作

  /*banner輪播區塊結束 */



  ft();/*FOOT置底*/

  /*select 選單選取後更改色*/
  $("select").change(function(){
    $(this).css("color","#505050")
  })

  /*header 滾軸超過40 改變樣式*/
  $(window).scroll(function(){
    if($(window).scrollTop()>=40){
        $("header").addClass("sticky")
    }
    else{
        $("header").removeClass("sticky")
    }
  });

 





});



/*輪播設定*/
$(function(){
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  /*工作經歷輪播*/
  var swiper = new Swiper(".stepSwiper", {
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".stepconSwiper", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".stepconNext",
          prevEl: ".stepconPrev",
        },
        thumbs: {
          swiper: swiper,
        },
        autoHeight: true,
  });
    /*vedio輪播*/
  var swiper = new Swiper(".videoSwiper", {
    slidesPerView: 1,
     spaceBetween: 30,
     autoHeight: true,
      pagination: {
        el: ".bannerPagination",
        clickable: true,
      },
      navigation: {
          nextEl: ".videoNext",
          prevEl: ".videoPrev",
      },
  });
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
  {
    /*以下內容for ie*/ 
    /*輪播*/

    /*banner輪播*/
  var swiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1.5,
     spaceBetween: 30,
      pagination: {
        el: ".bannerPagination",
        clickable: true,
      },
      navigation: {
          nextEl: ".bannerNext",
          prevEl: ".bannerPrev",
      },
  });
  /*web輪播*/
  var swiper = new Swiper(".webSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop:true,
      pagination: {
        el: ".bannerPagination",
        clickable: true,
      },
      navigation: {
          nextEl: ".bannerNext",
          prevEl: ".bannerPrev",
      },
  });

  }else{



    /*banner輪播*/
  var swiper = new Swiper(".bannerSwiper", {
    spaceBetween: 30,
      pagination: {
        el: ".bannerPagination",
        clickable: true,
      },
      navigation: {
          nextEl: ".bannerNext",
          prevEl: ".bannerPrev",
      },
      breakpoints: {
          767: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
  });
  /*web輪播*/
  var swiper = new Swiper(".webSwiper", {
    spaceBetween: 30,
    centeredSlides: false,
    loop:true,
      pagination: {
        el: ".bannerPagination",
        clickable: true,
      },
      navigation: {
          nextEl: ".bannerNext",
          prevEl: ".bannerPrev",
      },
      breakpoints: {
          767: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView:3,
            spaceBetween: 30,
          },
        },
  });


  }

  
})




