
$(function(){


});

/*監聽視窗改變時refresh*/
var dwidth = jQuery(window).width();
	jQuery(window).bind('resize', function(e){
		var wwidth = jQuery(window).width();

		if(dwidth!==wwidth){
			dwidth = jQuery(window).width();

			if (window.RT) clearTimeout(window.RT);
			window.RT = setTimeout(function(){
					this.location.reload(false); /* false to get page from cache */
			}, 0);
		}

});



