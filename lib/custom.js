$(function(){
	parallax();
	mouseEvents();
	$('input, textarea').placeholder();
});


function parallax(){
	$(window).scroll(function(){
		yDiff = $(window).scrollTop();
		$(".headerContent").css({"top":7/8*yDiff});
		return false;
	});
}

function mouseEvents(){
	$(".portfolioImageWrapper").hover(function(){
		$(this).find("div").stop().fadeIn()}
	,function(){
		$(this).find("div").stop().fadeOut()	
	});
}

