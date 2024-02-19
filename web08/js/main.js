/*-------------------- 頁面最小高度 --------------------*/
$(window).on("load resize", function() {
    var wH = $(window).height();
    //抓高度
    var headerH = $(".header").outerHeight();
    var footerH = $(".footer").outerHeight();
    $(".container").css('min-height', wH - headerH - footerH );
});

/*-------------------- 小網MMENU --------------------*/
//MMENU
$(document).ready(function() {
    $("#menu").mmenu({
        "slidingSubmenus": false,
        extensions: [
            "position-back",
            "pagedim-black"
         ], 
        navbar: {
           add: false //移除標題
        }
    });
});

/*FAQ*/
$(document).ready(function() {
    $('.foldList_inner').hide();
    $('.foldList .open .foldList_inner').slideDown(250);
});
$(".foldList_title").click(function() {
  $('.foldList_title').parents('li').removeClass('open');
  if($(this).siblings('.foldList_inner').is(':hidden')){
    $('.foldList_inner').slideUp(250);
    $(this).siblings('.foldList_inner').slideToggle(250);
    $(this).parents('li').addClass('open'); 
  }
  else{
    $(this).siblings('.foldList_inner').slideToggle(250);
  }
});