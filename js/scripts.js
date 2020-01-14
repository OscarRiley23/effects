$(document).ready(function() {
    //$("p").click(function() {
        
        $(".clickable").click(function() {
        $("#walrus-showing").slideToggle();
        $("#walrus-hidden").toggle();
    });
  });