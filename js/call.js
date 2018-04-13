$(document).ready(function(){

	//gets height
	var pContainerHeight = $('#heightid').outerHeight(true);
	console.log(pContainerHeight);
	//gives div that height
	$('.kujoimgpos').css({'height' : pContainerHeight + 'px'});

	$(window).scroll(function(){
				
		var scrollStart = $('#imgstart').offset().top - $(window).height();
		
		console.log(scrollStart);

		var wScroll = $(this).scrollTop();
		
		console.log(wScroll);
		
		var scrollBottom = $(window).scrollTop() + $(window).height();
		
		console.log(scrollBottom);
		
		if (wScroll >= scrollStart) {

		$('.kujoimgpos').css({
			  'background-position' : '0 -'+(5 + ((wScroll - scrollStart) *.2)) +'px'
		});
	  }
	});
	
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
			  'background-position' : ((((btwScroll - btscrollStart) *.1)) - 180)+'px 20px'
		});
	  }
	});
	
	//gets height
	var pContainerHeight = $('#stheightid').outerHeight(true);
	console.log(pContainerHeight);
	//gives div that height
	$('.stimgpos').css({'height' : pContainerHeight + 'px'});

	$(window).scroll(function(){
				
		var stscrollStart = $('#stimgstart').offset().top - $(window).height();
		
		console.log(stscrollStart);

		var stwScroll = $(this).scrollTop();
		
		console.log(stwScroll);
		
		var stscrollBottom = $(window).scrollTop() + $(window).height();
		
		console.log(stscrollBottom);
		
		if (stwScroll >= stscrollStart) {

		$('.stimgpos').css({
			  'background-position' : '230px '+( (-((stwScroll - stscrollStart) *.2)) + 250) +'px'
		});
	  }
	});
	
	// $fn.scrollSpeed(step, speed, easing);
	jQuery.scrollSpeed(100, 800);
	

	
});