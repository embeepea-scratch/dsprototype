(function ($) {

//togg
Drupal.behaviors.togg = function (context) {

$(".toggler").click(function(){
  $(this).next().slideToggle("slow");
  return false;
}).next().hide();

};

})(jQuery);