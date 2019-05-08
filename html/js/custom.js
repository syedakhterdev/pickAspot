
$(document).ready(function(){
	$(".menu-btn").click(function(){
		$(this).toggleClass("show")
		$(".profile-dropdown").slideToggle("show");	
	});

	$(".btn-toggle.side").click(function(){
		$(this).toggleClass("show")
		$(".sidebar").toggleClass("show");	
	});
	
});

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();    
	if (scroll > 100) {
		$(".header").addClass("header-fixed");
	}else {
		$(".header").removeClass("header-fixed");
	}
});


