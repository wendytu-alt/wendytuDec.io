
 $(document).ready(function () {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
{
  /*以下內容for ie*/ 
  /*輪播*/
	var  swiper = new Swiper ('.mySwiper', {
    pagination: {
        el: ".pagination01",
        // dynamicBullets: true,
        clickable: true,
      },
      autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    autoHeight: true,
  });   

  /*產品輪播*/
	var  swiper = new Swiper ('.productSwiper', {
    slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".pagination02",
        clickable: true,
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next1",
      prevEl: ".prev1",
    },
  });  

  /*解決方案輪播*/
	var  swiper = new Swiper ('.waySwiper', {
    spaceBetween: 30,
    loop: false,
    spaceBetween: 60,
            slidesPerView: '3',
    pagination: {
        el: ".pagination03",
        clickable: true,
    },
  }); 
  /*相關商品*/
	var  swiper = new Swiper ('.anothproSwiper', {
    spaceBetween: 30,
    loop: false,

    pagination: {
        el: ".pagination04",
        clickable: true,
    },
  }); 
  /*產品列表一*/
	var  swiper = new Swiper ('.anothproSwiper01', {
    loop: false,
    spaceBetween: 30,
    pagination: {
        el: ".pagination05",
        clickable: true,
    },
  }); 
  /*產品列表二*/
	var  swiper = new Swiper ('.anothproSwiper02', {
    loop: false,
    spaceBetween: 30,
    pagination: {
        el: ".pagination06",
        clickable: true,
    },
  }); 

    /*新聞輪輪播*/
	var  swiper = new Swiper ('.newSwiper', {
    loop: true,

    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },

  });  


}else{

  var  swiper = new Swiper ('.mySwiper', {
    pagination: {
        el: ".pagination01",
        // dynamicBullets: true,
        clickable: true,
      },
      autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    autoHeight: true,
  });     

  /*產品輪播*/
	var  swiper = new Swiper ('.productSwiper', {
    loop: true,
    pagination: {
        el: ".pagination02",
        clickable: true,
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next1",
      prevEl: ".prev1",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
      },
    },
  });  

  /*解決方案輪播*/
	var  swiper = new Swiper ('.waySwiper', {
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        767: {
            slidesPerView: '1',
        },
        768: {
            spaceBetween: 60,
            slidesPerView: '3',
        },
    },
    pagination: {
        el: ".pagination03",
        clickable: true,
    },
  }); 
  /*相關商品*/
	var  swiper = new Swiper ('.anothproSwiperfirst', {
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        767: {
          
          slidesPerView: '1',
        },
        768: {
            spaceBetween: 30,
            slidesPerView: '3',
        },
    },
    pagination: {
        el: ".pagination04",
        clickable: true,
    },
  }); 
  /*產品列表一*/
	var  swiper = new Swiper ('.anothproSwiper01', {
    loop: false,
    spaceBetween: 30,
    breakpoints: {
        767: {
          spaceBetween: 0,
            slidesPerView: '1',
        },
        768: {
            spaceBetween: 30,
            slidesPerView: '3',
        },
    },
    pagination: {
        el: ".pagination05",
        clickable: true,
    },
  }); 
  /*產品列表二*/
	var  swiper = new Swiper ('.anothproSwiper02', {
    loop: false,
    spaceBetween: 30,
    breakpoints: {
        767: {
          spaceBetween: 0,
            slidesPerView: '1',
        },
        768: {
            spaceBetween: 30,
            slidesPerView: '3',
        },
    },
    pagination: {
        el: ".pagination06",
        clickable: true,
    },
  }); 

    /*新聞輪輪播*/
	var  swiper = new Swiper ('.newSwiper', {
    loop: true,

    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },

  });  

}
   

})