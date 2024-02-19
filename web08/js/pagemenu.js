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