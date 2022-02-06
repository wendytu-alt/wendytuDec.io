
    $(function () {

      $(" .textbx h2").animate(
        {
          top: "0",
          opacity: "1",
        },
        800
      );
      $(" .textbx h3").animate(
        {
          top: "0",
          opacity: "1",
        },
      800
      );
      $(".in03 p ").animate(
        {
          top: "0",
          opacity: "1",
        },
      800
      );
      

    });
    

    ///////////////////*視窗小於767時執行*///////////////////////////////////////////////
    if ($(window).width() < 767) {

       $(function () {$(".bn02_mac").animate(
        {
          right: "-50",
          opacity: "1",
        },
      800
      );
      $(".inbn01 .Lbx").animate(
        {
          left: "-15",
          opacity: "1",
        },
      800
      );
      });
      
  

  
     ///////////////////*視窗大於767時執行* ///////////////////////////////////////////////
    } else {

       $(function () {$(".bn02_mac").animate(
        {
          right: "-100",
          opacity: "1",
        },
      800
      );
      $(".inbn01 .Lbx").animate(
        {
          left: "0",
          opacity: "1",
        },
      800
      );
      });
     
    }