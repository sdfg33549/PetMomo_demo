//JavaScript Document
$(function(){
	var $Top_btn = $("#Top_btn");


	$(".smoothScroll").click(function(){
		var tar = $(this).attr("data-target");
		$("html,body").stop().animate({
			scrollTop: $("#"+tar).offset().top - 120
		},750);
	});
	$Top_btn.on("click",function(){
		$("html,body").stop().animate({scrollTop:$(".header_box").offset().top},800,"easeOutCubic");
		return false;
	});
	$(".q_box").on("click",function(){
		$(this).find(".q_box::after").toggleClass("open");
		$(this).toggleClass("m_toggle");
		$(this).closest("div").find(".a_box").slideToggle();
	});

	function content_fadeIn(){
		var $window = $(window);
		var $bottom_of_window = $window.scrollTop();
		$(".content").each(function(i){
			var $now_content = $(this);
			if($bottom_of_window > $now_content.offset().top - $now_content.offset().top / 10){
				$(this).addClass("fade_In");
			}
		});
	}
	$(window).on("scroll",function(){
		content_fadeIn();
		if($(window).scrollTop() >= $("nav").offset().top / 2){
			$Top_btn.fadeIn(500);
		}else{
			$Top_btn.fadeOut(500);
		}
	});
});