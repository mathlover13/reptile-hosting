// this file holds all the code for the responsive navbar and the to top button

// -------------------------------- responsive navbar -------------------------------- //
// toggle hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function responsive_navbar() {
  var x = document.getElementById("topnavbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// ----------------------------------------------------------------------------------- //

// ---------------------------------- to top button ---------------------------------- //
// get the button from document
let topbutton = document.getElementById("top_button");

// when the user scrolls down 20px from the top of the document, show the button (toggle it on)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// ----------------------------------------------------------------------------------- //