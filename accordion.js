$(document).ready(function(){

  $(".accordion-heading").click(function() {
    $(this).parent().find(".accordion-body").slideToggle('fast');
    $(".accordion-heading").not(this).parent().find(".accordion-body").slideUp('fast');
  });
});
