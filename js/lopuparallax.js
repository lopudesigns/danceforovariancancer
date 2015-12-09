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
});