(function ($) {

Drupal.behaviors.nf_selector_filter = {
    attach: function(context, settings) {
    // When the change event fires, run the submit handler
    $('.form-item-field-nf-department-tid input', context).change(function() {
      //alert('adding class');
      $(this).parent().siblings().removeClass('selected');
      $(this).parent().addClass('selected');
    });
    }
};

})(jQuery);