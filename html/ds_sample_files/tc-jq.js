(function ($) {

/*
Drupal.behaviors.homeBordercc = {
	attach: function (context, settings) {
		$(".front .menu .climate-conditions").hover(
			function () {
				$(".content-margin_wrap").addClass("cc-border");
				},
			function () {
				$(".content-margin_wrap").removeClass("cc-border");
				}
			);
  
    }
} 
*/
Drupal.behaviors.homeBorderTC = {
	attach: function (context, settings) {
		$(".front .menu .teaching-climate").hover(
			function () {
				$(".content-margin_wrap").addClass("tc-border");
				},
			function () {
				$(".content-margin_wrap").removeClass("tc-border");
				}
			);
  
    }
} 
Drupal.behaviors.homeBorderDS = {
	attach: function (context, settings) {
		$(".front .menu .supporting-decisions").hover(
			function () {
				$(".content-margin_wrap").addClass("ds-border");
				},
			function () {
				$(".content-margin_wrap").removeClass("ds-border");
				}
			);
  
    }
} 
Drupal.behaviors.homeBorderData = {
	attach: function (context, settings) {
		$(".front .menu .maps-data").hover(
			function () {
				$(".content-margin_wrap").addClass("maps-data-border");
				},
			function () {
				$(".content-margin_wrap").removeClass("maps-data-border");
				}
			);
  
    }
}
Drupal.behaviors.homeBorderNewsf = {
	attach: function (context, settings) {
		$(".front .menu .news-features").hover(
			function () {
				$(".content-margin_wrap").addClass("nf-border");
				},
			function () {
				$(".content-margin_wrap").removeClass("nf-border");
				}
			);
  
    }
} 

    
    Drupal.behaviors.tcLToggle = {
		attach: function (context, settings) {

$(document).ready(function(){
  $(".toggler").click(function(){
    $(this).next().slideToggle("fast");
    $(this).toggleClass('open');
    return false;
  }).next().hide();
});
         
        }
}             
})(jQuery);
