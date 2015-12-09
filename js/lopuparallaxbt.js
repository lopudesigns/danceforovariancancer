$(document).ready(function(){

	//gets height
	var pContainerHeight = $('#btheightid').outerHeight(true);
	console.log(pContainerHeight);
	//gives div that height
	$('.btimgpos').css({'height' : pContainerHeight + 'px'});

	$(window).scroll(function(){
				
		var btscrollStart = $('#btimgstart').offset().top - $(window).height();
		
		console.log(btscrollStart);

		var btwScroll = $(this).scrollTop();
		
		console.log(btwScroll);
		
		var btscrollBottom = $(window).scrollTop() + $(window).height();
		
		console.log(btscrollBottom);
		
		if (btwScroll >= btscrollStart) {

		$('.btimgpos').css({
			  'background-position' : '0 '+((-((btwScroll - btscrollStart) *.2)) + 200) +'px'
		});
	  }
	});
});