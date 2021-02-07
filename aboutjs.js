/*
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
*/
$(document).ready(function () {
    $(".thumb").hover(
        function () {
           
            $(this).css("filter", " hue-rotate(280deg) brightness(90%)");
         }, 
          
         function () {
            $(this).css("filter","hue-rotate(0deg)");
         }
    );
         
       // $(this).css('filter', 'hue-rotate(210deg)');


});