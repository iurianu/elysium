/*
$(document).ready( function() {
    var slider = $("#slider");
    var first  = $("#first");
    var second = $("#second");
    var third  = $("#third");
    
    first.bind('hover focus click', function() {
        slider.removeAttr('class').addClass('first-visible');
    });
    second.bind('hover focus click', function() {
        slider.removeAttr('class').addClass('second-visible');
    });
    third.bind('hover focus click', function() {
        slider.removeAttr('class').addClass('third-visible');
    });
})
*//*
var theIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  theIndex++;
  if (theIndex > x.length) {theIndex = 1}    
  x[theIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
*/